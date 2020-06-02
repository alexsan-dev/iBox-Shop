import { useContext } from 'react'
import { appContext } from 'Ctx'

// COMPONENTES
import ProductListElement from './ProductListElement'

// PROTOTIPO
String.prototype.format = function () {
	return this.trim()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
}

// PROPIEDADES
interface SearchProps {
	text: string
	onPush: () => any
}

const SearchResults: React.FC<SearchProps> = (props: SearchProps) => {
	// CONTEXTO
	const { productList } = useContext(appContext)

	// VALORES POR DEFECTO
	const searchList: JSX.Element[] = [<div key={Math.random() * 100} />]
	const text: string = props.text.format()

	// FILTRAR BÚSQUEDA
	if (text.length > 0 && productList)
		productList.forEach((product: IProduct, i: number) => {
			const words: string[] = text.split(' ')
			for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
				// FORMATEAR ENTRADA Y BUSCAR
				if (
					product.name.format().indexOf(words[wordsIndex]) !== -1 ||
					product.description.format().indexOf(words[wordsIndex]) !== -1 ||
					product.color.format().indexOf(words[wordsIndex]) !== -1 ||
					product.price.toString().format().indexOf(text) !== -1 ||
					product.tag.join().format().indexOf(words[wordsIndex]) !== -1 ||
					(product.img.format().indexOf(words[wordsIndex]) !== -1 &&
						product.brand.format().indexOf(words[wordsIndex]) !== -1 &&
						product.specs.format().indexOf(words[wordsIndex]) !== -1)
				) {
					// AGREGAR PRODUCTO A LA LISTA
					searchList.push(
						<ProductListElement
							onPush={props.onPush}
							key={i}
							text={product.name}
							search={text}
							id={product.key}
							index={i}
						/>
					)
					break
				}
			}
		})

	// RETORNAR LISTA
	return <ul>{searchList}</ul>
}

export default SearchResults
