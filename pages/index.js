import Header from '../components/Header';
import Slider from '../components/Slider';
import Card from '../components/ProductCard';
import Recents from '../components/Recents';
import Middle from '../components/Middle';
import Footer from '../components/Footer';
import Link from 'next/link';
import Box from '../assets/box.png';
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
const recents = {
	exit: { opacity: 0, x: -200, transition },
	enter: { opacity: 1, x: 0, transition }
}

const Index = props => {
	return (
		<>
			<motion.div initial="exit" animate="enter" exit="exit" variants={{ exit: { transition: { staggerChildren: 0.1 } }, enter: { transition: { staggerChildren: 0.1 } } }}>

				<motion.div variants={pageAnim}>
					<Header link="Ver tienda" img={Box} href="/tienda" icon="store" text="Entra hoy a la tienda, empieza a comprar y te lo llevamos a tu casa 😉, en iBox entendemos tus gustos, conoce nuestro catálogo." title="¡Tu tienda de electrónica y accesorios en línea!" />
				</motion.div>

				<motion.div variants={slideAnim}>
					<Slider />
				</motion.div>

				<motion.div variants={recents}>
					<Middle />
				</motion.div>

				<motion.div variants={slideAnim}>
					<Recents />
				</motion.div>

				<motion.div variants={fAnim}>
					<Footer store />
				</motion.div>

			</motion.div>
		</>
	)
}

export default Index;
