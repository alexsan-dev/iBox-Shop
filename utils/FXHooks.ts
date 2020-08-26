// REACT
import { MutableRefObject, useRef, useEffect } from 'react'

// =============== UTILIDADES ===============
// HOOK PARA INTERVALOS DE TIEMPO
export const useInterval = (callback: any, delay: number) => {
	const savedCallback: MutableRefObject<() => void> = useRef(() => null)
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])
	useEffect(() => {
		const tick = () => {
			savedCallback.current()
		}
		if (delay !== null) {
			const id = setInterval(tick, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}

// HOOK DE CONEXION
export const useNetwork = (texts: ILangPackage['toast']) =>
	useEffect(() => {
		// ESTADO DE CONEXIÓN
		const online = navigator.onLine

		// ALERTA DE OFFLINE
		const offlineToast = () =>
			window.Toast({
				body: texts.offline,
				fixed: true,
				confirmText: texts.button,
				onConfirm: () => window.location.reload(),
			})

		// MOSTRAR ALERTA CUANDO RECUPERO LA CONEXIÓN
		window.addEventListener('online', () => window.Toast({ body: texts.online }))
		// MOSTRAR ALERTA CUANDO PERDIÓ LA CONEXIÓN
		window.addEventListener('offline', offlineToast)

		// DETECTAR CONEXIÓN AL ENTRAR
		if (!online) offlineToast()
	}, [])

// HOOK DE CARRITO
export const useCart = (topBar: any, callback: (cartList: string[]) => any) =>
	useEffect(() => {
		setTimeout(
			() => {
				// LEER CARRITO
				const cartList: string[] = window.localStorage.getItem('cart')?.split(',') || []

				// ACTUALIZAR TOPBAR
				if (topBar.current) topBar.current.callRender(cartList.length)

				// ACTUALIZAR ESTADO
				callback(cartList)
			},

			// TIEMPO DE ESPERA EN MODO DE PRODUCCIÓN
			process.env.NODE_ENV === 'development' ? 0 : 2000
		)
	}, [])

// HOOK DE EFECTOS RIPPLE
export const useRipples = () =>
	useEffect(() => {
		import('utils/Fx').then(({ ripples }) => ripples())
	}, [])
