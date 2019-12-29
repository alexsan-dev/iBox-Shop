import Header from "./Header";
import Forms from "./Forms";
import Footer from "./Footer";
import Cart from '../assets/cart.png';
import { motion } from 'framer-motion';

let ease = [0.175, 0.85, 0.42, 0.96];
let duration = 0.5;
let transition = { duration, ease };

const pageAnim = {
   exit: { opacity: 0, y: -150, transition },
   enter: { opacity: 1, y: 0, transition }
}
const fAnim = {
   exit: { opacity: 0, y: 150, transition },
   enter: { opacity: 1, y: 0, transition }
}
const slideAnim = {
   exit: { opacity: 0, x: 200, transition },
   enter: { opacity: 1, x: 0, transition }
}

const Logins = props => {
   return (
      <>
         <motion.div initial="exit" animate="enter" exit="exit" variants={{ exit: { transition: { staggerChildren: 0.1 } }, enter: { transition: { staggerChildren: 0.1 } } }}>

            <motion.div variants={pageAnim}>
               <Header title={(<>Compra más rápido <i className="material-icons">shop</i></>)} text="En iBox puedes comprar sin registrarte pero te perderás de nuestras ofertas, también puedes registrarte con tu número de teléfono. 😁" img={Cart} href="/" icon="undo" link="Regresar" span="BEST SERVICE" />
            </motion.div>

            <motion.div variants={slideAnim}>
               <Forms />
            </motion.div>

            <motion.div variants={fAnim}>
               <Footer store />
            </motion.div>

         </motion.div>
      </>
   )
}
export default Logins;
