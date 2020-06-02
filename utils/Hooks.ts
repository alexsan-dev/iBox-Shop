// HOOKS Y TIPOS DE DATOS
import { useEffect, useRef, MutableRefObject } from 'react'
import { Unsubscribe, User, firestore } from 'firebase'

// INSTANCIA DE FIREBASE Y BASE DE DATOS LOCAL
import firebase from 'keys/firebase'

// BASES DE DATOS LOCAL
import { setUser, iLocalDB, setProducts, clearUser } from './IndexDB'

// FIREBASE AUTH, FIREBASE FIRESTORE, FIREBASE CLOUD MESSAGING, CLOUD FUNCTIONS
import 'firebase/auth'
import 'firebase/firestore'

// =============== GLOBALS ===============
const db = firebase.firestore()
let dbHandler: number = 0
let fireStoreHandler: number = 0
let localDBHandler: number = 0
let fbProvider: firebase.auth.FacebookAuthProvider
let gProvider: firebase.auth.GoogleAuthProvider

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

// OBTENER DATOS DE FIRESTORE
// AGREGAR USUARIO EN CUENTA NUEVA
export const useUserSet = async (id?: string, data?: IUser) => {
	if (id && data) {
		await db.collection('users').doc(id).set(data)
		setUser(data)
	}
}

// OBTENER USUARIOS DE FIRESTORE O CARGAR LA VERSION LOCAL
export const useUserGet = async (id: string | undefined) => {
	const user: IUserDB[] = await iLocalDB.users.toArray()
	let resUser: IUser | null = null

	// VERIFICAR USUARIO LOCAL
	if (user[0] && fireStoreHandler === 0) {
		// RETORNAR USUARIO LOCAL
		console.log('Read user from localDB')
		resUser = user[0].user
		fireStoreHandler++
	} else if (fireStoreHandler === 0 && id) {
		// LEER DE FIREBASE
		const getUser: firestore.DocumentSnapshot<IUser> = (await db
			.collection('users')
			.doc(id)
			.get()) as firestore.DocumentSnapshot<IUser>

		if (getUser) {
			console.log(
				'%c📖 READ USER FROM FIRESTORE 🔥',
				'background:#FFA000; color: #ffff; padding:5px; font-weight:bold; border-radius:5px'
			)

			// GUARDAR EN LOCAL
			await setUser(getUser.data() || null)

			// RETORNAR USUARIO
			resUser = getUser.data() || null
			fireStoreHandler++
		} else resUser = null
	}

	// SINO AGREGAR NULL
	else resUser = null
	return resUser
}

// =============== PRODUCTOS ===============
// OBTENER LISTADO DE PRODUCTOS DE FIRESTORE O LOCAL
export const defProduct: IProduct = {
	color: '',
	description: '',
	name: '',
	price: 0,
	tag: [''],
	key: '',
	img: '',
	brand: '',
	specs: '',
	points: {
		pid: '',
		points: [0],
		comments: [''],
	},
}

