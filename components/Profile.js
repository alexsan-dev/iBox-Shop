import ProfileHeader from "./ProfileHeader";
import { motion } from "framer-motion";

let ease = [0.175, 0.85, 0.42, 0.96];
let duration = 0.5;
let transition = { duration, ease };

const head = {
   exit: { opacity: 0, y: -150, transition },
   enter: { opacity: 1, y: 0, transition }
}

const Profile = props => {
   return (
      <motion.div initial="exit" animate="enter" exit="exit" variants={{ exit: { transition: { staggerChildren: 0.1 } }, enter: { transition: { staggerChildren: 0.1 } } }}>
         <motion.div variants={head}>
            <ProfileHeader user={props.user} />
         </motion.div>
      </motion.div>
   )
}

export default Profile;
