// INSTANCIA DE FIREBASE Y BASE DE DATOS LOCAL
import firebase from 'keys/firebase'

// FIREBASE AUTH, FIREBASE FIRESTORE, FIREBASE CLOUD MESSAGING, CLOUD FUNCTIONS
import 'firebase/messaging'
import 'firebase/firestore'

// =============== GLOBALS ===============
const db = firebase.firestore()
let fcmHandler: number = 0

// =========== NOTIFICACIONES ============
// INICIAR NOTIFICACIONES
export const initFCM = () => {
	const messaging = process.browser ? firebase.messaging() : undefined
	if (fcmHandler === 0)
		messaging?.usePublicVapidKey(
			'BHA7UNM4lYGtAPa3KxkrpAGjaY7krSo1KUzBKYI8r8G3yTji-PaIzLg7rIGvoZmFSrWrGVUNZ25WGvFiSua9XCs'
		)
	fcmHandler++
	return messaging
}

// ENVIAR TOKEN A LA DB
export const sendToken = async (token: string) => {
	const tokens = await db.collection('tokens')
	return tokens.add({ upload: new Date().toUTCString(), token })
}

// PEDIR PERMISO PARA NOTIFICAR
export const requestPush = async () => {
	const messaging = initFCM()
	if (messaging)
		messaging
			.requestPermission()
			.then(async () => {
				// OBTENER TOKEN
				const token: string | undefined = await messaging?.getToken()

				// ENVIAR TOKEN AL SERVIDOR
				if (!window.localStorage.getItem('token'))
					sendToken(token || '').then(() => window.localStorage.setItem('token', token || ''))
			})

			// NO EXISTE PERMISO DEL USUARIO
			.catch((err: Error) => {
				console.log('Unable to get permission to notify.', err)
			})
}
