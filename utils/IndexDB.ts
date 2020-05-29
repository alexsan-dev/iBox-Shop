import { firestore } from 'firebase'
import Dexie from 'dexie'

export class LocalDB extends Dexie {
	// DECLARAR TABLAS
	users: Dexie.Table<user, number>
	productList: Dexie.Table<productList, number>

	constructor() {
		super('localDB')
		this.version(1).stores({ users: 'id, user', productList: 'id, products' })

		// TABLA USUARIOS Y PRODUCTOS
		this.users = this.table('users')
		this.productList = this.table('productList')
	}
}

// INSTANCIA DE BASE DE DATOS
export const iLocalDB = new LocalDB()

// LIMPIAR USUARIO
export const clearUser = async () => iLocalDB.users.clear()

// AGREGAR USUARIO A LOCAL
export const setUser = async (user: userModel | firestore.DocumentData | undefined) =>
	iLocalDB.users.put({ id: 1, user })

// AGREGAR PRODUCTOS AL LOCAL
export const setProducts = async (products: product[] | firestore.DocumentData | undefined) =>
	iLocalDB.productList.put({ id: 1, products })
