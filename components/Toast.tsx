// REACT
import { PureComponent } from 'react'

// PROPIEDADES DE ALERTAS
interface ToastProps {
	onHide?: () => any
	onConfirm?: () => any
	body: string
	confirmText?: string
	confirmBtn?: JSX.Element
	customBody?: JSX.Element
	fixed?: boolean
	time?: number
}

// PROPIEDADES DEL HOC
interface HOCProps {
	confirmText?: string
}

interface InternalState extends ToastProps {
	open: boolean
}

// ESTADO POR DEFECTO
const defState: InternalState = {
	body: '',
	open: false,
}

// TEMPLATE
export class ToastTemplate extends PureComponent<HOCProps, InternalState> {
	constructor(props: HOCProps) {
		super(props)

		// ESTADO
		this.state = defState

		// MÉTODOS
		this.show = this.show.bind(this)
		this.hide = this.hide.bind(this)
		this.confirm = this.confirm.bind(this)
	}

	// ACTUALIZAR ESTADO
	public show(props: ToastProps | string) {
		// ABRIR TOAST
		if (typeof props === 'string')
			this.setState({
				body: props,
				open: true,
			})
		else this.setState({ ...props, open: true })

		// CERRAR TOAST
		setTimeout(() => {
			this.setState({ open: false })
		}, this.state.time || 5000)
	}

	// OCULTAR
	private hide() {
		if (!this.state.fixed) {
			if (this.state.onHide) this.state.onHide()
			this.setState({ open: false })
		}
	}

	// ACEPTAR
	private confirm() {
		if (this.state.onConfirm) this.state.onConfirm()
		this.hide()
	}

	render() {
		return (
			<div className={`toast ${this.state.open ? 'openToast' : 'closeToast'}`}>
				{this.state.customBody || <span>{this.state.body} </span>}
				<div>
					{this.state.confirmBtn ||
						(this.props.confirmText && <button>{this.props.confirmText}</button>)}
				</div>
				<style jsx>{`
					.toast {
						position: fixed;
						bottom: 0;
						left: 0;
						width: 100%;
						transform: translateY(100%);
						transition: transform 0.3s ease-in-out;
						background: var(--text);
						padding: 20px;
						z-index: 99;
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
					.toast > button {
						position: relative;
						appearance: none;
						border: none;
						outline: none;
						background: rgba(0, 0, 0, 0.4);
						color: #fff;
						padding: 15px 25px;
						text-transform: uppercase;
						font-weight: bold;
						border-radius: 5px;
						cursor: pointer;
					}
					.toast > span {
						font-size: 1em;
						font-weight: 500;
						color: var(--backgrounds);
					}
					.actionToast {
						padding: 10px 20px;
					}
					.openToast {
						transform: translateY(0);
					}
					.closeToast {
						transform: translateY(100%);
					}
				`}</style>
			</div>
		)
	}
}

// AGREGAR DEFINICIÓN A TYPESCRIPT
declare global {
	interface Window {
		Toast: (props: ToastProps | string) => any
	}
}
