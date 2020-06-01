// HOOKS
import {
	useContext,
	MutableRefObject,
	RefObject,
	useRef,
	Dispatch,
	SetStateAction,
	useState,
	MouseEvent,
	useEffect,
} from 'react'
import { useCartSearch, verifyForm, showAlert, buyFromCart } from 'Tools'
import { useRouter, NextRouter } from 'next/router'

// REACT SERVER
import { renderToString } from 'react-dom/server'

// CONTEXTO
import { appContext } from 'Ctx'

// COMPONENTES
import CartList from './CartList'
import CartForm from './CartForm'
import CartBill from './CartBill'
import Banner from './Banner'
import Input from './Input'

// HOOKS
import { useUserSet } from 'Hooks'

// CONTADOR GLOBAL
const nSliders: number = 3

// GLOBALES
const defForm: IForms = {
	displayName: '',
	email: '',
	address: '',
	phone: 0,
	nit: 'C/F',
}

// ESTADOS
interface SumState {
	formValues: IForms
}

// COMPONENTE
const CartSummary: React.FC<ILangCartPage['summary']> = (strings: ILangCartPage['summary']) => {
	// CARRITO Y USUARIO DEL CONTEXTO
	const { cartList, productList, user, addToCartEvent } = useContext(appContext)

	// ROUTER
	const router: NextRouter = useRouter()

	// REFERENCIAS
	const filterList: OrderCart = useCartSearch(cartList, productList)
	const formValues: MutableRefObject<IForms> = useRef(defForm)
	const sliderCount: MutableRefObject<number> = useRef(0)
	const promoCode: MutableRefObject<string> = useRef('')
	const slider: RefObject<HTMLDivElement> = useRef(null)

	// BANNERS
	const banner: JSX.Element = (
		<Banner
			{...strings.banner}
			title={`${strings.banner.title} ${
				(user?.displayName || formValues.current?.displayName)?.split(' ')[0]
			}`}
		/>
	)

	// ESTADO DEL COMPONENTE
	const [state, setState]: [SumState, Dispatch<SetStateAction<SumState>>] = useState({
		formValues: defForm,
	})

	// GUARDAR PROGRESO
	const saveProcess = () =>
		window.localStorage.setItem('cartProcess', sliderCount.current.toString())

	// GUARDAR CÓDIGO DE PROMOCIÓN
	const savePromoCode = (data: InputGetProps) => (promoCode.current = data.text)

	// CAMBIAR SLIDER
	const moveSlider = (toRight: boolean, condition: boolean, e?: MouseEvent<HTMLButtonElement>) => {
		// SELECCIONAR BOTÓN
		const btn: HTMLButtonElement = e?.target as HTMLButtonElement

		// DESHABILITAR BOTÓN
		if (btn) {
			// NO ACEPTAR EVENTOS
			btn.style.pointerEvents = 'none'

			// HABILITAR LUEGO DE 600MS
			setTimeout(() => (btn.style.pointerEvents = 'unset'), 600)
		}

		if (condition) {
			// AUMENTAR O REDUCIR CONTADOR
			sliderCount.current = toRight ? sliderCount.current + 1 : sliderCount.current - 1

			setTimeout(() => {
				if (slider.current) {
					// SELECCIONAR FORMULARIO Y ANIMAR
					const deliveryForm: HTMLDivElement = slider.current.childNodes[1]
						.childNodes[2] as HTMLDivElement
					const transform = `translateX(calc(calc(${(100 / nSliders) * sliderCount.current}% + ${
						30 * sliderCount.current
					}px) * -1))`
					const finForm: HTMLParagraphElement = slider.current.childNodes[2].childNodes[0]
						.childNodes[2] as HTMLParagraphElement

					// ANIMAR SLIDER
					slider.current.style.transform = transform

					// CAMBIAR ALTO DE DELIVERY
					if (sliderCount.current === 1) deliveryForm.style.height = 'auto'
					if (sliderCount.current === 2) {
						// QUITAR ALTO DE DELIVERY
						setTimeout(() => (deliveryForm.style.height = '0'), 300)
						if (finForm) finForm.style.height = 'auto'
					}

					// QUITAR ALTO DE DELIVERY Y FORM
					else if (sliderCount.current === 0)
						setTimeout(() => {
							deliveryForm.style.height = '0'
							if (finForm) finForm.style.height = '0'
						}, 300)
				}
			}, 300)

			// GUARDAR AVANCE
			saveProcess()
		}
	}

	// SIGUIENTE SLIDER
	const nextSlider = (e?: MouseEvent<HTMLButtonElement>) =>
		moveSlider(true, sliderCount.current < nSliders - 1, e)

	// ANTERIOR SLIDER
	const prevSlider = (e?: MouseEvent<HTMLButtonElement>) =>
		moveSlider(false, sliderCount.current >= 0, e)

	const nextToCurrent = () => {
		// SELECCIONAR AVANCE
		const getProcess = window.localStorage.getItem('cartProcess')

		// GUARDAR AVANCE NUEVO
		if (!getProcess) saveProcess()
		// AVANZAR HASTA ACTUAL
		else {
			sliderCount.current = 0
			// tslint:disable-next-line: radix
			if (parseInt(getProcess) > 0) moveSlider(true, true)
		}
	}

	// ACTUALIZAR FACTURA
	const updateBill = (e?: MouseEvent<HTMLButtonElement>) => {
		// OBTENER CÓDIGO DE ERROR
		const vForms = verifyForm(formValues.current)
		const errText =
			vForms.errCode === 1
				? strings.forms.errors.text
				: vForms.errCode === 2
				? strings.forms.errors.text_1
				: strings.forms.errors.text_2

		if (!vForms.out) {
			// MOSTRAR ALERTA SI OCURRIÓ UN ERROR
			showAlert({
				type: 'error',
				title: strings.forms.errors.title,
				body: errText,
			})
		}

		// ACTUALIZAR ESTADOS SI NO HAY ERRORES
		else {
			if (e) nextSlider(e)
			setState({ formValues: formValues.current })
		}
	}

	// REINICIAR CARRITO
	const resetCart = () => {
		// REINICIAR GLOBALES
		window.localStorage.setItem('cartProcess', '')

		// ACTUALIZAR CARRITO
		addToCartEvent('', true, true)
	}

	// MOSTRAR ALERTA DE ERROR
	const showErr = (btn: HTMLButtonElement) => {
		// QUITAR ALERTA DE ESPERA
		const cAlert: NodeListOf<HTMLDivElement> = document.querySelectorAll(
			'.alertContainer'
		) as NodeListOf<HTMLDivElement>
		cAlert.forEach((el: HTMLDivElement) => {
			el.style.opacity = '0'
			setTimeout(() => (el.style.display = 'none'), 400)
		})

		// MOSTRAR ALERTA DE ERROR
		showAlert({
			title: strings.alerts.title,
			body: strings.alerts.text,
			type: 'error',
			onHide: () => (btn.style.pointerEvents = 'unset'),
		})
	}

	// MOSTRAR ALERTA DE PROMOCIÓN
	const showPromoInput = () => {
		// SELECCIONAR LISTA DEL CARRITO E INPUT
		let currentList: HTMLDivElement
		let promoInput: HTMLDivElement

		// MOSTRAR ALERTA PARA INGRESAR CÓDIGO
		showAlert({
			title: strings.forms.promo.title,
			body: strings.forms.promo.text,
			type: 'confirm',
			onHide: () => {
				// QUITAR INPUT DE LA ALERTA
				promoInput.style.display = 'none'
				currentList.appendChild(promoInput)
			},
		})

		// AGREGAR INPUT A LA ALERTA
		setTimeout(() => {
			// SELECCIONAR LISTA DEL CARRITO E INPUT
			const currentAlert = document.querySelector('.alertBody') as HTMLDivElement
			currentList = document.getElementById('list') as HTMLDivElement
			promoInput = document.getElementById('promoForm') as HTMLDivElement

			promoInput.style.display = 'block'
			if (currentAlert) currentAlert.appendChild(promoInput)
		}, 10)
	}

	// ENVIAR LOS DATOS DE COMPRA
	const sendToBuy = (e: MouseEvent<HTMLButtonElement>) => {
		// DESHABILITAR BOTÓN DE COMPRAR
		const btn: HTMLButtonElement = e.target as HTMLButtonElement
		if (btn) btn.style.pointerEvents = 'none'

		// MOSTRAR ALERTA DE ESPERA
		showAlert({
			type: 'window',
			title: strings.buy.alert.title,
			body: strings.buy.alert.text,
			fixed: true,
		})

		// ENVIAR DATOS A BACKEND
		if (formValues.current)
			buyFromCart({ sendData: formValues.current, cartList })
				.then(() => {
					// QUITAR ALERTA DE ESPERA
					const cAlert: NodeListOf<HTMLDivElement> = document.querySelectorAll(
						'.alertContainer'
					) as NodeListOf<HTMLDivElement>
					cAlert.forEach((el: HTMLDivElement) => {
						el.style.opacity = '0'
						setTimeout(() => (el.style.display = 'none'), 400)
					})

					// HABILITAR BOTÓN
					btn.style.pointerEvents = 'unset'

					// FUNCTION DE SALIR
					const exitCart = () => {
						// REGRESAR
						router.back()

						// REINICIAR CARRITO
						setTimeout(() => resetCart(), 1500)

						// MOSTRAR ALERTA
						setTimeout(
							() =>
								showAlert({
									title: '',
									body: '',
									fixed: true,
									customElements: renderToString(banner),
									type: 'alert',
								}),
							2000
						)
					}

					// AGREGAR DATOS AL USUARIO
					const userCopy: userModel | null = user

					// VERIFICAR SI EXISTE USUARIO
					if (userCopy) {
						// AGREGAR HISTORIAL DE COMPRAS
						const history = { cartList, date: new Date().toUTCString() }

						// ACTUALIZAR HISTORIAL
						if (userCopy.history) userCopy.history.push(history)
						else userCopy.history = [history]

						// AGREGAR DATOS NUEVOS
						if (
							userCopy.address !== formValues.current?.address ||
							userCopy.phone !== formValues.current?.phone ||
							userCopy.nit !== formValues.current?.nit
						) {
							userCopy.address = formValues.current?.address
							userCopy.phone = formValues.current?.phone
							userCopy.nit = formValues.current?.nit
						}

						// ACTUALIZAR DATOS CON FIREBASE
						useUserSet(user?.uid, userCopy)
							.then(exitCart)
							.catch(() => showErr(btn))
					} else exitCart()
				})
				.catch(() => showErr(btn))
	}

	const updateValues = (data: IForms) => (formValues.current = data)

	useEffect(() => {
		// AVANZAR HASTA ACTUAL
		nextToCurrent()
	}, [])

	return (
		<div id='cartListCt'>
			{cartList.length > 0 ? (
				<>
					<div id='cartSliders' ref={slider}>
						<div className='cartSlider' id='list'>
							<CartList />
							<span className='waves waves-dark white' id='promoSwitch' onClick={showPromoInput}>
								{strings.forms.promo.helper}
							</span>
							<div id='totalCart'>
								<span>
									<i className='material-icons'>monetization_on</i> {strings.total}
								</span>
								<h3 id='sum'>Q{filterList.sum.toFixed(2)}</h3>
							</div>
							<div id='promoForm'>
								<Input
									label={strings.forms.inputs.promo.field}
									helper={strings.forms.inputs.promo.helper}
									icon='vpn_key'
									type='text'
									name='promoCode'
									value={savePromoCode}
								/>
							</div>
							<button onClick={nextSlider} className='waves blue'>
								{strings.button} <i className='material-icons'>arrow_forward</i>
							</button>
						</div>
						<div className='cartSlider'>
							<h3>{strings.forms.title}</h3>
							<p>{strings.forms.text}</p>
							<CartForm strings={strings.forms.inputs} updateValues={updateValues} />
							<div className='controlSum'>
								<button onClick={prevSlider} className='waves prevSlide amber'>
									{' '}
									<i className='material-icons'>arrow_back</i> {strings.prevButton}
								</button>
								<button onClick={updateBill} className='waves blue'>
									{strings.button} <i className='material-icons'>arrow_forward</i>
								</button>
							</div>
						</div>
						<div className='cartSlider'>
							<CartBill
								strings={strings.sendForm}
								sum={filterList.sum}
								formValues={state.formValues}
							/>
							<div className='controlSum'>
								<button onClick={prevSlider} className='waves prevSlide amber'>
									{' '}
									<i className='material-icons'>arrow_back</i> {strings.prevButton}
								</button>
								<button onClick={sendToBuy} className='waves blue'>
									{strings.sendForm.button} <i className='material-icons'>done_all</i>
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				<div id='cartNotFound'>
					<h2>
						{strings.notFound.title} <i className='material-icons'>remove_shopping_cart</i>
					</h2>
					<p>{strings.notFound.text}</p>
					<img src='/images/general/error.png' alt='EmptyCart' />
				</div>
			)}
			<style jsx>{`
				#cartListCt {
					width: calc(100% - 40px);
					position: relative;
					margin-top: -40px;
					left: 20px;
					padding: 20px;
					background: var(--backgrounds);
					box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
					border-radius: 10px;
					margin-bottom: 120px;
					overflow: hidden;
				}
				#totalCart {
					display: flex;
					color: var(--blue);
					margin: 10px 0;
					font-size: 1.3em;
					align-items: center;
				}
				#totalCart span {
					opacity: 0.8;
					margin-right: 10px;
				}
				#totalCart span i {
					position: relative;
					top: 5px;
				}
				#promoSwitch {
					text-align: center;
					color: var(--blue);
					display: block;
					margin-bottom: 0px;
					margin-top: 20px;
					position: relative;
					z-index: 3;
				}
				#promoForm {
					display: none;
				}
				#cartSliders {
					display: grid;
					grid-template-columns: repeat(${nSliders}, ${100 / nSliders}%);
					column-gap: 30px;
					width: ${nSliders * 100}%;
					transition: transform 0.3s ease-in-out;
				}
				.cartSlider {
					width: 100%;
				}
				h3 {
					opacity: 0.8;
				}
				button {
					position: relative;
					z-index: 3;
					color: var(--backgrounds);
					width: 100%;
					font-weight: bold;
					font-size: 1em;
					align-items: center;
					justify-content: center;
					padding-left: 20px;
				}
				button i {
					margin-left: 10px;
					margin-right: 0;
				}
				.prevSlide {
					padding-left: 9px;
				}
				.prevSlide i {
					margin: 0;
					margin-right: 10px;
				}
				#cartNotFound img {
					width: 230px;
					position: relative;
					margin: 0 auto;
					left: 25px;
				}
				.controlSum {
					display: grid;
					grid-template-columns: 1fr 1fr;
					column-gap: 10px;
				}
			`}</style>
		</div>
	)
}

export default CartSummary
