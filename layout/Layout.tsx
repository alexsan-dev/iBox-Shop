// TIPOS DE DATOS Y HOOKS
import {
	useEffect,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
	FC,
	useRef,
	MutableRefObject,
} from 'react'

import { User } from 'firebase'

// VARIABLES GLOBALES ( LENGUAJE, TEMA, USUARIO )
import { langContext, appContext } from 'Ctx'

// COMPONENTES, ALERTAS Y LAYOUTS
import Footer from './Footer'
import TopBar from './Topbar'
import Drawer from './Drawer'

// HOOKS Y TOOLS
import { useRipples, showToast, requestPush } from 'Tools'
import { useAuth, useUserGet, useGetAllProducts } from 'Hooks'

// INTERFACES PARA LAS PROPIEDADES Y PROVIDER GLOBAL
interface Props {
	children: any
}
interface AppState {
	user: null | userModel
	cartList: string[]
	productList: product[] | []
}

// VARIABLES GLOBALES
let topBar: any

const Layout: FC<Props> = (props: Props) => {
	// EFECTO DE RIPPLES
	useRipples()

	// ESTADOS Y CONTEXTO DEL COMPONENTE
	const { lang } = useContext(langContext)
	const defaultUser: AppState = { user: null, productList: [], cartList: [] }
	const stateUser: MutableRefObject<userModel | null> = useRef(null)
	const stateProductList: MutableRefObject<product[] | []> = useRef([])
	const cartList: MutableRefObject<string[]> = useRef([])
	const [state, setState]: [AppState, Dispatch<SetStateAction<AppState>>] = useState(defaultUser)
	topBar = useRef(null)

	// AGREGAR AL CARRITO CONTEXTO
	const addToCartEvent = async (key: string, mode: boolean, reset?: boolean) => {
		if (mode) cartList.current.push(key)
		else {
			const rIndex = cartList.current.indexOf(key)
			if (rIndex > -1) cartList.current.splice(rIndex, 1)
		}
		window.localStorage.setItem('cart', cartList.current.join())
		if (topBar.current) topBar.current.callRender(cartList.current.length)
		if (reset) {
			window.localStorage.setItem('cart', '')
			cartList.current = []
			topBar.current.callRender(0)
		}

		setState({
			user: stateUser.current || null,
			cartList: cartList.current,
			productList: stateProductList.current,
		})
	}

	// DETECTAR CAMBIOS EN EL INICIÓ DE SESIÓN
	useAuth((getUser: User | null) => {
		// LIMPIAR USUARIO
		if (!getUser) {
			stateUser.current = getUser
			setState({
				user: getUser,
				cartList: cartList.current,
				productList: stateProductList.current,
			})
			return 0
		}

		// OBTENER USUARIO COMPLETO
		useUserGet(getUser.uid).then((nUser) => {
			if (nUser) {
				stateUser.current = nUser
				setState({
					user: nUser,
					cartList: cartList.current,
					productList: stateProductList.current,
				})
			}
		})
	})

	useEffect(() => {
		// ESTADO DE CONEXIÓN
		const online = navigator.onLine

		// ALERTA DE OFFLINE
		const offlineToast = () =>
			showToast({
				text: lang.toast.offline,
				fixed: true,
				actionText: lang.toast.button,
				action: () => window.location.reload(),
			})

		// MOSTRAR ALERTA CUANDO RECUPERO LA CONEXIÓN
		window.addEventListener('online', () => showToast({ text: lang.toast.online }))
		// MOSTRAR ALERTA CUANDO PERDIÓ LA CONEXIÓN
		window.addEventListener('offline', offlineToast)

		// DETECTAR CONEXIÓN AL ENTRAR
		if (!online) offlineToast()

		// PEDIR PERMISO PARA NOTIFICAR
		requestPush()

		// OBTENER PRODUCTOS
		const saveProducts = (products: product[]) => {
			stateProductList.current = products
			setState({
				user: stateUser.current || null,
				cartList: cartList.current,
				productList: stateProductList.current,
			})
		}

		// LEER DE LA DB
		// @ts-ignore
		useGetAllProducts(saveProducts).then(saveProducts)

		// ASIGNAR CARRITO ACTUAL
		setTimeout(
			() => {
				const cartListLS = window.localStorage.getItem('cart')
				if (cartListLS && cartListLS?.length > 1)
					cartList.current = window.localStorage.getItem('cart')?.split(',') || []
				topBar.current.callRender(cartList.current.length)
				setState({
					user: stateUser.current || null,
					cartList: cartList.current,
					productList: stateProductList.current,
				})
			},
			process.env.NODE_ENV === 'development' ? 0 : 2000
		)
	}, [])

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
