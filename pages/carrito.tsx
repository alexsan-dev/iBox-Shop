// ANIMACIÓN, HOOKS Y TIPOS DE DATOS
import { motion } from 'framer-motion'
import { NextPageContext } from 'next'
import Head from 'next/head'

// CONTEXTO
import { useContext } from 'react'
import { appContext } from 'Ctx'

// COMPONENTES
import Meta from 'components/Meta'
import Header from 'components/Header'
import CartSummary from 'components/CartSummary'

// HOCS Y ANIMACIONES
import { pageAnimation } from 'utils/HOCs'
import { upAnimation, rightAnimation } from 'utils/Globals'

// COMPONENTE
const CartPage: React.FC = () => {
	// TEXTO DE PAGINA DE INICIO Y USUARIO
	const { user, lang } = useContext(appContext)

	return (
		<>
			<Head>
				<title>{lang.cartPage.header.docTitle}</title>
				<Meta
					url='carrito'
					title={lang.cartPage.header.docTitle}
					desc={lang.cartPage.header.description}
					banner='https://www.ibox.gt/images/general/banner.jpg'
					keys={[
						'accesorios',
						'compras en linea',
						'tiendas en linea',
						'venta de celulares',
						'ibox',
					]}
				/>
			</Head>
			<motion.div variants={upAnimation}>
				<Header
					back
					href='/'
					img='/images/shop/cart.png'
					span={'BEST DELIVERY'}
					text={lang.cartPage.header.text}
					title={
						<>
							{lang.cartPage.header.title +
								' ' +
								(user
									? lang.cartPage.header.titleExt + ' ' + user.displayName?.split(' ')[0]
									: '') +
								' '}
							<i className='material-icons'>local_shipping</i>
						</>
					}
				/>
			</motion.div>

			<motion.div variants={rightAnimation}>
				<CartSummary {...lang.cartPage.summary} />
			</motion.div>
		</>
	)
}

const initialProps = async ({ res }: NextPageContext) => {
	// CONFIGURAR SPR VERCEL
	if (res) res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

	return {}
}

export default pageAnimation(CartPage, initialProps)
