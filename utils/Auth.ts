import { useEffect } from 'react'

// ESCUCHADOR PARA CAMBIOS EN EL INICIO DE SESIÓN
export const useAuth = (listen: (user: firebase.User | null) => any, deffer?: boolean) => {
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
		return () => unsubscribe()
	}, [])
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
