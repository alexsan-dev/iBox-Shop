import { useEffect } from 'react'

// ESCUCHADOR PARA CAMBIOS EN EL INICIO DE SESIÓN
export const useAuth = (listen: (user: firebase.User | null) => any) => {
	useEffect(() => {
		// ELIMINAR AUTH
		let unsubscribe: firebase.Unsubscribe

		import('keys/firebase').then((firebase) => {
			import('firebase/auth').then(
				() =>
					// RETORNAR USUARIO
					(unsubscribe = firebase.default
						.auth()
						.onAuthStateChanged((user: firebase.User | null) => listen(user)))
			)
		})

		// LIMPIAR
		return () => unsubscribe()
	}, [])
}
