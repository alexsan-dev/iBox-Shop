// AGREGAR AL CARRITO CONTEXTO
export const handleCart = async (
	cartList: string[],
	callBack: ((length: number) => any) | null,
	key: string,
	mode: boolean,
	reset?: boolean
) => {
	// LISTA DE SALIDA
	let tmpCartList: string[] = cartList

	// VERIFICAR EL MODO ELIMINAR/AGREGAR
	if (mode) tmpCartList.push(key)
	else {
		// BUSCAR LLAVE
		const rIndex = tmpCartList.indexOf(key)
		if (rIndex > -1) tmpCartList.splice(rIndex, 1)
	}

	// GUARDAR LLAVE
	window.localStorage.setItem('cart', tmpCartList.join())

	// ACTUALIZAR TOPBAR
	if (callBack) callBack(tmpCartList.length)

	/// REINICIAR CARRITO
	if (reset) {
		// GUARDAR ESTADO
		tmpCartList = []
		window.localStorage.setItem('cart', '')

		// ACTUALIZAR TOPBAR
		if (callBack) callBack(0)
	}

	return tmpCartList
}
