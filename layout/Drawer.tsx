// TIPOS DE DATOS Y HOOKS
import { useEffect, useContext } from 'react'
import { showAlert } from 'Tools'
import { useLogout } from 'Hooks'

// NAVEGACIÓN Y ALERTAS
import Router from 'next/router'
import Link from 'next/link'
import { appContext } from 'Ctx'

// PROPIEDADES
interface Props {
	user: UserData | null
	strings: ILangGeneral
}

// ESTADOS Y VARIABLES GLOBALES
let shareCount: number = 0
let x0: number = 0
let x01: number = 0
let deferredPrompt: Event | null
let hideDrawer: () => any

const Drawer: React.FC<Props> = (props: Props) => {
	const { addToCartEvent } = useContext(appContext)

	// OCULTAR DRAWER AL CERRAR SESIÓN
	const logout = () => {
		hideDrawer()
		showAlert({
			type: 'confirm',
			body: props.strings.logout.text,
			title: props.strings.logout.title,
			onConfirm: () => {
				addToCartEvent('', true, true)
				useLogout()
			},
		})
	}

	useEffect(() => {
		// SELECCIONAR TODOS LOS BOTÓNES DE PAGINA, EL INPUT DE MOSTRAR Y OCULTAR, BOTÓN DE COMPARTIR Y BOTÓN DE INSTALAR
		const routes: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll(
			'.routes'
		) as NodeListOf<HTMLAnchorElement>
		const drawerToggle: HTMLInputElement | null = document.getElementById(
			'drawer-toggle'
		) as HTMLInputElement
		const shareBtn: HTMLButtonElement | null = document.querySelector(
			'.shareBtn'
		) as HTMLButtonElement
		const addBtn: HTMLButtonElement | null = document.querySelector(
			'.add-button'
		) as HTMLButtonElement
		const hook: HTMLDivElement | null = document.getElementById('sideHook') as HTMLDivElement
		const drawer: HTMLDivElement | null = document.getElementById('drawer') as HTMLDivElement

		// OCULTAR DRAWER
		hideDrawer = () => (drawerToggle ? (drawerToggle.checked = false) : null)

		// AGREGAR UNA CLASE "BLUE" A LAS PESTAÑAS ACTIVAS EN EL MENU
		const setActive = (url: string) => {
			setTimeout(() => {
				Array.prototype.forEach.call(routes, (b: HTMLAnchorElement | null) => {
					if (b) {
						const route: string | undefined = b.textContent?.split(' ')[1].toLowerCase()
						b.classList.remove('blue')
						b.classList.add('white')
						if (url.substr(1) === route) {
							b.classList.remove('white')
							b.classList.add('blue')
						}
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

		// SELECCIONAR CUAL ES LA PAGINA ACTUAL
		Router.events.on('routeChangeComplete', setActive)
		setActive(Router.pathname)

		// BOTÓN DE COMPARTIR CON SHARE API
		if (navigator.share && shareCount === 0) {
			if (shareBtn) {
				shareBtn.addEventListener('click', () => {
					navigator
						.share({
							title: props.strings.app.name,
							text: props.strings.app.shareText,
							url: window.location.origin,
						})
						.then(() => console.log('Successfully share'))
						.catch((error: Error) => console.log('Error sharing', error))
				})
				shareCount++
			}
		} else if (shareBtn) shareBtn.style.display = 'none'

		// BOTÓN DE INSTALAR ( SERVICE WORKER )
		if (addBtn) {
			addBtn.style.display = 'none'
			window.addEventListener('beforeinstallprompt', (e) => {
				e.preventDefault()
				deferredPrompt = e
				addBtn.style.display = 'flex'
				addBtn.addEventListener('click', () => {
					addBtn.style.display = 'none'
					if (deferredPrompt) {
						// @ts-ignore
						deferredPrompt.prompt()
						// @ts-ignore
						deferredPrompt.userChoice.then((choiceResult) => {
							if (choiceResult.outcome === 'accepted') console.log('User accepted app prompt')
							else console.log('User dismissed the app prompt')
							deferredPrompt = null
						})
					}
				})
			})
		}

		// ABRIR  DRAWER AL DESLIZAR EL HOOK
		hook.addEventListener('touchstart', (e: TouchEvent) => (x0 = e.changedTouches[0].clientX))
		hook.addEventListener('touchend', (e: TouchEvent) => {
			if (e.changedTouches[0].clientX - x0 > 60 && drawerToggle) drawerToggle.checked = true
			x0 = 0
		})

		// CERRAR DRAWER AL DESLIZAR EL DRAWER
		drawer.addEventListener('touchstart', (e: TouchEvent) => (x01 = e.changedTouches[0].clientX))
		drawer.addEventListener('touchend', (e: TouchEvent) => {
			if (e.changedTouches[0].clientX - x01 < -100 && drawerToggle) drawerToggle.checked = false
			x01 = 0
		})
	}, [])

	return (
		<>
			<input type='checkbox' id='drawer-toggle' name='drawer-toggle' />
			<label htmlFor='drawer-toggle' className='drawerShadow sbf' />

			<div id='drawer'>
				<div id='drawerHead'>
					<span>{props.strings.app.nameCom}</span>
					<p>{props.strings.app.slogan}</p>
				</div>
				<ul>
					<li>
						<Link href='/' passHref scroll={false}>
							<a className='white routes waves waves-dark btn' title={props.strings.routes.home}>
								<i className='material-icons'>home</i> {props.strings.routes.home}
							</a>
						</Link>
					</li>
					<li>
						<Link href='/tienda' passHref scroll={false}>
							<a className='btn white routes waves waves-dark' title={props.strings.routes.shop}>
								<i className='material-icons'>store</i> {props.strings.routes.shop}
							</a>
						</Link>
					</li>
					<li>
						<Link href='/carrito' passHref scroll={false}>
							<a className='btn white routes waves waves-dark' title={props.strings.routes.cart}>
								<i className='material-icons'>shopping_cart</i> {props.strings.routes.cart}
							</a>
						</Link>
					</li>
				</ul>
				<hr />
				<span className='dividerTitle'>{props.strings.app.navDivider}</span>
				<ul>
					<li>
						<Link href='/cuenta' passHref scroll={false}>
							<a className='white routes waves waves-dark btn' title={props.strings.routes.account}>
								<i className='material-icons'>person</i> {props.strings.routes.account}
							</a>
						</Link>
					</li>
					{props.user && (
						<li>
							<button onClick={logout} className='white waves waves-dark btn'>
								<i className='material-icons'>exit_to_app</i> {props.strings.buttons.logout}
							</button>
						</li>
					)}
					<li>
						<button className='white waves waves-dark shareBtn btn'>
							<i className='material-icons'>share</i> {props.strings.buttons.share}
						</button>
					</li>
					<li>
						<button className='white waves waves-dark add-button btn'>
							<i className='material-icons'>arrow_downward</i> {props.strings.buttons.download}
						</button>
					</li>
				</ul>
			</div>
			<div id='sideHook' />

			<style jsx>{`
				#drawer-toggle {
					display: none;
				}

				#drawer-toggle:checked ~ #drawer {
					transform: translateX(0);
				}

				#drawer-toggle:checked ~ .sbf {
					transition: opacity 0.3s ease-in-out, transform 0s linear 0s;
					opacity: 1;
					transform: scale(1);
				}

				#drawer {
					transform: translateX(-105%);
					position: fixed;
					top: 0;
					left: 0;
					width: 300px;
					height: 100%;
					background: var(--backgrounds);
					z-index: 2;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
					list-style: none;
					transition: transform 0.3s ease-in-out;
				}

				.drawerShadow {
					opacity: 0;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100vh;
					z-index: 2;
					background: rgba(0, 0, 0, 0.5);
					transform: scale(0);
					transition: opacity 0.3s ease-in-out, transform 0s linear 0.3s;
				}

				#drawer > #drawerHead {
					padding: 25px;
				}

				#drawer > #drawerHead > span {
					font-size: 1.2em;
					color: var(--text);
					font-weight: 500;
				}

				#drawer > #drawerHead > p {
					font-size: 0.85em;
					color: var(--paragraph);
				}

				#drawer > ul {
					padding: 0 10px;
				}

				#drawer > ul li {
					width: 100%;
				}

				#drawer > ul li button,
				#drawer > ul li a {
					color: var(--paragraph);
					font-size: 14px;
					width: 100%;
				}

				#drawer > ul li button i,
				#drawer > ul li a i {
					margin-right: 20px;
					margin-top: -1px;
				}

				#drawer > ul li button.blue,
				#drawer > ul li a.blue {
					color: var(--primary);
				}

				#drawer > ul li button:after,
				#drawer > ul li a:after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(255, 255, 255, 0.85);
					z-index: -2;
				}

				#drawer > .dividerTitle {
					color: var(--disable);
					margin: 25px 20px 12px 20px;
					font-size: 0.87em;
					display: block;
					font-weight: 450;
				}

				#sideHook {
					position: fixed;
					top: 0;
					left: 0;
					height: 100vh;
					width: 30px;
					z-index: 1;
				}

				@media screen and (max-width: 355px) {
					#drawer {
						width: 260px;
					}
				}
			`}</style>
		</>
	)
}

export default Drawer
