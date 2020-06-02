// TIPOS Y HOOKS
import { useContext, useRef, MutableRefObject } from 'react'

// CONTEXTO
import { appContext } from 'Ctx'

// COMPONENTES
import Input from '../components/Input'

// HOOKS
import { defUserData } from 'Hooks'

// PROPIEDADES
interface FormProps {
	updateValues: (form: IForms) => any
	strings: ILangCartPage['summary']['forms']['inputs']
}

const CartForm: React.FC<FormProps> = (props: FormProps) => {
	// CONTEXTO
	const { user } = useContext(appContext)

	// REFERENCIAS
	const defForm: IForms = {
		displayName: user?.displayName || '',
		email: user?.email || '',
		address: '',
		phone: 0,
		nit: 'C/F',
	}
	const form: MutableRefObject<IForms> = useRef(defForm)
	const refUser: MutableRefObject<IUser> = useRef(defUserData)

	// GUARDAR DATOS DE LOS INPUTS
	const saveToForm = (data: InputGetProps) => {
		// ASIGNAR VALORES AL FORM
		if (form.current)
			Object.keys(form.current).forEach((keys: string) => {
				// @ts-ignore
				if (form.current && keys === data.name) form.current[keys] = data.text
				if (form.current && data.name === 'nit' && data.text.length === 0) form.current.nit = 'C/F'
			})
		props.updateValues(form.current)
	}

	// OBTENER INFORMACIÓN DEL USUARIO
	if (user) {
		if (JSON.stringify(user) !== JSON.stringify(refUser.current)) {
			// GUARDAR NUEVO NOMBRE Y CORREO
			saveToForm({ name: 'displayName', text: user.displayName || '' })
			saveToForm({ name: 'email', text: user.email || '' })
		}
	}

	return (
		<form id='deliveryForm'>
			{!user && (
				<>
					<Input
						type='text'
						label={props.strings.name.field}
						name='displayName'
						value={saveToForm}
						helper={props.strings.name.helper}
						icon='person'
					/>
					<Input
						type='email'
						label={props.strings.email.field}
						name='email'
						value={saveToForm}
						helper={props.strings.email.helper}
						icon='email'
					/>
				</>
			)}
			<Input
				type='text'
				label={props.strings.address.field}
				name='address'
				value={saveToForm}
				helper={props.strings.address.helper}
				icon='directions'
				defValue={user?.address}
			/>
			<Input
				type='number'
				label={props.strings.phone.field}
				name='phone'
				value={saveToForm}
				helper={props.strings.phone.helper}
				icon='phone'
				defValue={user?.phone}
				maxLength={8}
			/>
			<Input
				type='text'
				label={props.strings.nit.field}
				name='nit'
				value={saveToForm}
				helper={props.strings.nit.helper}
				icon='fiber_pin'
				defValue={user?.nit}
			/>
			<style jsx>{`
				#deliveryForm {
					margin-bottom: 20px;
					height: 0;
				}
			`}</style>
		</form>
	)
}

export default CartForm
