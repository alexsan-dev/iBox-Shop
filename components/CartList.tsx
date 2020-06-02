// HOOKS
import { useContext } from 'react'

// COMPONENTES
import CartProductCard from './CartProductCard'
import CardShadow from './ProductCardPlaceholder'

// CONTEXTO
import { appContext } from 'Ctx'

// HERRAMIENTAS
import { useCartSearch } from 'Tools'

// PROPIEDADES Y GLOBALES
interface OptProps {
	filterList?: OrderCart
}

// COMPONENTE
const CartList: React.FC<OptProps> = (optProps: OptProps) => {
	// OBTENER LISTA DEL CONTEXTO
	const { productList, cartList } = useContext(appContext)

	// CREAR LISTAS
	let filterList: OrderCart
	let cardList: JSX.Element[] = [<CardShadow key={0} />]

	// CREAR LISTA DE CARDS
	filterList = optProps.filterList || useCartSearch(cartList, productList)

	if (filterList.productsFilter)
		cardList = filterList.productsFilter.map((product: IProduct, i: number) => (
			<CartProductCard
				key={i}
				title={product.name}
				text={product.description}
				code={product.key?.trim()}
				img={product.img}
				pid={product.key}
				price={product.price * filterList.multArry[i]}
				cant={filterList.multArry[i]}
			/>
		))

	return <>{cardList}</>
}

export default CartList
