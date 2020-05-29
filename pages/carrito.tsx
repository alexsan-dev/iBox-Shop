// ANIMACIÓN, HOOKS Y TIPOS DE DATOS
import { motion } from 'framer-motion'

// CONTEXTO
import { useContext } from 'react'
import { appContext } from 'Ctx'

// COMPONENTES
import Header from 'components/Header'
import CartSummary from 'components/CartSummary'

// HOCS Y ANIMACIONES
import { pageAnimation } from 'utils/HOCs'
import { upAnimation, rightAnimation } from 'utils/Globals'

// COMPONENTE
const CartPage: React.FC = () => {
	// TEXTO DE PAGINA DE INICIO Y USUARIO
	const strings = useContext(appContext).lang.cartPage
	const { user } = useContext(appContext)

	return (
		<>
			<motion.div variants={upAnimation}>
				<Header
					back
					href='/'
					img='/images/shop/cart.png'
					span={'BEST DELIVERY'}
					text={strings.header.text}
					title={
						<>
							{strings.header.title +
								' ' +
								(user ? strings.header.titleExt + ' ' + user.displayName?.split(' ')[0] : '') +
								' '}
							<i className='material-icons'>local_shipping</i>
						</>
					}
				/>
			</motion.div>

			<motion.div variants={rightAnimation}>
				<CartSummary {...strings.summary} />
			</motion.div>
		</>
	)
}

export default pageAnimation(CartPage)
