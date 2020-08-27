// COMPONENTES
import Input from './Input'

// MOSTRAR ALERTA EN EL BOTÓN DE RECUPERAR CLAVE
const ForgotAlert = (
	title: string,
	body: string,
	label: string,
	helper: string,
	errTitle: string,
	errPackage: ILangErrors
) => {
	let inputVal: string = ''
	const handleInput = (vals: InputGetProps) => (inputVal = vals.text)

	// MOSTRAR ALERTA PRIMERO
	window.Alert({
		title,
		body,
		confirmText: 'Recuperar',
		type: 'confirm',
		customElements: (
			<Input
				type='text'
				label={label}
				name='remail'
				helper={helper}
				icon='email'
				value={handleInput}
			/>
		),

		// ENVIAR A RESET PASS
		onConfirm: () => {
			import('utils/Auth').then(async ({ useResetPass }) => {
				// ERROR HANDLING
				const { useAuthError } = await import('utils/Error')

				useResetPass(inputVal).catch((err: firebase.FirebaseError) =>
					window.Alert({
						title: errTitle,
						body: useAuthError(err.code, errPackage),
						type: 'confirm',
					})
				)
			})
		},
	})
}

export default ForgotAlert
