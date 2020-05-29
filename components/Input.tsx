// HOOKS PARA REFERENCIA
import { useRef, FC, RefObject, MouseEvent, useEffect } from 'react'

// VARIABLES GLOBALES
let visible: boolean = true

const Input: FC<InputProps> = (props: InputProps) => {
	// REFERENCIA AL INPUT ACTUAL
	const inp: RefObject<HTMLInputElement> = useRef(null)

	// AGREGAR COLOR A LABEL, HR, I CERCANOS AL INPUT
	const fx = () => {
		const label: HTMLElement = inp.current?.nextSibling as HTMLElement
		const hr: HTMLElement = label?.nextSibling as HTMLElement
		const i: HTMLElement = hr?.nextSibling as HTMLElement

		if (label && inp.current?.value.length === 0 && hr && i) {
			label.classList.toggle('aLabel')
			label.classList.toggle('dLabel')
			hr.classList.toggle('hrActive')
			hr.classList.toggle('hrDisabled')
			i.classList.toggle('iActive')
			i.classList.toggle('iDisabled')
		}
	}

	// BOTÓN DE MOSTRAR Y OCULTAR PARA INPUT DE CLAVE
	const visibles = (e: MouseEvent<HTMLSpanElement>) => {
		const el: HTMLSpanElement = e?.target as HTMLSpanElement
		if (visible && el) {
			el.textContent = 'visibility_off'
			inp.current?.setAttribute('type', 'text')
			visible = !visible
		} else if (el) {
			el.textContent = 'visibility'
			inp.current?.setAttribute('type', 'password')
			visible = !visible
		}
	}

	// ENVIAR LOS DATOS DEL INPUT A LA VALUE()
	const getText = () =>
		props.value({
			name: props.name,
			text: inp.current?.value.trim(),
		})

	// ASIGNAR VALOR POR DEFECTO
	useEffect(() => {
		if (inp.current && props.defValue) {
			fx()
			inp.current.value = props.defValue.toString()
			getText()
		}
	})

	return (
		<>
			<div className='in'>
				<input
					ref={inp}
					type={props.type}
					id={props.name}
					name={props.name}
					onFocus={fx}
					onBlur={fx}
					onChange={getText}
					autoComplete=''
					maxLength={props.maxLength}
				/>
				<label htmlFor={props.name} className='dLabel'>
					{props.label}
				</label>
				<hr className='hrDisabled' />
				<i className='iDisabled material-icons'>{props.icon}</i>
				{props.type === 'password' ? (
					<span onClick={visibles} className='material-icons'>
						visibility
					</span>
				) : (
					''
				)}
			</div>
			<span>{props.helper}</span>

			<style jsx>{`
				.in {
					position: relative;
					width: auto;
					height: auto;
					margin-top: 20px;
					display: flex;
					flex-direction: row-reverse;
					align-items: center;
				}

				.in i {
					transition: color 0.2s ease-in-out;
					position: absolute;
					left: 0;
					margin-top: -1px;
				}

				.in + span {
					margin-bottom: 30px;
					font-size: 13px;
					color: var(--paragraph);
				}

				.in > label {
					position: absolute;
					transition: all 0.2s ease-in-out;
					font-weight: 500;
				}

				.in > span {
					position: absolute;
					right: 20px;
					color: var(--paragraph);
				}

				.dLabel {
					color: var(--paragraph);
					transform: translate(0, 0);
					font-size: 15px;
					left: 35px;
				}

				.in > input {
					font-size: 15px;
					color: var(--paragraph);
					border-bottom: 1.5px solid var(--disable);
					padding: 15px 0 15px 35px;
					width: 100%;
					font-weight: 500;
					position: relative;
				}

				.in > input:-webkit-autofill + label {
					transform: translate(0, -200%);
					font-size: 13px;
					left: 0;
					color: var(--blue);
				}

				.in > input:-webkit-autofill ~ hr {
					transform: scaleX(1);
				}

				.in > input:-webkit-autofill ~ i {
					color: var(--blue);
				}

				.iActive {
					color: var(--blue);
				}

				.iDisabled {
					color: var(--paragraph);
				}

				.in > hr {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 1.5px;
					background: var(--blue);
					transition: transform 0.4s ease-in-out;
					margin: 0;
					z-index: 2;
				}

				.hrDisabled {
					transform: scaleX(0);
				}

				.hrActive {
					transform: scaleX(1);
				}

				.aLabel {
					transform: translate(0, -200%);
					font-size: 13px;
					left: 0;
					color: var(--blue);
				}
			`}</style>
		</>
	)
}

export default Input
