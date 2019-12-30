import ProfileHeader from "./ProfileHeader";
import { useState } from 'react';
import { useUserGet } from '../utils/hooks'
import { motion } from "framer-motion";

let ease = [0.175, 0.85, 0.42, 0.96];
let duration = 0.5;
let transition = { duration, ease };

const head = {
   exit: { opacity: 0, y: -150, transition },
   enter: { opacity: 1, y: 0, transition }
}

const Profile = props => {
   const userTemp = {
      displayName:"Nombre de usuario", 
      email:"correo@dominio",
      provider:"password",
      photoURL:null
   };
   const [user, setUser] = useState(userTemp)
   useUserGet(props.user.uid, res => setUser(res.data()), err => console.log(err));
   return (
      <motion.div initial="exit" animate="enter" exit="exit" variants={{ exit: { transition: { staggerChildren: 0.1 } }, enter: { transition: { staggerChildren: 0.1 } } }}>
         <motion.div variants={head}>
            <ProfileHeader user={user || userTemp} />
         </motion.div>
      </motion.div>
   )
}

export default Profile;
