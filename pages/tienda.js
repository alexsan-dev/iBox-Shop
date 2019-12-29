import { motion } from 'framer-motion';

let easing = [0.175, 0.85, 0.42, 0.96]; const pageAnim = {
   exit: {
      opacity: 0,
      transition: {
         duration: 0.2,
         ease: easing
      }
   },
   enter: {
      opacity: 1,
      transition: {
         duration: 0.2,
         ease: easing
      }
   }
}

export default class extends React.Component {
   render() {
      return (
         <div>
            <motion.div initial="exit" animate="enter" exit="exit">
               <motion.div variants={pageAnim}>
                  <h1>Tienda</h1>
               </motion.div>
            </motion.div>
         </div>
      )
   }
}
