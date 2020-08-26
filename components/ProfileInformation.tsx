// HOOKS Y TIPOS
import { RefObject, useRef, useEffect, MutableRefObject, MouseEvent } from 'react'

// COMPONENTES
import Input from './Input'

//  PROPIEDADES
interface InfoProps {
	updateCall: (form: IForms | null, btn: HTMLButtonElement) => any
	user: UserData | null
	strings: ILangProfilePage['info']
}

// COMPONENTE
const ProfileInformation: React.FC<InfoProps> = (props: InfoProps) => {
	// REFERENCIAS
	const defForm: IForms = {
		displayName: props.user?.displayName || '',
		email: props.user?.email || '',
		address: props.user?.address || '',
		phone: props.user?.phone || 0,
		nit: props.user?.nit || '',
	}
	const values: RefObject<IForms> = useRef(defForm)
	const updateBtn: RefObject<HTMLButtonElement> = useRef(null)
	const updateAvailable: MutableRefObject<boolean> = useRef(false)

	// GUARDAR DATOS DE LOS INPUTS
	const saveToForm = (data: InputGetProps) => {
		// ASIGNAR VALORES AL FORM
		if (values.current)
			Object.keys(values.current).forEach((keys: string) => {
				// @ts-ignore
				if (values.current && keys === data.name) values.current[keys] = data.text
				if (values.current && data.name === 'nit' && data.text.length === 0)
					values.current.nit = 'C/F'
			})
	}

	// INHABILITAR BOTÓN Y ENVIAR DATOS
	const sendToUpdate = (el: MouseEvent<HTMLButtonElement>) => {
		if (updateAvailable.current) {
			const btn: HTMLButtonElement = el.target as HTMLButtonElement
			btn.style.pointerEvents = 'none'
			props.updateCall(values.current, btn)
		}
	}

	// VERIFICAR DATOS NUEVOS
	const verifyUpdate = (defValue: IForms | UserData | null, newValue: IForms) => {
		return (
			defValue?.address === newValue.address &&
			defValue?.phone === newValue.phone &&
			defValue?.nit === newValue.nit
		)
	}

	useEffect(() => {
		// ACTUALIZAR BOTÓN DE ACTUALIZAR
		const updateInterval = setInterval(() => {
			if (
				updateBtn.current &&
				values.current &&
				navigator.onLine &&
				values.current.phone.toString().length === 8 &&
				!verifyUpdate(props.user, values.current)
			) {
				updateBtn.current.style.setProperty('--btnBack', 'var(--blue)')
				updateAvailable.current = true
			} else if (updateBtn.current) {
				updateBtn.current.style.setProperty('--btnBack', 'var(--gray)')
				updateAvailable.current = false
			}
		}, 100)

		// LIMPIAR INTERVALO
		return () => clearInterval(updateInterval)
	})

	return (
		<div id='profileInfo'>
			<h2>
				{props.strings.title} <i className='material-icons'>assignment</i>
			</h2>
			<p>{props.strings.text}</p>
			<form id='infoForm'>
				<Input
					type='text'
					label={props.strings.inputs.address.field}
					name='address'
					value={saveToForm}
					helper={props.strings.inputs.address.helper}
					icon='directions'
					defValue={props.user?.address}
				/>
				<Input
					type='number'
					label={props.strings.inputs.phone.field}
					name='phone'
					value={saveToForm}
					helper={props.strings.inputs.phone.helper}
					icon='phone'
					defValue={props.user?.phone}
					maxLength={8}
				/>
				<Input
					type='text'
					label={props.strings.inputs.nit.field}
					name='nit'
					value={saveToForm}
					helper={props.strings.inputs.nit.helper}
					icon='fiber_pin'
					defValue={props.user?.nit}
				/>
			</form>
			<div id='updateSection'>
				<button onClick={sendToUpdate} ref={updateBtn} className='waves gray updateInfo'>
					{props.strings.button}
				</button>
			</div>
			<style jsx>{`
				p {
					margin-bottom: 30px;
				}
				#profileInfo {
					padding: 20px;
					margin-top: -30px;
				}
				button {
					color: var(--backgrounds);
					margin-top: 10px;
					--btnBack: var(--gray);
				}
				button::before {
					background: var(--btnBack) !important;
					transition: all 0.3s ease-in-out;
				}
				#updateSection {
					width: 100%;
					display: flex;
					justify-content: flex-end;
				}
			`}</style>
		</div>
	)
}

export default ProfileInformation
