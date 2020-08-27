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

// HOOK DE CONEXIÓN
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

// HOO DE RUTAS ACTIVAS
export const useActiveRoutes = (drawerToggle: HTMLInputElement | null) => {
	useEffect(() => {
		import('next/router').then((Router) => {
			import('utils/Events').then(({ setActiveRoutes }) => {
				// SELECCIONAR TODOS LOS BOTÓNES DE PAGINA
				const routes: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll(
					'.routes'
				) as NodeListOf<HTMLAnchorElement>
				const setActive = (url: string) => setActiveRoutes(routes, url, drawerToggle)

				// SELECCIONAR CUAL ES LA PAGINA ACTUAL
				Router.default.events.on('routeChangeComplete', setActive)
				setActive(Router.default.pathname)
			})
		})
	}, [])
}

// ALERTA DE ACTUALIZACIÓN
export const useUpdateAlert = () =>
	window.navigator.serviceWorker
		.getRegistration()
		.then((reg: ServiceWorkerRegistration | undefined) => {
			reg?.addEventListener('updatefound', () => {
				const worker = reg.installing
				worker?.addEventListener('statechange', () => {
					if (worker.state === 'installed') {
						window.Alert({
							type: 'confirm',
							body: 'Hay una nueva actualización disponible, ¿deseas actualizar?',
							title: 'Nueva actualización',
							confirmText: 'Recargar',
							onConfirm: () => window.location.reload(),
						})
						worker.postMessage({ type: 'SKIP_WAITING' })
					}
				})
			})
		})

export const useSplash = () =>
	useEffect(() => {
		// OCULTAR SPLASH LUEGO DE 1500MS
		const splash: HTMLDivElement | null = document.getElementById('splash') as HTMLDivElement

		// QUITAR SPLASH PARA SMARTPHONE
		if (window.innerWidth < 550) {
			setTimeout(() => {
				if (splash) {
					splash.style.opacity = '0'
					setTimeout(() => {
						if (splash) splash.style.display = 'none'
					}, 300)
				} else console.log('Run on dev mode')
			}, 1500)
		}

		// ALERTA PARA DESKTOP
		else {
			// BAJAR SPLASH
			if (splash) splash.style.zIndex = '99'

			// MOSTRAR ALERTA
			window.Alert({
				type: 'window',
				fixed: true,
				title: 'Estamos trabajando',
				body:
					'Hola agradecemos mucho tu visita ❤️, aún estamos trabajando 💻 en la aplicación para escritorio pero puedes probarla desde tu smartphone 📱, visita la tienda ahora!',
			})
		}
	}, [])
