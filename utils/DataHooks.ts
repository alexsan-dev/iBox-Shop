import { useEffect } from 'react'

// HOO DE PRODUCTOS
export const useProducts = (callBack: (roducts: IProduct[] | undefined) => any) =>
	useEffect(() => {
		// LEER PRODUCTOS
		const readProducts = async (callback: (products: IProduct[] | undefined) => any) => {
			const { fetchAllProducts } = await import('utils/Firestore')
			fetchAllProducts(callback).then(callback)
		}

		// ACTUALIZAR ESTADO
		readProducts(callBack)
	}, [])

// HOOK DE FCM
export const usePush = () =>
	useEffect(() => {
		if (process.env.NODE_ENV === 'production')
			setTimeout(() => {
				import('utils/FCM').then(({ requestPush }) => requestPush())
			}, 10000)
	}, [])
