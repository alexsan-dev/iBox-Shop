import { useEffect } from 'react'

// INSTANCIA DE FIREBASE Y BASE DE DATOS LOCAL
import firebase from 'keys/firebase'

// FIREBASE AUTH, FIREBASE FIRESTORE, FIREBASE CLOUD MESSAGING, CLOUD FUNCTIONS
import 'firebase/messaging'
import 'firebase/firestore'
import 'firebase/functions'

// =============== GLOBALS ===============
const db = firebase.firestore()
const funcs = firebase.functions()
let fcmHandler: number = 0

// =============== EFECTOS ===============
// EFECTO RIPPLE PARA TODOS LOS BOTÓNES
export const useRipples = () => {
	useEffect(() => {
		setInterval(() => {
			// OBTENER TODAS LAS SUPERFICIES
			const surface: NodeListOf<HTMLElement> | null = document.querySelectorAll(
				'.waves'
			) as NodeListOf<HTMLElement>

			// FUNCIÓN DE EFECTO
			const ripple = (el: HTMLElement, e: MouseEvent) => {
				if (el && surface) {
					// PROPIEDADES INICIALES DEL CIRCULO
					const circle: HTMLDivElement = document.createElement('div') as HTMLDivElement
					const maxLarge: number = Math.max(el.clientWidth, el.clientHeight)
					const rectSurface: ClientRect = el.getBoundingClientRect()

					// FUNCIÓN LOGARÍTMICA DEL TIEMPO
					const time: number = Math.log(maxLarge) / Math.log(Math.exp(1)) / 11

					// APLICAR DIMENSIONES Y ESTILO AL CIRCULO
					circle.style.width = circle.style.height = maxLarge + 'px'
					circle.style.left = e.clientX - rectSurface.left - maxLarge / 2 + 'px'
					circle.style.top = e.clientY - rectSurface.top - maxLarge / 2 + 'px'
					circle.classList.add('ripple')
					circle.style.animation = `ripple ${time}s ease-in`

					// AGREGAR CIRCULO A DIVS CON LA CLASE WAVES-DARK
					if (el.classList.contains('waves-dark')) circle.classList.add('ripple-dark')
					el.appendChild(circle)

					// ELIMINAR CIRCULO LUEGO DE *TIME* SEGUNDOS
					setTimeout(() => {
						try {
							el.removeChild(circle)
						} catch (err) {
							console.log(err)
						}
					}, time * 1000)
				}
			}

			// AGREGAR FUNCIÓN RIPPLE A TODAS LAS SUPERFICIES Y VERIFICAR SI YA SE AGREGO ANTES
			for (let i = 0; i < surface.length; i++) {
				if (!surface[i].getAttribute('data-ripple')) {
					surface[i].setAttribute('data-ripple', 'true')
					surface[i].addEventListener('click', (e: MouseEvent) => ripple(surface[i], e))
				}
			}
		}, 10)
	}, [])
}

// MOSTRAR TOAST
interface IToast {
	text: string
	actionText?: string
	onHide?: () => any
	action?: (e: MouseEvent) => void
	fixed?: boolean
	time?: number
}
export const showToast = (data: IToast) => {
	const allToast: NodeListOf<HTMLDivElement> = document.querySelectorAll('.toast') as NodeListOf<
		HTMLDivElement
	>
	const div: HTMLDivElement = document.createElement('div') as HTMLDivElement
	const span: HTMLDivElement = document.createElement('span') as HTMLDivElement
	const btn: HTMLButtonElement = document.createElement('button') as HTMLButtonElement

	// TIEMPO
	const time: number = data.time || 5000

	// LIMPIAR TODOS LOS TOAST ANTERIORES
	allToast.forEach((el: HTMLDivElement) => document.body.removeChild(el))

	// AGREGAR CLASE
	div.classList.add('toast')
	if (data.actionText) div.classList.add('actionToast')

	// AGREGAR TEXTOS Y ACCIONES
	span.textContent = data.text
	btn.textContent = data.actionText || ''
	btn.classList.add('waves')

	// EVENTO DE CLICK EN EL BOTÓN ACCIÓN
	btn.addEventListener('click', (e: MouseEvent) => {
		if (data.action) data.action(e)
		div.style.transform = 'translateY(100%)'
		setTimeout(() => {
			try {
				document.body.removeChild(div)
			} catch (err) {
				console.log(err)
			}
			if (data.onHide) data.onHide()
		}, time + 300)
	})

	// AGREGAR DIV AL BODY
	div.appendChild(span)
	if (data.actionText) div.appendChild(btn)
	document.body.appendChild(div)

	// ANIMAR HACIA ARRIBA
	setTimeout(() => {
		div.style.transform = 'translateY(0)'
	}, 10)

	// NO ELIMINAR SI ES UN MENSAJE FIJO
	if (!data.fixed) {
		setTimeout(() => {
			div.style.transform = 'translateY(100%)'
		}, time)

		setTimeout(() => {
			try {
				document.body.removeChild(div)
			} catch (err) {
				console.log(err)
			}
			if (data.onHide) data.onHide()
		}, time + 300)
	}
}

