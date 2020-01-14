// CONTENEDORES DE ANIMACION Y HOOKS
import { motion, Variants } from "framer-motion";
import { useContext } from "react";
import { NextPage } from "next";

// COMPONENTES Y CONTEXTO
import appContext from "../utils/appContext";
import Header from "./Header";
import Forms from "./Forms";

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

const Logins: NextPage = () => {
  console.log('%c📝 RENDER LOGIN PAGE', 'background:#2196F3; color: #ffff; padding:5px; font-weight:bold; border-radius:5px');

  // CONEXTO Y MENSAJES DE ERROR
  const langs = useContext(appContext.appContext).lang;
  const str = langs.accountPage;
  const errors = langs.errors;

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
            title={
              <>
                {str.headerTitle} <i className="uil uil-store"></i>
              </>
            }
            text={str.headerText}
            img={require("../assets/cart.png")}
            href="/"
            icon="corner-up-left-alt"
            link={str.headerButton}
            span="BEST SERVICE"
          />
        </motion.div>

        <motion.div variants={slideAnim}>
          <Forms {...str} errorText={errors} />
        </motion.div>

      </motion.div>
    </>
  );
};
export default Logins;