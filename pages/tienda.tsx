// ANIMACIÓN, HOOKS Y TIPOS DE DATOS
import { motion } from 'framer-motion'
import { NextPageContext } from 'next'

// HEAD
import Head from 'next/head'

// CONTEXTO
import { useContext } from 'react'
import { appContext } from 'Ctx'

// COMPONENTES
import Header from 'components/Header'
import ShopList from 'components/ShopList'
import Meta from 'components/Meta'

// HOCS Y ANIMACIONES
import { withAnimations } from 'components/HOCs'
import { rightAnimation, upAnimation } from 'utils/Globals'

const ShopPage: React.FC = () => {
	// TEXTO DE PAGINA DE INICIO
	const strings = useContext(appContext).lang.shopPage

	return (
		<>
			<Head>
				<title>{strings.header.docTitle}</title>
				<Meta
					url='tienda'
					title={strings.header.docTitle}
					desc={strings.header.description}
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

const initialProps = async ({ res }: NextPageContext) => {
	// CONFIGURAR SPR VERCEL
	if (res) res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

	return {}
}

export default withAnimations(ShopPage, initialProps)
