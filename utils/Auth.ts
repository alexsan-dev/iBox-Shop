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

	// USUARIO NUEVO
	if (data.type === true && data.email && data.pass) {
		// VERIFICAR CREDENCIALES
		const credentials: firebase.auth.UserCredential = await firebase.default
			.auth()
			.createUserWithEmailAndPassword(data.email, data.pass)

		// SI EXISTEN ASIGNAR DATOS INICIALES
		if (credentials) {
			const userData: UserData = {
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
			const { saveUserToDB } = await import('utils/Firestore')
			await saveUserToDB(credentials.user?.uid, userData)

			// ENVIAR CORREO DE VERIFICACIÓN
			await credentials.user?.sendEmailVerification()
			console.log('Send verification email for new user')
		} else return false
	}

	// USUARIOS EXISTENTES CON EMAIL, FACEBOOK, GOOGLE
	else if (data.type === false && data.email && data.pass)
		await firebase.default.auth().signInWithEmailAndPassword(data.email, data.pass)
	else if (data.type === 'fb') await firebase.default.auth().signInWithPopup(fbProvider)
	else if (data.type === 'g') await firebase.default.auth().signInWithPopup(gProvider)
	else throw Error('Missing type property')

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
