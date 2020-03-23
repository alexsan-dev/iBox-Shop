// ANIMACIÓN, HOOKS Y TIPOS DE DATOS
import { motion, Variants } from "framer-motion";
import { NextPage } from "next";

// CONTEXTO
import { useContext } from "react";
import appContext from "../utils/appContext";

// COMPONENTES
import Header from "../components/Header";
import Slider from "../components/Slider";

import Recent from "../components/Recents";
import Middle from "../components/Middle";

// CONFIGURACIÓN DE ANIMACIÓN
let ease: number[] = [0.175, 0.85, 0.42, 0.96];
let duration: number = 0.5;
let transition: object = { duration, ease };

// OBJECTOS DE ANIMACIÓN
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
  // TEXTO DE PAGINA DE INICIO
  const strings = useContext(appContext.appContext).lang.indexPage;

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
            link={strings.header.button}
            img={require("../assets/box.png")}
            href="/tienda"
            icon="store"
            text={strings.header.text}
            title={strings.header.title}
          />
        </motion.div>

        <motion.div variants={slideAnim}>
          <Slider {...strings.slider} />
        </motion.div>

        <motion.div variants={recents}>
          <Middle {...strings.middle} />
        </motion.div>

        <motion.div variants={slideAnim}>
          <Recent {...strings.recent} />
        </motion.div>

      </motion.div>
    </>
  );
};

export default Index;