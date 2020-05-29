// TIPOS DE DATOS
import { useState, SetStateAction, Dispatch, useContext, useEffect, FC } from 'react'
import { firestore } from 'firebase'

// HOOKS Y ANIMACIÓN
import { defUserData, useUserSet } from 'Hooks'
import { showAlert } from 'Tools'
import { motion } from 'framer-motion'

// CONTEXTO
import { appContext } from 'Ctx'

// COMPONENTES
import ProfileHeader from './ProfileHeader'
import ProfileInformation from './ProfileInformation'
import ShopsHistory from './ShopsHistory'

// HOCS Y ANIMACIONES
import { pageAnimation } from 'utils/HOCs'
import { leftAnimation, upAnimation, rightAnimation } from 'utils/Globals'

// ESTADO INICIAL E INTERFACES
interface IState {
	userData: userModel | null | undefined | firestore.DocumentData
}
const defState: IState = { userData: defUserData }

const Profile: FC = () => {
	// ESTADO DEL COMPONENTE Y CONTEXTO
	const [state, setState]: [IState, Dispatch<SetStateAction<IState>>] = useState(defState)
	const str = useContext(appContext).lang.profilePage
	const user = useContext(appContext).user

	// OBTENER NUEVOS DATOS
	const getNewData = (values: IForms | null, btn: HTMLButtonElement) => {
		showAlert({
			title: str.info.confirmUpdate.alert.title,
			body: str.info.confirmUpdate.alert.text,
			type: 'window',
			fixed: true,
		})

		// @ts-ignore
		const userCopy: userModel | null = state.userData
		if (userCopy) {
			userCopy.address = values?.address || ''
			userCopy.phone = values?.phone || 0
			userCopy.nit = values?.nit || ''

			useUserSet(user?.uid, userCopy)
				.then(() => {
					// QUITAR ALERTA DE ESPERA
					const cAlert: NodeListOf<HTMLDivElement> = document.querySelectorAll(
						'.alertContainer'
					) as NodeListOf<HTMLDivElement>
					cAlert.forEach((el: HTMLDivElement) => {
						el.style.opacity = '0'
						setTimeout(() => (el.style.display = 'none'), 400)
					})

					btn.style.pointerEvents = 'unset'
					setState({ userData: userCopy })
				})
				.catch((e: Error) => console.log(e))
		}
	}

	// OBTENER USUARIO DE FIREBASE O LOCAL
	useEffect(() => {
		setState({ userData: user })
	}, [])

	return (
		<>
			<motion.div variants={upAnimation}>
				<ProfileHeader user={state.userData || defUserData} title={str.title} span={str.span} />
			</motion.div>

			<motion.div variants={leftAnimation}>
				<ProfileInformation
					updateCall={getNewData}
					user={state.userData || defUserData}
					strings={str.info}
				/>
			</motion.div>

			<motion.div variants={rightAnimation}>
				<ShopsHistory user={state.userData || defUserData} strings={str.history} />
			</motion.div>
		</>
	)
}

export default pageAnimation(Profile)
