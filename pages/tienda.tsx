// ANIMACIÓN, HOOKS Y TIPOS DE DATOS
import { motion } from 'framer-motion'

// CONTEXTO
import { useContext } from 'react'
import { appContext } from 'Ctx'

// COMPONENTES
import Header from '../components/Header'
import ShopList from '../components/ShopList'

// HOCS Y ANIMACIONES
import { pageAnimation } from 'utils/HOCs'
import { rightAnimation, upAnimation } from 'utils/Globals'

const ShopPage: React.FC = () => {
	// TEXTO DE PAGINA DE INICIO
	const strings = useContext(appContext).lang.shopPage

	return (
		<>
			<motion.div variants={upAnimation}>
				<Header
					back
					img='/images/shop/shop.png'
					href='/'
					text={strings.header.text}
					title={strings.header.title}
					span='MORE SECURITY'
				/>
			</motion.div>

			<motion.div variants={rightAnimation}>
				<ShopList {...strings.shopList} />
			</motion.div>
		</>
	)
}

export default pageAnimation(ShopPage)
