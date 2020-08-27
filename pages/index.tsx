// ANIMACIÓN, HOOKS Y TIPOS DE DATOS
import { motion } from 'framer-motion'
import Head from 'next/head'

// CONTEXTO Y REACT
import { useContext } from 'react'
import { appContext } from 'Ctx'

// COMPONENTES
import Header from 'components/Header'
import Slider from 'components/Slider'
import Recent from 'components/Recents'
import Middle from 'components/Middle'
import Meta from 'components/Meta'

// HOCS Y ANIMACIONES
import { withAnimations } from 'components/HOCs'
import { leftAnimation, upAnimation, rightAnimation } from 'utils/Globals'

const Index: React.FC = () => {
	// TEXTO DE PAGINA DE INICIO
	const { indexPage, general } = useContext(appContext).lang

	return (
		<>
			<Head>
				<title>{general.app.title}</title>
				<Meta
					url=''
					title={general.app.title}
					desc={general.app.description}
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
					link={indexPage.header.button}
					img='/images/home/box.png'
					href='/tienda'
					icon='store'
					text={indexPage.header.text}
					title={indexPage.header.title}
				/>
			</motion.div>

			<motion.div variants={upAnimation}>
				<Slider {...indexPage.slider} />
			</motion.div>

			<motion.div variants={leftAnimation}>
				<Middle {...indexPage.middle} />
			</motion.div>

			<motion.div variants={rightAnimation}>
				<Recent {...indexPage.recent} />
			</motion.div>
		</>
	)
}

export default withAnimations(Index)
