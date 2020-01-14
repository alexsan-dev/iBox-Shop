// TIPOS DE DATOS
import { useState, SetStateAction, Dispatch, useContext } from "react";

// HOOKS Y ANIMACION
import { useUserGet, useRipples } from "../utils/hooks";
import { motion, Variants } from "framer-motion";

// TIPOS DE DATOS FIREBASE Y NEXT
import { NextPage } from "next";
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

// ESTADO INICIAL
const userTemp: userModel = {
  displayName: "",
  email: "",
  provider: "",
  photoURL: null,
  emailVerified: false
};

const Profile: NextPage<Props> = (props: Props) => {
  console.log('%c😀 RENDER PROFILE PAGE', 'background:#2196f3; color: #ffff; padding:5px; font-weight:bold; border-radius:5px');

  // ESTADO DEL COMPONENTE Y CONTEXTO
  const [user, setUser]: [User | userModel, Dispatch<SetStateAction<User | userModel>>] = useState(userTemp);
  const str = useContext(appContext.appContext).lang.profilePage;

  // OBTENER USUARIO DE FIREBASE O LOCAL
  useUserGet(
    props.user.uid,
    (res: User | userModel) => setUser(res),
    (err: any) => console.log(err)
  );

  // APLICAR EFECTO RIPPLE
  useRipples();

  return (
    <motion.div initial="exit" animate="enter" exit="exit"
      variants={{
        exit: { transition: { staggerChildren: 0.1 } },
        enter: { transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.div variants={head}>
        <ProfileHeader user={user || userTemp} title={str.title} />
      </motion.div>
    </motion.div>
  );
};

export default Profile;