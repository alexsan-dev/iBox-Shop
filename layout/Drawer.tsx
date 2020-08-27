// HOOKS
import { useContext, RefObject, useRef, memo, useEffect } from 'react'

// NAVEGACIÓN
import Link from 'next/link'

// CONTEXTO
import { appContext } from 'Ctx'

// HERRAMIENTAS DE APP
import { installPrompt } from 'utils/Fx'

// HOOKS Y EVENTOS
import { useActiveRoutes } from 'utils/FXHooks'
import { logoutEvent, shareEvent, swipeDrawer } from 'utils/Events'

// PROPIEDADES
interface DrawerProps {
	user: UserData | null
	strings: ILangGeneral
}

const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
	// CONTEXTO
	const { addToCartEvent } = useContext(appContext)

	// REFERENCIAS
	const drawerToggle: RefObject<HTMLInputElement> = useRef(null)
	const addBtn: RefObject<HTMLButtonElement> = useRef(null)
	const drawer: RefObject<HTMLDivElement> = useRef(null)
	const hook: RefObject<HTMLDivElement> = useRef(null)

	// OCULTAR DRAWER
	const hideDrawer = () => (drawerToggle.current ? (drawerToggle.current.checked = false) : null)

	// EVENTOS
	const logout = () =>
		process.browser ? logoutEvent(hideDrawer, addToCartEvent, props.strings.logout) : null
	const share = () => (process.browser ? shareEvent(props.strings.app.share) : null)

	// FUNCIÓN DE SWIPE PARA DRAWER
	useEffect(() => {
		swipeDrawer(drawerToggle.current, hook.current, drawer.current)

		// BOTÓN DE INSTALAR APP
		installPrompt(addBtn.current)
	}, [])

	// ROUTER LISTENER
	useActiveRoutes(() => {
		if (drawerToggle.current) drawerToggle.current.checked = false
	})

	return (
		<>
			<input type='checkbox' id='drawer-toggle' name='drawer-toggle' ref={drawerToggle} />
			<label htmlFor='drawer-toggle' className='drawerShadow sbf' />

			<div id='drawer' ref={drawer}>
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
						<button onClick={share} className='white waves waves-dark btn'>
							<i className='material-icons'>share</i> {props.strings.buttons.share}
						</button>
					</li>
					<li>
						<button ref={addBtn} className='white waves waves-dark btn'>
							<i className='material-icons'>arrow_downward</i> {props.strings.buttons.download}
						</button>
					</li>
				</ul>
			</div>
			<div id='sideHook' ref={hook} />
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

export default memo(Drawer)