// MOSTRAR ALERTAS
interface AlertProps {
	type: 'confirm' | 'window' | 'alert' | 'input' | 'error'
	onHide?: () => any
	onConfirm?: () => any
	title: string
	body: string
	confirmBtn?: string
	cancelBtn?: string
	customElements?: string
	fixed?: boolean
}

export const showAlert = (props: AlertProps) => {
	// CREAR ELEMENTOS
	const alertContainer: HTMLDivElement = document.createElement('div')
	const alertShadow: HTMLDivElement = document.createElement('div')
	const alertContent: HTMLDivElement = document.createElement('div')
	const alertBody: HTMLDivElement = document.createElement('div')
	const actions: HTMLUListElement = document.createElement('ul')
	const liCancel: HTMLLIElement = document.createElement('li')
	const liConfirm: HTMLLIElement = document.createElement('li')
	const h1: HTMLHeadingElement = document.createElement('h1')
	const p: HTMLParagraphElement = document.createElement('p')
	const cancelBtn: HTMLButtonElement = document.createElement('button')
	const confirmBtn: HTMLButtonElement = document.createElement('button')

	// ASIGNAR CLASES
	alertContainer.classList.add('alertContainer')
	alertShadow.classList.add('alertShadow')
	alertContent.classList.add('alertContent')
	alertBody.classList.add('alertBody')
	actions.classList.add('alertActions')
	cancelBtn.classList.add('cancelBtn', 'waves', 'waves-dark')
	confirmBtn.classList.add('primary', 'waves')

	// ASIGNAR TEXTOS
	h1.textContent = props.title
	p.textContent = props.body
	cancelBtn.textContent = props.cancelBtn || 'Cancelar'
	confirmBtn.textContent = props.confirmBtn || 'Aceptar'

	// ASIGNAR EVENTOS
	const hideAlert = () => {
		alertShadow.style.pointerEvents = 'none'
		cancelBtn.style.pointerEvents = 'none'
		confirmBtn.style.pointerEvents = 'none'
		alertContainer.style.opacity = '0'
		setTimeout(() => {
			try {
				document.body.removeChild(alertContainer)
				if (props.onHide) props.onHide()
			} catch (err) {
				console.log(err)
			}
		}, 400)
	}

	if (!props.fixed) alertShadow.addEventListener('click', hideAlert)
	cancelBtn.addEventListener('click', hideAlert)
	confirmBtn.addEventListener('click', () => {
		if (props.onConfirm) props.onConfirm()
		hideAlert()
	})

	if (props.type === 'confirm') cancelBtn.style.display = 'block'

	// ASIGNAR AL DOM
	liConfirm.appendChild(confirmBtn)
	liCancel.appendChild(cancelBtn)
	actions.appendChild(liCancel)
	actions.appendChild(liConfirm)
	alertBody.appendChild(h1)
	alertBody.appendChild(p)
	if (props.customElements) {
		const ct: HTMLDivElement = document.createElement('div') as HTMLDivElement
		ct.innerHTML = props.customElements
		alertBody.appendChild(ct)
	}
	alertContent.appendChild(alertBody)

	if (props.type !== 'window') alertContent.appendChild(actions)

	alertContainer.appendChild(alertShadow)
	alertContainer.appendChild(alertContent)
	document.body.appendChild(alertContainer)
}

