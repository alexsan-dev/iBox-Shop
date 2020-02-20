// TIPOS DE DATOS
import { useState, SetStateAction, Dispatch, useContext } from "react";
import { firestore } from "firebase";

// HOOKS Y ANIMACION
import { useUserGet } from "../utils/hooks";
import { motion, Variants } from "framer-motion";

// TIPOS DE DATOS FIREBASE Y NEXT
import { NextPage } from "next";
import { useRouter } from "next/router";
import { User } from "firebase";

// CONTEXTO Y COMPONENTES
import appContext from "../utils/appContext";
import ProfileHeader from "./ProfileHeader";

// CONFIGURACION DE ANIMACION
let ease: number[] = [0.175, 0.85, 0.42, 0.96];
let duration: number = 0.5;
let transition: object = { duration, ease };

// OBJECTOS DE ANIMACION
const head: Variants = {
  exit: { opacity: 0, y: -150, transition },
  enter: { opacity: 1, y: 0, transition }
};

// PROPIEDADES
interface Props { user: User | userModel; }

// ESTADO INICIAL E INTERFACES
interface Istate { userData: userModel | null | undefined | firestore.DocumentData; }
const userData: userModel = {
  displayName: "",
  email: "",
  provider: "",
  photoURL: null,
  emailVerified: false
};
const defState: Istate = { userData };

const Profile: NextPage<Props> = (props: Props) => {
  console.log('%c😀 RENDER PROFILE PAGE', 'background: #4caf50;color:#fff;padding:5px;font-weight:bold; border-radius:5px');

  // ESTADO DEL COMPONENTE Y CONTEXTO
  const [user, setUser]: [Istate, Dispatch<SetStateAction<Istate>>] = useState(defState);
  const str = useContext(appContext.appContext).lang.profilePage;

  // OBTENER USUARIO DE FIREBASE O LOCAL
  if (useRouter().pathname === "/cuenta") useUserGet(props.user.uid)
    .then((userData: Istate["userData"]) => userData ? setUser({ userData }) : null)
    .catch((err: Error) => console.log(err));

  return (
    <motion.div initial="exit" animate="enter" exit="exit"
      variants={{
        exit: { transition: { staggerChildren: 0.1 } },
        enter: { transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.div variants={head}>
        <ProfileHeader user={user.userData || userData} title={str.title} />
      </motion.div>
    </motion.div>
  );
};

export default Profile;