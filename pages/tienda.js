import { motion } from 'framer-motion';

const ease = [0.175, 0.85, 0.42, 0.96];
const transition = { duration: 0.2, ease };

const pageAnim = {
   exit: { opacity: 0, transition },
   enter: { opacity: 1, transition }
}

const Tienda = () => {
   console.log("Update Store Page");
   return (
      <>
         <motion.div initial="exit" animate="enter" exit="exit">
            <motion.div variants={pageAnim}>
               <h1>Tienda</h1>
            </motion.div>
         </motion.div>
      </>
   )
}

export default Tienda;
