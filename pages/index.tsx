// ANIMACION, HOOKS Y TIPOS DE DATOS
import { motion, Variants } from "framer-motion";
import { useRipples } from "../utils/hooks";
import { NextPage } from "next";

// CONTEXTO
import { useContext } from "react";
import appContext from "../utils/appContext";

// COMPONENTES
import Header from "../components/Header";
import Slider from "../components/Slider";

import Recents from "../components/Recents";
import Middle from "../components/Middle";

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
const recents: Variants = {
  exit: { opacity: 0, x: -200, transition },
  enter: { opacity: 1, x: 0, transition }
};

const Index: NextPage = () => {
  console.log('%c🏠 RENDER HOME PAGE', 'background:#2196f3; color: #ffff; padding:5px; font-weight:bold; border-radius:5px');
  // TEXTO DE PAGINA DE INICIO
  const str = useContext(appContext.appContext).lang.indexPage;

  // EFECTO DE RIPPLE
  useRipples();

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
            link={str.headerButton}
            img={require("../assets/box.png")}
            href="/tienda"
            icon="store"
            text={str.headerText}
            title={str.headerTitle}
          />
        </motion.div>

        <motion.div variants={slideAnim}>
          <Slider {...str.slider} />
        </motion.div>

        <motion.div variants={recents}>
          <Middle {...str.middle} />
        </motion.div>

        <motion.div variants={slideAnim}>
          <Recents {...str.recents} />
        </motion.div>

      </motion.div>
    </>
  );
};

export default Index;