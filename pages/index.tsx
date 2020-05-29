// ANIMACIÓN, HOOKS Y TIPOS DE DATOS
import { motion } from 'framer-motion'

// CONTEXTO
import { useContext } from 'react'
import { appContext } from 'Ctx'

// COMPONENTES
import Header from 'components/Header'
import Slider from 'components/Slider'

import Recent from 'components/Recents'
import Middle from 'components/Middle'

// HOCS Y ANIMACIONES
import { pageAnimation } from 'utils/HOCs'
import { leftAnimation, upAnimation, rightAnimation } from 'utils/Globals'

const Index: React.FC = () => {
	// TEXTO DE PAGINA DE INICIO
	const strings = useContext(appContext).lang.indexPage

	return (
		<>
			<motion.div variants={upAnimation}>
				<Header
					link={strings.header.button}
					img='/images/home/box.png'
					href='/tienda'
					icon='store'
					text={strings.header.text}
					title={strings.header.title}
				/>
			</motion.div>

			<motion.div variants={upAnimation}>
				<Slider {...strings.slider} />
			</motion.div>

			<motion.div variants={leftAnimation}>
				<Middle {...strings.middle} />
			</motion.div>

			<motion.div variants={rightAnimation}>
				<Recent {...strings.recent} />
			</motion.div>
		</>
	)
}

export default pageAnimation(Index)
