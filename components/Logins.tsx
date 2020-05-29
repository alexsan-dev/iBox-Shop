// CONTENEDORES DE ANIMACIÓN Y HOOKS
import { motion } from 'framer-motion'
import { useContext, FC } from 'react'

// COMPONENTES Y CONTEXTO
import { appContext } from 'Ctx'
import Header from './Header'
import Forms from './Forms'

// HOCS Y ANIMACIONES
import { pageAnimation } from 'utils/HOCs'
import { upAnimation, rightAnimation } from 'utils/Globals'

const Logins: FC = () => {
	// CONTEXTO Y MENSAJES DE ERROR
	const langs: ILangPackage = useContext(appContext).lang
	const str = langs.accountPage
	const errors = langs.errors

	return (
		<>
			<motion.div variants={upAnimation}>
				<Header
					title={
						<>
							{str.header.title} <i className='material-icons'>flash_on</i>
						</>
					}
					text={str.header.text}
					img='/images/account/account.png'
					href='/'
					back
					span='------ BEST SERVICE'
				/>
			</motion.div>

			<motion.div variants={rightAnimation}>
				<Forms strings={str} errorLangPackage={errors} />
			</motion.div>
		</>
	)
}
export default pageAnimation(Logins)
