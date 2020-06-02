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
	user: null | IUser
	cartList: string[]
	productList: IProduct[] | undefined
}

// VARIABLES GLOBALES
let topBar: any
const defaultUser: AppState = { user: null, productList: [], cartList: [] }

const Layout: FC<Props> = (props: Props) => {
	// EFECTO DE RIPPLES
	useRipples()

	// CONTEXTO DEL COMPONENTE
	const { lang } = useContext(langContext)

	// REFERENCIAS
	topBar = useRef(null)
	const cartList: MutableRefObject<string[]> = useRef([])
	const stateUser: MutableRefObject<IUser | null> = useRef(null)
	const stateProductList: MutableRefObject<IProduct[] | undefined> = useRef()

	// ESTADO
	const [state, setState]: [AppState, Dispatch<SetStateAction<AppState>>] = useState(defaultUser)

	// AGREGAR AL CARRITO CONTEXTO
	const addToCartEvent = async (key: string, mode: boolean, reset?: boolean) => {
		// VERIFICAR EL MODO ELIMINAR/AGREGAR
		if (mode) cartList.current.push(key)
		else {
			// BUSCAR LLAVE
			const rIndex = cartList.current.indexOf(key)
			if (rIndex > -1) cartList.current.splice(rIndex, 1)
		}

		// GUARDAR LLAVE
		window.localStorage.setItem('cart', cartList.current.join())

		// ACTUALIZAR TOPBAR
		if (topBar.current) topBar.current.callRender(cartList.current.length)

		/// REINICIAR CARRITO
		if (reset) {
			// GUARDAR ESTADO
			cartList.current = []
			window.localStorage.setItem('cart', '')

			// ACTUALIZAR TOPBAR
			topBar.current.callRender(0)
		}

		// ACTUALIZAR ESTADO
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
			// GUARDAR REFERENCIA
			stateUser.current = getUser

			// ACTUALIZAR ESTADO
			setState({
				user: getUser,
				cartList: cartList.current,
				productList: stateProductList.current,
			})
			return 0
		}

		// OBTENER USUARIO COMPLETO
		useUserGet(getUser.uid).then((nUser) => {
			// VERIFICAR SI EXISTEN DATOS
			if (nUser) {
				// GUARDAR REFERENCIA
				stateUser.current = nUser

				// ACTUALIZAR ESTADO
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
		const saveProducts = (products: IProduct[] | undefined) => {
			// GUARDAR EN REFERENCIA
			stateProductList.current = products

			// ACTUALIZAR ESTADO
			setState({
				user: stateUser.current || null,
				cartList: cartList.current,
				productList: stateProductList.current,
			})
		}

		// GUARDAR PRODUCTOS
		useGetAllProducts(saveProducts).then(saveProducts)

		// ASIGNAR CARRITO ACTUAL
		setTimeout(
			() => {
				// LEER CARRITO
				const cartListLS = window.localStorage.getItem('cart')

				// VERIFICAR SI EXISTE Y GUARDAR
				if (cartListLS && cartListLS?.length > 1)
					cartList.current = window.localStorage.getItem('cart')?.split(',') || []

				// ACTUALIZAR TOPBAR
				topBar.current.callRender(cartList.current.length)

				// ACTUALIZAR ESTADO
				setState({
					user: stateUser.current || null,
					cartList: cartList.current,
					productList: stateProductList.current,
				})
			},

			// TIEMPO DE ESPERA EN MODO DE PRODUCCIÓN
			process.env.NODE_ENV === 'development' ? 0 : 2000
		)
	}, [])

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
