// EVENTO DE CERRAR SESIÓN
export const logoutEvent = (
	callback: () => any,
	addToCartEvent: (key: string, mode: boolean, reset?: boolean) => any,
	strings: ILangGeneral['logout']
) => {
	callback()
	window.Alert({
		type: 'confirm',
		body: strings.text,
		title: strings.title,
		onConfirm: () => {
			addToCartEvent('', true, true)
			import('utils/Auth').then(({ useLogout }) => useLogout())
		},
	})
}

// EVENTO DE SHARE
export const shareEvent = (strings: ILangGeneral['app']['share']) => {
	// BOTÓN DE COMPARTIR CON SHARE API
	if (navigator.share) {
		navigator
			.share({
				title: strings.name,
				text: strings.shareText,
				url: window.location.origin,
			})
			.then(() => console.log('Successfully share'))
			.catch((error: Error) => console.log('Error sharing', error))
	} // COPIAR
	else
		navigator.clipboard.writeText(window.location.href).then(() =>
			window.Toast({
				body: strings.shareTextAlt,
			})
		)
}

// AGREGAR UNA CLASE "BLUE" A LAS PESTAÑAS ACTIVAS EN EL MENU
export const setActiveRoutes = (
	routes: NodeListOf<HTMLAnchorElement> | null,
	url: string,
	drawerToggle: HTMLInputElement | null
) => {
	setTimeout(() => {
		if (routes)
			routes.forEach((link: HTMLAnchorElement | null) => {
				if (link) {
					// LEER RUTA
					const route: string | undefined = link.textContent?.split(' ')[1].toLowerCase()

					// AGREGAR CLASE
					link.classList.remove('blue')
					link.classList.add('white')

					// REMOVER CLASE
					if (url.substr(1) === route) {
						link.classList.remove('white')
						link.classList.add('blue')
					}

					// HOME
					if (url.substr(1) === '' && routes) {
						routes[0].classList.remove('white')
						routes[0].classList.add('blue')
					}
				}
			})
	}, 600)
	setTimeout(() => {
		if (drawerToggle) drawerToggle.checked = false
	}, 300)
}

// EVENTO DE SWIPE DE DRAWER
export const swipeDrawer = (
	drawerToggle: HTMLInputElement | null,
	hook: HTMLDivElement | null,
	drawer: HTMLDivElement | null
) => {
	// VARIABLES DE DESPLAZAMIENTO
	let x0 = 0
	let x01 = 0
	const options = { capture: true, passive: true }

	// ABRIR  DRAWER AL DESLIZAR EL HOOK
	if (hook) {
		hook.addEventListener(
			'touchstart',
			(e: TouchEvent) => (x0 = e.changedTouches[0].clientX),
			options
		)
		hook.addEventListener(
			'touchend',
			(e: TouchEvent) => {
				if (e.changedTouches[0].clientX - x0 > 60 && drawerToggle) drawerToggle.checked = true
				x0 = 0
			},
			options
		)
	}

	// CERRAR DRAWER AL DESLIZAR EL DRAWER
	if (drawer) {
		drawer.addEventListener('touchstart', (e: TouchEvent) => (x01 = e.changedTouches[0].clientX))
		drawer.addEventListener(
			'touchend',
			(e: TouchEvent) => {
				if (e.changedTouches[0].clientX - x01 < -100 && drawerToggle) drawerToggle.checked = false
				x01 = 0
			},
			options
		)
	}
}
