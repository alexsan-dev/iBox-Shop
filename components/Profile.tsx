// TIPOS DE DATOS
import { useState, SetStateAction, Dispatch, useContext } from "react";
import { firestore } from "firebase";

// HOOKS Y ANIMACIÓN
import { useUserGet, defUserData } from "../utils/hooks";
import { motion, Variants } from "framer-motion";

// TIPOS DE DATOS FIREBASE Y NEXT
import { NextPage } from "next";
import { useRouter } from "next/router";
import { User } from "firebase";

// CONTEXTO Y COMPONENTES
import appContext from "../utils/appContext";
import ProfileHeader from "./ProfileHeader";

// CONFIGURACIÓN DE ANIMACIÓN
let ease: number[] = [0.175, 0.85, 0.42, 0.96];
let duration: number = 0.5;
let transition: object = { duration, ease };

// OBJECTOS DE ANIMACIÓN
const head: Variants = {
  exit: { opacity: 0, y: -150, transition },
  enter: { opacity: 1, y: 0, transition }
};

// PROPIEDADES
interface Props { user: User | userModel; }

// ESTADO INICIAL E INTERFACES
interface IState { userData: userModel | null | undefined | firestore.DocumentData; }
const defState: IState = { userData: defUserData };

const Profile: NextPage<Props> = (props: Props) => {
  // ESTADO DEL COMPONENTE Y CONTEXTO
  const [user, setUser]: [IState, Dispatch<SetStateAction<IState>>] = useState(defState);
  const str = useContext(appContext.appContext).lang.profilePage;

  // OBTENER USUARIO DE FIREBASE O LOCAL
  if (useRouter().pathname === "/cuenta") useUserGet(props.user.uid)
    .then((userData: IState["userData"]) => userData ? setUser({ userData }) : null)
    .catch((err: Error) => console.log(err));

  return (
    <motion.div initial="exit" animate="enter" exit="exit"
      variants={{
        exit: { transition: { staggerChildren: 0.1 } },
        enter: { transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.div variants={head}>
        <ProfileHeader user={user.userData || defUserData} title={str.title} />
      </motion.div>
    </motion.div>
  );
};

export default Profile;