export const useGetAllProducts = async (
	onDataUpdate?: (products: IProduct[] | undefined) => any
) => {
	// OBTENER DATOS LOCALES
	let products: IProduct[] | undefined
	const localData: IProductDB[] = await iLocalDB.products.toArray()

	// INSERTAR COMENTARIOS EN PRODUCTOS
	const insertOnProducts = (productList: IProduct[] | undefined, commentList: IProductPoints[]) => {
		// VARIABLES TEMPORALES
		const tempProducts: IProduct[] | undefined = productList
		const tempComments: IProductPoints[] = commentList

		// RECORRER PRODUCTOS Y COMENTARIOS
		if (tempProducts)
			for (let i = 0; i < tempProducts.length; i++) {
				// VARIABLE POR DEFAULT
				tempProducts[i].points = { points: [0], pid: tempProducts[i].key, comments: [''] }
				for (let j = 0; j < tempComments.length; j++) {
					// ASIGNAR COMENTARIOS RESPECTIVOS
					if (tempProducts[i].key === tempComments[j].pid) tempProducts[i].points = tempComments[j]
				}
			}

		// RETORNAR VARIABLE TEMPORAL
		return tempProducts
	}

	// VERIFICAR POR NUEVOS DATOS
	if (window.navigator.onLine && dbHandler === 0)
		setTimeout(async () => {
			// CREAR CONEXIÓN
			const firestoreData: firestore.CollectionReference<IProduct> = db.collection(
				'products'
			) as firestore.CollectionReference<IProduct>
			const commentList: firestore.CollectionReference<IProductPoints> = db.collection(
				'points'
			) as firestore.CollectionReference<IProductPoints>

			// DETECTAR CAMBIOS
			firestoreData.onSnapshot(async (nData: firestore.QuerySnapshot) => {
				console.log(
					'%c📖 CHANGE FROM FIRESTORE 🔥',
					'background:#FFA000; color: #ffff; padding:5px; font-weight:bold; border-radius:5px'
				)

				// OBTENER NUEVOS DATOS
				const newData: IProduct[] = nData.docs.map((doc) => doc.data()) as IProduct[]
				const commentS = await commentList.get()

				// CREAR NUEVA LISTA
				products = newData
				const insertedComments: IProduct[] | undefined = insertOnProducts(
					products,
					commentS.docs.map((cms) => cms.data())
				)

				// AGREGAR A BASE LOCAL Y ENVIAR
				if (insertedComments) await setProducts(insertedComments)
				if (onDataUpdate) onDataUpdate(insertedComments)
			})

			// DETECTAR CAMBIOS EN COMENTARIOS
			commentList.onSnapshot(async (nComment: firestore.QuerySnapshot) => {
				const newData: IProductPoints[] = nComment.docs.map((doc) => doc.data()) as IProductPoints[]
				const insertedComments: IProduct[] | undefined = insertOnProducts(products, newData)

				// ACTUALIZAR CAMBIOS LOCALES
				if (insertedComments) await setProducts(insertedComments)

				// ACTUALIZAR ESTADO
				if (onDataUpdate) onDataUpdate(insertedComments)
			})

			// LIMITAR PETICIONES
			dbHandler++
		}, 1000)

	// SI EXISTEN DEVOLVER DATOS LOCALES
	if (localData) {
		console.log('read products from localDB')
		products = localData.map((prd: IProductDB) => ({ ...prd.product }))
	}

	// SINO DEVOLVER DE FIREBASE
	else if (localDBHandler === 0) {
		console.log(
			'%c📖 READ PRODUCTS FROM FIRESTORE 🔥',
			'background:#FFA000; color: #ffff; padding:5px; font-weight:bold; border-radius:5px'
		)

		// CREAR NUEVA LISTA
		const firestoreData: firestore.QuerySnapshot<IProduct> = (await db
			.collection('products')
			.get()) as firestore.QuerySnapshot<IProduct>

		const commentList: firestore.QuerySnapshot<IProductPoints> = (await db
			.collection('points')
			.get()) as firestore.QuerySnapshot<IProductPoints>

		// AGREGAR A LOS PRODUCTOS
		firestoreData.forEach((doc) => products?.push(doc.data()))

		// AGREGAR A BASE LOCAL Y ENVIAR
		await setProducts(
			insertOnProducts(
				products,
				commentList.docs.map((cms) => cms.data())
			) || [defProduct]
		)
		localDBHandler++
	}
	return products
}

// LEER DOCUMENTO
export const queryProduct = async (key: string) => {
	// OBTENER REFERENCIA
	const fireDoc: firestore.DocumentReference<IProduct> = db
		.collection('products')
		.doc(key) as firestore.DocumentReference<IProduct>

	// RETORNAR DOCUMENTO
	return fireDoc.get()
}

// =============== USUARIOS ===============
// USUARIO POR DEFECTO
export const defUserData: IUser = {
	displayName: '',
	email: '',
	provider: '',
	photoURL: null,
	uid: '',
	address: '',
	phone: 0,
	nit: '',
	department: '',
}

// CONFIGURAR PROVEEDORES ( FACEBOOK Y GOOGLE )
export const setProviders = async () => {
	// PROVEEDOR DE FACEBOOK
	fbProvider = new firebase.auth.FacebookAuthProvider()

	// PROVEEDOR DE GOOGLE
	gProvider = new firebase.auth.GoogleAuthProvider()

	// ASIGNAR IDIOMA DE AUTH
	firebase.auth().useDeviceLanguage()
}

// ESCUCHADOR PARA CAMBIOS EN EL INICIO DE SESIÓN
export const useAuth = (listen: (user: User | null) => any) => {
	// LIMITAR RENDERS
	fireStoreHandler = 0

	useEffect(() => {
		// RETORNAR USUARIO
		const unsubscribe: Unsubscribe = firebase
			.auth()
			.onAuthStateChanged((user: User | null) => listen(user))
		return () => unsubscribe()
	}, [])
}

// CERRAR SESIÓN
export const useLogout = async () => {
	// CERRAR SESIÓN
	await firebase.auth().signOut()

	// BORRAR DATOS
	await clearUser()

	// SALIR
	fireStoreHandler = 0
	return true
}

