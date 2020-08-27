// =============== GLOBALS ===============
let dbHandler: number = 0
let localDBHandler: number = 0
let fireStoreHandler: number = 0

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

// LEER PRODUCTOS
export const fetchAllProducts = async (
	onDataUpdate?: (products: IProduct[] | undefined) => any
) => {
	// FIREBASE
	await import('firebase/firestore')
	const db = (await import('keys/firebase')).default.firestore()

	// LOCAL DB
	const { iLocalDB, setProducts } = await import('utils/IndexDB')

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
			const firestoreData: firebase.firestore.CollectionReference<IProduct> = db.collection(
				'products'
			) as firebase.firestore.CollectionReference<IProduct>
			const commentList: firebase.firestore.CollectionReference<IProductPoints> = db.collection(
				'points'
			) as firebase.firestore.CollectionReference<IProductPoints>

			// DETECTAR CAMBIOS
			firestoreData.onSnapshot(async (nData: firebase.firestore.QuerySnapshot) => {
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
			commentList.onSnapshot(async (nComment: firebase.firestore.QuerySnapshot) => {
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
		const firestoreData: firebase.firestore.QuerySnapshot<IProduct> = (await db
			.collection('products')
			.get()) as firebase.firestore.QuerySnapshot<IProduct>

		const commentList: firebase.firestore.QuerySnapshot<IProductPoints> = (await db
			.collection('points')
			.get()) as firebase.firestore.QuerySnapshot<IProductPoints>

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

export const getUser = async (id: string | undefined) => {
	// FIREBASE
	await import('firebase/firestore')
	const db = (await import('keys/firebase')).default.firestore()

	// LOCAL DB
	const { iLocalDB, setUser } = await import('utils/IndexDB')

	// USERS
	const user: IUserDB[] = await iLocalDB.users.toArray()
	let resUser: UserData | null = null

	// VERIFICAR USUARIO LOCAL
	if (user[0] && fireStoreHandler === 0) {
		// RETORNAR USUARIO LOCAL
		console.log('Read user from localDB')
		resUser = user[0].user
		fireStoreHandler++
	} else if (fireStoreHandler === 0 && id) {
		// LEER DE FIREBASE
		const getUser: firebase.firestore.DocumentSnapshot<UserData> = (await db
			.collection('users')
			.doc(id)
			.get()) as firebase.firestore.DocumentSnapshot<UserData>

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

export const resetFirestore = (handlerValue: number) => (fireStoreHandler = handlerValue)

// AGREGAR USUARIO EN CUENTA NUEVA
export const saveUserToDB = async (id?: string, data?: UserData) => {
	// FIREBASE
	await import('firebase/firestore')
	const db = (await import('keys/firebase')).default.firestore()
	// LOCAL DB
	const { setUser } = await import('utils/IndexDB')

	if (id && data) {
		await db.collection('users').doc(id).set(data)
		setUser(data)
	}
}
