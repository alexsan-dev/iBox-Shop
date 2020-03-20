// ANIMACION, HOOKS Y TIPOS DE DATOS
import { motion, Variants } from "framer-motion";
import { NextPage } from "next";

// CONTEXTO
import { useContext } from "react";
import appContext from "../utils/appContext";

// COMPONENTES
import Header from "../components/Header";
import CartSummary from "../components/CartSummary";

// CONFIGURACION DE ANIMACION
let ease: number[] = [0.175, 0.85, 0.42, 0.96];
let duration: number = 0.5;
let transition: object = { duration, ease };

// OBJECTOS DE ANIMACION
const pageAnim: Variants = {
  exit: { opacity: 0, y: -150, transition },
  enter: { opacity: 1, y: 0, transition }
};
const slideAnim: Variants = {
  exit: { opacity: 0, x: 200, transition },
  enter: { opacity: 1, x: 0, transition }
};

// COMPONENTE 
const CartPage: NextPage = () => {
  // TEXTO DE PAGINA DE INICIO Y USUARIO
  const strings = useContext(appContext.appContext).lang.cartPage;
  const { user } = useContext(appContext.appContext);

  return (
    <>
      <motion.div initial="exit" animate="enter" exit="exit"
        variants={{
          exit: { transition: { staggerChildren: 0.1 } },
          enter: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.div variants={pageAnim}>
          <Header
            back
            href="/"
            img={require("../assets/cart.png")}
            span={"BEST DELIVERY"}
            text={strings.header.text}
            title={
              <>
                {strings.header.title + " " + (user ? strings.header.titleExt + " " + user.displayName?.split(" ")[0] : "") + " "}
                < i className="material-icons">local_shipping</i>
              </>
            }
          />
        </motion.div>

        <motion.div variants={slideAnim}>
          <CartSummary {...strings.summary} />
        </motion.div>

      </motion.div>
    </>
  );
};

export default CartPage;