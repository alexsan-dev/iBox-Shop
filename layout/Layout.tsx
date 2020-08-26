// TIPOS DE DATOS Y HOOKS
import { useContext, useState, Dispatch, SetStateAction, FC, useRef } from 'react'

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
interface Props {
	children: any
}
interface AppState {
	user: UserData | null
	cartList: string[]
	productList: IProduct[] | undefined
}

// VARIABLES GLOBALES
const emptyAlert = () => null
const defaultState: AppState = { user: null, productList: [], cartList: [] }

const Layout: FC<Props> = (props: Props) => {
	// CONTEXTO DEL COMPONENTE
	const { lang } = useContext(langContext)

	// ESTADO
	const [state, setState]: [AppState, Dispatch<SetStateAction<AppState>>] = useState(defaultState)

	// REFERENCIAS
	const topBar: any = useRef(null)

	// AGREGAR AL CARRITO
	const addToCartEvent = async (key: string, mode: boolean, reset?: boolean) =>
		handleCart(
			state.cartList,
			(length: number) => (topBar.current ? topBar.current.callRender(length) : null),
			key,
			mode,
			reset
		)

	// DETECTAR CAMBIOS EN EL INICIÓ DE SESIÓN
	useAuth((user: firebase.User | null) =>
		getUser(user?.uid || '').then((fullUserData: UserData | null) =>
			setState((prevState: AppState) => ({ ...prevState, user: fullUserData }))
		)
	)

	// UTILIZAR RIPPLES
	useRipples()

	// PEDIR PERMISO PARA NOTIFICAR
	usePush()

	// VERIFICAR CONEXIÓN
	useNetwork(lang.toast)

	// LEER CARRITO
	useCart(topBar, (cartItems: string[]) =>
		setState((prevState: AppState) => ({ ...prevState, cartList: cartItems }))
	)

	// LEER PRODUCTOS
	useProducts((productList: IProduct[] | undefined) =>
		setState((prevState: AppState) => ({ ...prevState, productList }))
	)

	// COMPONENTE
	return (
		<>
			<appContext.Provider
				value={{
					lang,
					theme: 'light',
					user: state.user,
					addToCartEvent,
					cartList: state.cartList || [],
					productList: state.productList,
				}}>
				<nav>
					<TopBar ref={topBar} placeHolder={lang.placeholders.searchPlaceholder} />
					<Drawer strings={lang.general} user={state.user} />
				</nav>
				<main>{props.children}</main>
				<AlertTemplate ref={(AlertRef) => (window.Alert = AlertRef?.show || emptyAlert)} />
				<ToastTemplate ref={(ToastRef) => (window.Toast = ToastRef?.show || emptyAlert)} />
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
export default Layout
