// TIPOS DE DATOS Y HOOKS
import { useContext, useState, Dispatch, SetStateAction, FC, useRef, memo } from 'react'

// VARIABLES GLOBALES ( LENGUAJE, TEMA, USUARIO )
import { langContext, appContext } from 'Ctx'

// COMPONENTES Y LAYOUTS
import Footer from './Footer'
import TopBar from './Topbar'
import Drawer from './Drawer'

// AUTH Y FIRESTORE
import { useAuth } from 'utils/Auth'
import { getUser } from 'utils/Firestore'
import { handleCart } from 'utils/Cart'

// HOOKS
import { useProducts, usePush } from 'utils/DataHooks'
import { useNetwork, useCart, useRipples } from 'utils/FXHooks'

// ALERTAS
import { AlertTemplate } from 'components/Alert'
import { ToastTemplate } from 'components/Toast'

// INTERFACES PARA LAS PROPIEDADES Y PROVIDER GLOBAL
interface LayoutProps {
	children: any
}
interface LayoutState {
	user: UserData | null
	cartList: string[]
	productList: IProduct[] | undefined
	refreshAuth: boolean
	refreshApp: (refresh: boolean) => any
}

// VARIABLES GLOBALES
const emptyAlert = () => null
const defaultState: LayoutState = {
	user: null,
	productList: [],
	cartList: [],
	refreshAuth: false,
	refreshApp: () => null,
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
	// CONTEXTO DEL COMPONENTE
	const { lang } = useContext(langContext)

	// ESTADO
	const [contextState, setState]: [LayoutState, Dispatch<SetStateAction<LayoutState>>] = useState(
		defaultState
	)

	// REFERENCIAS
	const topBar: any = useRef(null)

	// AGREGAR AL CARRITO
	const addToCartEvent = async (key: string, mode: boolean, reset?: boolean) => {
		if (process.browser)
			handleCart(
				contextState.cartList,
				(length: number) => (topBar.current ? topBar.current.callRender(length) : null),
				key,
				mode,
				reset
			)
	}

	// ACTUALIZAR AUTH
	const refreshApp = (refreshAuth: boolean) =>
		setState((prevState: LayoutState) => ({ ...prevState, refreshAuth }))

	// DETECTAR CAMBIOS EN EL INICIÓ DE SESIÓN
	useAuth(
		(user: firebase.User | null) => {
			// SI EXISTE USUARIO LEER DE FIRESTORE
			if (user)
				getUser(user?.uid || '').then((fullUserData: UserData | null) =>
					setState((prevState: LayoutState) => ({ ...prevState, user: fullUserData }))
				)
			else setState((prevState: LayoutState) => ({ ...prevState, user }))
		},
		true,
		contextState.refreshAuth
	)

	// UTILIZAR RIPPLES
	useRipples()

	// PEDIR PERMISO PARA NOTIFICAR
	usePush()

	// VERIFICAR CONEXIÓN
	useNetwork(lang.toast)

	// LEER CARRITO
	useCart(topBar, (cartItems: string[]) =>
		setState((prevState: LayoutState) => ({ ...prevState, cartList: cartItems }))
	)

	// LEER PRODUCTOS
	useProducts((productList: IProduct[] | undefined) =>
		setState((prevState: LayoutState) => ({ ...prevState, productList }))
	)

	// COMPONENTE
	return (
		<>
			<appContext.Provider
				value={{
					lang,
					refreshApp,
					theme: 'light',
					user: contextState.user,
					addToCartEvent,
					cartList: contextState.cartList || [],
					productList: contextState.productList,
				}}>
				<nav>
					<TopBar ref={topBar} placeHolder={lang.placeholders.searchPlaceholder} />
					<Drawer strings={lang.general} user={contextState.user} />
				</nav>
				<main>{props.children}</main>
				<AlertTemplate
					confirmText='Aceptar'
					cancelText='Cancelar'
					ref={(AlertRef) => (window.Alert = AlertRef?.show || emptyAlert)}
				/>
				<ToastTemplate
					confirmText='Aceptar'
					ref={(ToastRef) => (window.Toast = ToastRef?.show || emptyAlert)}
				/>
			</appContext.Provider>

			<Footer {...lang.footer} />

			<style jsx>{`
				nav {
					position: fixed;
					width: 100%;
					top: 0;
					z-index: 98;
					background: var(--backgrounds);
				}
				main {
					overflow: hidden;
				}
				@media screen and (min-width: 460px) {
					main {
						width: 90%;
						margin: 0 auto;
						overflow: unset;
					}
				}
			`}</style>
		</>
	)
}
export default memo(Layout)
