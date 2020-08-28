import { useEffect } from 'react'

// PROVIDERS
let fbProvider: firebase.auth.FacebookAuthProvider
let gProvider: firebase.auth.GoogleAuthProvider

// ESCUCHADOR PARA CAMBIOS EN EL INICIO DE SESIÓN
export const useAuth = (
	listen: (user: firebase.User | null) => any,
	deffer?: boolean,
	deps?: boolean
) => {
	useEffect(() => {
		// ELIMINAR AUTH
		let unsubscribe: firebase.Unsubscribe

		// SNAPSHOT
		const auth = () =>
			import('keys/firebase').then((firebase) => {
				import('firebase/auth').then(() => {
					// RETORNAR USUARIO
					unsubscribe = firebase.default
						.auth()
						.onAuthStateChanged((user: firebase.User | null) => listen(user))

					// GUARDAR REQUEST DE AUTH
					window.localStorage.setItem('firstRequest', '1')
				})
			})

		// DIFERIR IMPORTACIÓN DE AUTH
		if (deffer) {
			if (window.localStorage.getItem('firstRequest') === '1') auth()
			else listen(null)
		} else auth()

		// LIMPIAR
		return () => {
			if (unsubscribe) unsubscribe()
		}
	}, [deps])
}

// CERRAR SESIÓN
export const useLogout = async () => {
	// FIREBASE, FIRESTORE, INDEXED DB
	const firebase = await import('keys/firebase')
	const { clearUser } = await import('utils/IndexDB')
	const { resetFirestore } = await import('utils/Firestore')

	// AUTH
	await import('firebase/auth')

	// CERRAR SESIÓN
	await firebase.default.auth().signOut()

	// BORRAR DATOS
	await clearUser()

	// SALIR
	resetFirestore(0)
	return true
}

// CONFIGURAR NUEVO USUARIO
export const createNewUser = async (credentials: firebase.auth.UserCredential) => {
	// VERIFICAR SI EL USUARIO ES NUEVO
	if (credentials.additionalUserInfo?.isNewUser) {
		// CREAR FIRESTORE USER
		const { saveNewUser } = await import('utils/Firestore')
		saveNewUser(credentials, credentials.user?.uid).then(() => {
			credentials.user?.sendEmailVerification()
			console.log('Send verification email for new user')
		})
	}
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
	// FIREBASE, FIRESTORE, INDEXED DB
	const firebase = await import('keys/firebase')

	// AUTH
	await import('firebase/auth')

	// CREDENCIALES
	let credentials: firebase.auth.UserCredential | null = null

	// USUARIO NUEVO
	if (data.type === true && data.email && data.pass)
		// VERIFICAR CREDENCIALES
		credentials = await firebase.default
			.auth()
			.createUserWithEmailAndPassword(data.email, data.pass)
	// USUARIOS EXISTENTES CON EMAIL, FACEBOOK, GOOGLE
	else if (data.type === false && data.email && data.pass)
		credentials = await firebase.default.auth().signInWithEmailAndPassword(data.email, data.pass)
	else if (data.type === 'fb')
		credentials = await firebase.default.auth().signInWithPopup(fbProvider)
	else if (data.type === 'g') credentials = await firebase.default.auth().signInWithPopup(gProvider)
	else throw Error('Missing type property')

	// CREAR NUEVO USUARIO
	if (credentials) createNewUser(credentials)

	// ENVIAR MENSAJE DE EXITO
	if (data.onSuccess) data.onSuccess()

	// ASIGNAR PRIMER REQUEST
	if (process.browser) window.localStorage.setItem('firstRequest', '1')
	return true
}

// CONFIGURAR PROVEEDORES ( FACEBOOK Y GOOGLE )
export const setProviders = async () => {
	// FIREBASE
	const firebase = await import('keys/firebase')
	await import('firebase/auth')

	// PROVEEDOR DE FACEBOOK
	fbProvider = new firebase.default.auth.FacebookAuthProvider()

	// PROVEEDOR DE GOOGLE
	gProvider = new firebase.default.auth.GoogleAuthProvider()

	// ASIGNAR IDIOMA DE AUTH
	firebase.default.auth().useDeviceLanguage()
}

// RECUPERAR CONTRASEÑA
export const useResetPass = async (email: string) => {
	// FIREBASE
	const firebase = await import('keys/firebase')
	await import('firebase/auth')

	// ENVIAR CORREO DE RECUPERACIÓN
	await firebase.default.auth().sendPasswordResetEmail(email)
	return true
}
