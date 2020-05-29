// TIPOS DE DATOS, HOOKS
import { useContext } from 'react'
import { firestore } from 'firebase'

// COMPONENTES
import Card from './ProductCard'
import CardShadow from './ProductCardPlaceholder'
import { appContext } from 'Ctx'

// VARIABLES GLOBALES
interface Props {
	recent?: boolean
	max?: number
}

const ProductList: React.FC<Props> = (props: Props) => {
	// COMPONENTE DE CARGA
	let products: JSX.Element[] = [<CardShadow key={0} />]
	const { productList } = useContext(appContext)

	// ACTUALIZAR EL ESTADO
	if (productList.length > 0)
		products = productList
			.reverse()
			.map((data: product | firestore.DocumentData, i: number) => (
				<Card
					key={i}
					title={data.name}
					text={data.description}
					code={data.key.trim()}
					img={data.img}
					price={data.price}
					pid={data.key}
				/>
			))

	// MOSTRAR SOLO LOS PRIMEROS 5
	if (props.recent) products.length = 5
	// MOSTRAR SOLO UN LIMITE DE RESULTADOS
	else if (props.max) products.length = props.max

	return <>{products}</>
}

export default ProductList
