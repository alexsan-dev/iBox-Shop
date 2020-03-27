import { useContext } from "react";
import appContext from "../utils/appContext";

// COMPONENTES
import ProductListElement from './ProductListElement';

// PROTOTIPO
String.prototype.format = function () { return this.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

// PROPIEDADES
interface SearchProps { text: string; }

const SearchResults: React.FC<SearchProps> = (props: SearchProps) => {
  // CONTEXTO
  const { productList } = useContext(appContext.appContext);

  // VALORES POR DEFECTO
  let searchList: JSX.Element[] = [<div key={Math.random() * 100}></div>];
  const text: string = props.text.format();

  // FILTRAR BÚSQUEDA
  if (text.length > 0) productList.forEach((product: product, i: number) => {
    const words: string[] = text.split(" ");
    for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
      // FORMATEAR ENTRADA Y BUSCAR
      if (product.name.format().indexOf(words[wordsIndex]) !== -1 ||
        product.description.format().indexOf(words[wordsIndex]) !== -1 ||
        product.color.format().indexOf(words[wordsIndex]) !== -1 ||
        product.price.toString().format().indexOf(text) !== -1 ||
        product.tag.format().indexOf(words[wordsIndex]) !== -1 ||
        product.img.format().indexOf(words[wordsIndex]) !== -1
      ) {
        // AGREGAR PRODUCTO A LA LISTA
        searchList.push(
          <ProductListElement key={i} text={product.name} search={text} id={product.key} index={i} />
        )
        break;
      }
    }
  })

  // RETORNAR LISTA
  return (<ul>{searchList}</ul>)
}

export default SearchResults;