// =========== NOTIFICACIONES ============
// INICIAR NOTIFICACIONES
export const initFCM = () => {
	const messaging = process.browser ? firebase.messaging() : undefined
	if (fcmHandler === 0)
		messaging?.usePublicVapidKey(
			'BHA7UNM4lYGtAPa3KxkrpAGjaY7krSo1KUzBKYI8r8G3yTji-PaIzLg7rIGvoZmFSrWrGVUNZ25WGvFiSua9XCs'
		)
	fcmHandler++
	return messaging
}

// ENVIAR TOKEN A LA DB
export const sendToken = async (token: string) => {
	const tokens = await db.collection('tokens')
	return tokens.add({ upload: new Date().toUTCString(), token })
}

// PEDIR PERMISO PARA NOTIFICAR
export const requestPush = async () => {
	const messaging = initFCM()
	if (messaging)
		messaging
			.requestPermission()
			.then(async () => {
				// OBTENER TOKEN
				const token: string | undefined = await messaging?.getToken()

				// ENVIAR TOKEN AL SERVIDOR
				if (!window.localStorage.getItem('token'))
					sendToken(token || '').then(() => window.localStorage.setItem('token', token || ''))
			})

			// NO EXISTE PERMISO DEL USUARIO
			.catch((err: Error) => {
				console.log('Unable to get permission to notify.', err)
			})
}

// =============== CARRITO ===============
export const useCartSearch = (cartList: string[], productList: IProduct[] | undefined) => {
	// DECLARAR ARRAY DE CARDS
	const productsFilter: IProduct[] | [] = new Array()
	const multArry: number[] = []
	let sum: number = 0

	// BUSCAR POR CLAVE
	productList?.reverse().forEach((product: IProduct) => {
		// DECLARAR MULTIPLICIDAD
		let firstAdded: boolean = false
		let mult: number = 0

		// AGREGAR MULTIPLICIDAD
		cartList?.forEach((keyID: string) => (product.key.trim() === keyID ? mult++ : null))

		// CREAR LISTA DE CARDS
		cartList?.forEach((keyID: string) => {
			if (product.key.trim() === keyID && !firstAdded) {
				productsFilter.push(product)

				// SALIR Y AGREGAR A LA SUMA TOTAL
				firstAdded = true
				sum += product.price * mult
			}
		})

		// CREAR LISTA DE MULTIPLICIDAD
		if (mult !== 0) multArry.push(mult)
	})

	const resData: OrderCart = { sum, productsFilter, multArry }
	return resData
}

export const verifyForm = (vals: IForms | null) => {
	// OBTENER VALORES DEL FORMULARIO
	let out: boolean = false
	let errCode: number = 1

	if (vals) {
		// VERIFICAR LONGITUD
		if (vals.address.length * vals.email.length * vals.displayName.length * vals.phone !== 0)
			out = true

		// VERIFICAR SI INCLUYE UN @
		if (out) {
			if (vals.email.includes('@')) {
				// VERIFICAR SI TIENE UN . DESPUÉS DE @
				const nString: string = vals.email.substr(vals.email.indexOf('@'))
				if (!nString.includes('.')) {
					out = false
					errCode = 2
				}
			}

			// SINO RETORNAR FALSE
			else {
				errCode = 2
				out = false
			}
		}

		// VERIFICAR EL NUMERO DE TELÉFONO
		if (out) {
			if (vals.phone.toString().length !== 8) {
				errCode = 3
				out = false
			}
		}
	}

	// RETORNAR VERIFICACIÓN
	return { errCode, out }
}

interface IForms {
	displayName: string
	email: string
	address: string
	phone: number
	nit: string
}
interface ReqForm {
	sendData: IForms
	cartList: string[]
}
export const buyFromCart = (req: ReqForm) => funcs.httpsCallable('buyFromCart')(req)

// SW
export const updateApp = () =>
	window.navigator.serviceWorker
		.getRegistration()
		.then((reg: ServiceWorkerRegistration | undefined) => {
			reg?.addEventListener('updatefound', () => {
				const worker = reg.installing
				worker?.addEventListener('statechange', () => {
					if (worker.state === 'installed') {
						showAlert({
							type: 'confirm',
							body: 'Hay una nueva actualización disponible, ¿deseas actualizar?',
							title: 'Nueva actualización',
							confirmBtn: 'Recargar',
							onConfirm: () => window.location.reload(),
						})
						worker.postMessage({ type: 'SKIP_WAITING' })
					}
				})
			})
		})
