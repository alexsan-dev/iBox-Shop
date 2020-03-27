// TIPOS DE DATOS
import { useState, SetStateAction, Dispatch, useContext, useEffect } from "react";
import { firestore } from "firebase";

// HOOKS Y ANIMACIÓN
import { useUserGet, defUserData, useUserSet, showAlert } from "../utils/hooks";
import { motion, Variants } from "framer-motion";

// TIPOS DE DATOS FIREBASE Y NEXT
import { NextPage } from "next";
import { User } from "firebase";

// CONTEXTO Y COMPONENTES
import appContext from "../utils/appContext";
import ProfileHeader from "./ProfileHeader";
import ProfileInformation from "./ProfileInformation";
import ShopsHistory from "./ShopsHistory";

// CONFIGURACIÓN DE ANIMACIÓN
let ease: number[] = [0.175, 0.85, 0.42, 0.96];
let duration: number = 0.5;
let transition: object = { duration, ease };

// OBJECTOS DE ANIMACIÓN
const head: Variants = {
  exit: { opacity: 0, y: -150, transition },
  enter: { opacity: 1, y: 0, transition }
};
const info: Variants = {
  exit: { opacity: 0, x: -150, transition },
  enter: { opacity: 1, x: 0, transition }
}
const history: Variants = {
  exit: { opacity: 0, x: 150, transition },
  enter: { opacity: 1, x: 0, transition }
}

// PROPIEDADES
interface Props { user: User | userModel; }

// ESTADO INICIAL E INTERFACES
interface IState { userData: userModel | null | undefined | firestore.DocumentData; }
const defState: IState = { userData: defUserData };

const Profile: NextPage<Props> = (props: Props) => {
  // ESTADO DEL COMPONENTE Y CONTEXTO
  const [state, setState]: [IState, Dispatch<SetStateAction<IState>>] = useState(defState);
  const str = useContext(appContext.appContext).lang.profilePage;
  const user = useContext(appContext.appContext).user;

  // OBTENER NUEVOS DATOS
  const getNewData = (values: IForms, btn: HTMLButtonElement) => {
    showAlert({
      title: str.info.confirmUpdate.alert.title,
      body: str.info.confirmUpdate.alert.text,
      type: "window",
      fixed: true
    })

    //@ts-ignore
    let userCopy: userModel | null = state.userData;
    if (userCopy) {
      userCopy.address = values.address;
      userCopy.phone = values.phone;
      userCopy.nit = values.nit;

      useUserSet(user?.uid, userCopy)
        .then(() => {
          // QUITAR ALERTA DE ESPERA
          const cAlert: NodeListOf<HTMLDivElement> = document.querySelectorAll(".alertContainer") as NodeListOf<HTMLDivElement>;
          cAlert.forEach((el: HTMLDivElement) => {
            el.style.opacity = "0";
            setTimeout(() => el.style.display = "none", 400)
          })

          btn.style.pointerEvents = "unset";
          setState({ userData: userCopy });
        })
        .catch((e: Error) => console.log(e));
    }
  }

  // OBTENER USUARIO DE FIREBASE O LOCAL
  useEffect(() => {
    useUserGet(props.user.uid)
      .then((userData: IState["userData"]) => userData ? setState({ userData }) : null)
      .catch((err: Error) => console.log(err));
  }, [])

  return (
    <motion.div initial="exit" animate="enter" exit="exit"
      variants={{
        exit: { transition: { staggerChildren: 0.1 } },
        enter: { transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.div variants={head}>
        <ProfileHeader user={state.userData || defUserData} title={str.title} span={str.span} />
      </motion.div>

      <motion.div variants={info}>
        <ProfileInformation updateCall={getNewData} user={state.userData || defUserData} strings={str.info} />
      </motion.div>

      <motion.div variants={history}>
        <ShopsHistory user={state.userData || defUserData} strings={str.history} />
      </motion.div>

    </motion.div>
  );
};

export default Profile;