// BORRAR TODOS LOS DATOS AL CERRAR SESIÓN
export const useCleanData = async () => {
	// BORRAR DATOS
	await clearUser()

	// SALIR
	fireStoreHandler = 0
	return true
}

// ENVIAR CORREO DE VERIFICACIÓN
export const useSendEmailVerification = async () =>
	firebase.auth().currentUser?.sendEmailVerification()

// BORRAR USUARIO
export const useDeleteUser = async () => {
	// BORRAR DATOS LOCALES
	await clearUser()
	fireStoreHandler = 0

	// RETORNAR ACCIÓN
	return firebase.auth().currentUser?.delete()
}

// TIEMPO USUARIO DESDE SU CREACIÓN
export const useUserTime = () => {
	// OBTENER FECHA DE USUARIO
	const userDate: string | undefined = firebase.auth().currentUser?.metadata.creationTime

	// RETORNAR NUEVA FECHA O FECHA DE USUARIO
	if (userDate) return new Date(userDate)
	else return new Date()
}

// RECUPERAR CONTRASEÑA
export const useResetPass = async (email: string) => {
	// ENVIAR CORREO DE RECUPERACIÓN
	await firebase.auth().sendPasswordResetEmail(email)
	return true
}

// INICIO DE SESIÓN
interface LoginType {
	email?: string
	pass?: string
	name?: string
	type: boolean | string
	onSuccess?: () => any
}
export const useLogin = async (data: LoginType) => {
	// USUARIO NUEVO
	if (data.type === true && data.email && data.pass) {
		// VERIFICAR CREDENCIALES
		const credentials: firebase.auth.UserCredential = await firebase
			.auth()
			.createUserWithEmailAndPassword(data.email, data.pass)

		// SI EXISTEN ASIGNAR DATOS INICIALES
		if (credentials) {
			const userData: IUser = {
				displayName: data.name || null,
				email: data.email || null,
				provider: credentials.user?.providerData[0]?.providerId,
				photoURL:
					'https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef',
				uid: credentials.user?.uid,
				address: '',
				phone: 0,
				nit: '',
				department: '',
			}

			// AGREGAR A BASE LOCAL
			await useUserSet(credentials.user?.uid, userData)

			// ENVIAR CORREO DE VERIFICACIÓN
			await credentials.user?.sendEmailVerification()
			console.log('Send verification email for new user')
		} else return false
	}

	// USUARIOS EXISTENTES CON EMAIL, FACEBOOK, GOOGLE
	else if (data.type === false && data.email && data.pass)
		await firebase.auth().signInWithEmailAndPassword(data.email, data.pass)
	else if (data.type === 'fb') await firebase.auth().signInWithPopup(fbProvider)
	else if (data.type === 'g') await firebase.auth().signInWithPopup(gProvider)
	else throw Error('Missing type property')

	if (data.onSuccess) data.onSuccess()
	return true
}

// CÓDIGOS DE ERROR EN EL INICIO DE SESIÓN
export const useAuthError = (code: string, str: ILangErrors) => {
	const codeText = code.substr(5)
	switch (codeText) {
		case 'app-deleted':
			return str.app_deleted
		case 'app-not-authorized':
			return str.app_not_authorized
		case 'argument-error':
			return str.argument_error
		case 'invalid-api-key':
			return str.invalid_api_key
		case 'invalid-user-token':
			return str.invalid_user_token
		case 'network-request-failed':
			return str.network_request_failed
		case 'operation-not-allowed':
			return str.operation_not_allowed
		case 'requires-recent-login':
			return str.requires_recent_login
		case 'too-many-requests':
			return str.too_many_requests
		case 'unauthorized-domain':
			return str.unauthorized_domain
		case 'user-disabled':
			return str.user_disabled
		case 'user-token-expired':
			return str.user_token_expired
		case 'web-storage-unsupported':
			return str.web_storage_unsupported
		case 'account-exists-with-different-credential':
			return str.account_exists_with_different_credential
		case 'credential-already-in-used':
			return str.credential_already_in_used
		case 'email-already-in-use':
			return str.email_already_in_use
		case 'user-not-found':
			return str.user_not_found
		case 'weak-password':
			return str.weak_password
		case 'invalid-email':
			return str.invalid_email
		case 'wrong-password':
			return str.wrong_password
		case 'invalid-verification-code':
			return str.invalid_verification_code
		case 'invalid-verification-id':
			return str.invalid_verification_id
		case 'captcha-check-failed':
			return str.captcha_check_failed
		case 'invalid-phone-number':
			return str.invalid_phone_number
		case 'missing-phone-number':
			return str.missing_phone_number
		case 'quota-exceeded':
			return str.quota_exceeded
		default:
			return str.defaultVal
	}
}
