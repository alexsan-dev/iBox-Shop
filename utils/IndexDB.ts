import Dexie from 'dexie'

export class LocalDB extends Dexie {
	// DECLARAR TABLAS
	users: Dexie.Table<IUserDB, number>
	products: Dexie.Table<IProductDB, string>

	constructor() {
		super('localDB')
		this.version(1).stores({ users: 'id, user', products: 'id, product' })

		// TABLA USUARIOS Y PRODUCTOS
		this.users = this.table('users')
		this.products = this.table('products')
	}
}

// INSTANCIA DE BASE DE DATOS
export const iLocalDB = new LocalDB()

// LIMPIAR USUARIO
export const clearUser = async () => iLocalDB.users.clear()

// AGREGAR USUARIO A LOCAL
export const setUser = async (user: UserData | null) => iLocalDB.users.put({ id: 1, user })

// AGREGAR PRODUCTOS AL LOCAL
export const setProducts = async (products: IProduct[]) =>
	iLocalDB.products.bulkPut(products?.map((product: IProduct) => ({ id: product.key, product })))
