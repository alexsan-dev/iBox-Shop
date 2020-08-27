// REACT
import { PureComponent } from 'react'

// PROPIEDADES DE ALERTAS
interface AlertProps {
	type: 'confirm' | 'window' | 'alert' | 'error'
	onHide?: () => any
	onConfirm?: () => any
	title: string
	body: string
	confirmText?: string
	cancelText?: string
	confirmBtn?: JSX.Element
	cancelBtn?: JSX.Element
	customElements?: JSX.Element
	fixed?: boolean
}

// PROPIEDADES DEL HOC
interface HOCProps {
	confirmColor?: string
	errColor?: string
	confirmText?: string
	cancelText?: string
}

interface InternalState extends AlertProps {
	open: boolean
}

// ESTADO POR DEFECTO
const defState: InternalState = {
	type: 'alert',
	title: '',
	body: '',
	open: false,
	onHide: undefined,
	onConfirm: undefined,
	confirmText: undefined,
	cancelText: undefined,
	confirmBtn: undefined,
	cancelBtn: undefined,
	customElements: undefined,
	fixed: undefined,
}

// TEMPLATE
export class AlertTemplate extends PureComponent<HOCProps, InternalState> {
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
	public show(props: AlertProps | string) {
		if (typeof props === 'string')
			this.setState({
				...defState,
				type: 'alert',
				title: '',
				body: props,
				open: true,
			})
		else this.setState({ ...defState, ...props, open: true })
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
			<div
				onClick={this.state.type === 'window' ? this.hide : undefined}
				className={`alertContainer ${this.state.open ? 'openAlert' : 'closeAlert'}`}>
				<div className='alertContent'>
					{this.state.type !== 'alert' && <h1>{this.state.title}</h1>}
					<p style={{ fontSize: this.state.type === 'alert' ? '1.2em' : '1em' }}>
						{this.state.body}
					</p>
					{this.state.customElements}

					{this.state.type !== 'window' && (
						<ul className='alertActions'>
							{!this.state.fixed && this.state.type === 'confirm' && (
								<li>
									{!this.state.cancelBtn ? (
										<button onClick={this.hide} className='cancelBtn waves'>
											{this.state.cancelText || this.props.cancelText || 'Cancel'}
										</button>
									) : (
										<div onClick={this.hide}>{this.state.cancelBtn}</div>
									)}
								</li>
							)}
							<li>
								{!this.state.confirmBtn ? (
									<button
										className='waves'
										style={{
											background:
												this.state.type === 'error'
													? this.props.errColor || '#ff5252'
													: this.props.confirmColor || '#2196f3',
										}}
										onClick={this.confirm}>
										{' '}
										{this.state.confirmText || this.props.confirmText || 'Accept'}
									</button>
								) : (
									<div onClick={this.confirm}>{this.state.confirmBtn}</div>
								)}
							</li>
						</ul>
					)}
				</div>

				<style jsx>{`
					.alertContainer {
						width: 100%;
						height: 100vh;
						position: fixed;
						min-width: 100%;
						top: 0;
						left: 0;
						z-index: 100;
						transition: opacity 0.2s ease-in-out;
						background: rgba(0, 0, 0, 0.6);
					}
					.alertContent {
						position: absolute;
						top: 50%;
						left: 50%;
						padding: 30px;
						width: calc(100% - 40px);
						max-width: 455px;
						transform: translate(-50%, -50%);
						background: #fff;
						z-index: 2;
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
						border-radius: 10px;
					}
					.alertContent > h1 {
						color: #333;
						font-size: 2em;
						margin-bottom: 10px;
						font-weight: bold;
					}
					.alertContent > p {
						color: #333;
						line-height: 20px;
					}
					.alertActions {
						margin-top: 20px;
						display: flex;
						justify-content: flex-end;
						position: relative;
						z-index: 3;
					}
					.alertActions > li > button {
						text-transform: uppercase;
						color: #fff;
						border: none;
						overflow: hidden;
						height: 45px;
						padding: 0 20px;
						outline: none;
						box-shadow: none;
						border-radius: 5px;
						cursor: pointer;
						font-weight: boldx;
					}
					.alertActions > li > .cancelBtn {
						color: #333;
						background: transparent;
						box-shadow: none;
						font-weight: 400;
					}
					.closeAlert {
						opacity: 0;
						pointer-events: none;
					}
					.openAlert {
						opacity: 1;
						pointer-events: all;
					}
				`}</style>
			</div>
		)
	}
}

// AGREGAR DEFINICIÓN A TYPESCRIPT
declare global {
	interface Window {
		Alert: (props: AlertProps | string) => any
	}
}
