// TIPOS DE DATOS
import { NextPage } from "next";
import { motion } from "framer-motion";

const ShopPage: NextPage = () => {
  return (
    <motion.div initial="exit" animate="enter" exit="exit">
      <p>Pagina de tienda</p>
    </motion.div>
  )
};


export default ShopPage;
