// REACT
import { useContext, FC } from 'react'

// CONTENEDORES DE ANIMACIÓN Y HOOKS
import { motion } from 'framer-motion'
import Head from 'next/head'

// CONTEXTO
import { appContext } from 'Ctx'

//  COMPONENTES
import Header from './Header'
import Forms from './Forms'
import Meta from './Meta'

// HOCS Y ANIMACIONES
import { withAnimations } from 'components/HOCs'
import { upAnimation, rightAnimation } from 'utils/Globals'

const Logins: FC = () => {
	// CONTEXTO Y MENSAJES DE ERROR
	const { accountPage, errors } = useContext(appContext).lang

	return (
		<>
			<Head>
				<title>{accountPage.header.docTitle}</title>
				<Meta
					url='cuenta'
					title={accountPage.header.docTitle}
					desc={accountPage.header.description}
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
					title={
						<>
							{accountPage.header.title} <i className='material-icons'>flash_on</i>
						</>
					}
					text={accountPage.header.text}
					img='/images/account/account.png'
					href='/'
					back
					span='------ BEST SERVICE'
				/>
			</motion.div>

			<motion.div variants={rightAnimation}>
				<Forms strings={accountPage} errorLangPackage={errors} />
			</motion.div>
		</>
	)
}
export default withAnimations(Logins)
