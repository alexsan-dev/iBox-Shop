// REACT
import {
	useState,
	Dispatch,
	SetStateAction,
	MouseEvent,
	MutableRefObject,
	useRef,
	useContext,
	memo,
} from 'react'

// COMPONENTES
import Input from 'components/Input'
import ForgotAlert from './ForgotAlert'

// EVENTOS
import { signInEvent, emailSignInEvent } from 'utils/Events'

// AUTH
import { setProviders } from 'utils/Auth'
import { appContext } from 'Ctx'

// PROPIEDADES
interface FormProps {
	errorLangPackage: ILangErrors
	strings: ILangAccountPage
}

// INPUTS
interface FormInputs {
	email: string
	displayName: string
	pass: string
}

// ESTADOS INICIALES
interface AccountState {
	switchC: boolean
}
const defaultState: AccountState = { switchC: false }
const defaultForm: FormInputs = { email: '', displayName: '', pass: '' }

const Forms: React.FC<FormProps> = (props: FormProps) => {
	// CONTEXTO
	const { refreshApp } = useContext(appContext)

	// ESTADOS DEL COMPONENTE
	const [accountState, setAccount]: [
		AccountState,
		Dispatch<SetStateAction<AccountState>>
	] = useState(defaultState)

	// REFERENCIAS
	const inputRefs: MutableRefObject<FormInputs> = useRef(defaultForm)

	// CONFIGURAR PROVEEDORES DE LOGIN
	setProviders().catch((e: Error) => console.log('Error during set providers ', e))

	// OBTENER TEXTO DE LOS INPUTS
	const value = (data: InputGetProps) =>
		// @ts-ignore
		inputRefs.current ? (inputRefs.current[data.name] = data.text) : null

	// MOSTRAR ALERTA EN EL BOTÓN DE RECUPERAR CLAVE
	const forgotPass = () =>
		ForgotAlert(
			props.strings.forms.forgot.title,
			props.strings.forms.forgot.text,
			props.strings.forms.inputs.email.field,
			props.strings.forms.inputs.email.helper,
			props.strings.alerts.title,
			props.errorLangPackage
		)

	// INICIAR SESIÓN CON CORREO O CREAR CUENTA
	const login = (ev: any) =>
		emailSignInEvent(
			ev,
			refreshApp,
			accountState.switchC,
			inputRefs.current.email,
			inputRefs.current.displayName,
			inputRefs.current.pass,
			props.strings.alerts.title,
			props.strings.forms.alerts.loading,
			props.errorLangPackage,
			props.strings.alerts.text_2
		)

	// INICIAR SESIÓN CON GOOGLE
	const gLog = (ev: MouseEvent<HTMLButtonElement>) =>
		signInEvent(ev, refreshApp, props.strings.alerts.title, 'g', props.strings.forms.alerts.loading)

	// INICIAR SESIÓN CON FACEBOOK
	const fbLog = (ev: MouseEvent<HTMLButtonElement>) =>
		signInEvent(
			ev,
			refreshApp,
			props.strings.alerts.title,
			'fb',
			props.strings.forms.alerts.loading
		)

	// ACTUALIZAR ESTADO ( NUEVA CUENTA / CUENTA EXISTENTE )
	const regSwitch = () => setAccount({ switchC: !accountState.switchC })

	return (
		<>
			<div id='form' onSubmit={login}>
				<h2>
					{props.strings.title} <i className='material-icons'>sync</i>
				</h2>
				<p>{props.strings.text}</p>
				<p>
					{accountState.switchC ? props.strings.confirm_1 : 'no'} {props.strings.alreadyAccount}{' '}
					<button onClick={regSwitch}>
						{accountState.switchC
							? props.strings.buttons.login
							: props.strings.buttons.createAccount}
					</button>
				</p>

				<form id='credentials'>
					<Input
						type='email'
						label={props.strings.forms.inputs.email.field}
						name='email'
						value={value}
						helper={props.strings.forms.inputs.email.helper}
						icon='email'
					/>
					{accountState.switchC ? (
						<Input
							type='text'
							label={props.strings.forms.inputs.user.field}
							name='displayName'
							value={value}
							helper={props.strings.forms.inputs.user.helper}
							icon='person'
						/>
					) : (
						''
					)}
					<Input
						type='password'
						label={props.strings.forms.inputs.pass.field}
						name='pass'
						value={value}
						helper={props.strings.forms.inputs.pass.helper}
						icon='lock'
					/>

					{accountState.switchC ? (
						''
					) : (
						<p>
							{props.strings.forms.forgot.buttonText}{' '}
							<span className='waves waves-dark' onClick={forgotPass}>
								{props.strings.forms.forgot.title}
							</span>
						</p>
					)}

					<button onClick={login} className='blue waves'>
						<i className='material-icons'>person</i>
						{accountState.switchC
							? props.strings.buttons.createAccount
							: props.strings.buttons.login}
					</button>
				</form>

				<button onClick={fbLog} className='waves fbLog'>
					<img src='/images/general/f-icon.png' /> {props.strings.buttons.fbLoginText}
				</button>
				<button onClick={gLog} className='waves gLog'>
					<img src='/images/general/g-icon.png' /> {props.strings.buttons.gLoginText}
				</button>
			</div>

			<a
				href='./privacidad.pdf'
				target='_blank'
				title={props.strings.privacy_1}
				className='btn amber privacy waves waves-dark'>
				<i className='material-icons'>account_balance</i>
				{props.strings.privacy_1}
				<br />
				{props.strings.privacy_2}
			</a>

			<style jsx>{`
				.privacy {
					position: absolute;
					right: 0;
					margin-top: -100px;
					z-index: 2;
					font-size: 13px;
					color: var(--backgrounds);
				}
				#form > p,
				form > p {
					color: var(--paragraph);
				}
				#form > p > button {
					display: inline-block;
					color: var(--paragraph);
				}
				form > p {
					margin: 15px 0;
					text-align: center;
				}
				p > span {
					color: var(--paragraph);
				}
				h2 {
					color: var(--paragraph);
				}
				#form {
					width: calc(100% - 40px);
					background: var(--backgrounds);
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
					padding: 20px;
					border-radius: 10px;
					position: relative;
					top: -40px;
					left: 50%;
					transform: translate(-50%, 0%);
					margin-bottom: 60px;
				}
				#form > button,
				form > button {
					color: var(--backgrounds);
					width: 100%;
					justify-content: center;
					margin-top: 10px;
				}
				#credentials {
					margin-top: -10px;
				}
				button svg {
					margin: 30px;
				}
				.fbLog {
					background: #3b5998;
					margin: 0;
				}
				.fbLog > img {
					height: 20px;
					margin-right: 13px;
					filter: invert(100%);
				}
				.gLog {
					background: #d44638;
					margin: 0;
				}
				.gLog > img {
					margin-right: 13px;
				}

				@media screen and (min-width: 460px) {
					.privacy {
						right: 10px;
						z-index: 10;
					}
				}
			`}</style>
		</>
	)
}

export default memo(Forms)
