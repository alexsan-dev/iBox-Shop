// TIPOS DE DATOS, HOOKS
import { useState, Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useGetAllProducts } from "../utils/hooks";
import { firestore } from "firebase";

// CARGAR IMAGANES DINAMICAMENTE
import { trackWindowScroll, ScrollPosition } from "react-lazy-load-image-component";

// COMPONENTES
import Card from "./ProductCard";
import appContext from "../utils/appContext";
import CardShadow from "./ProductCardPlaceholder";

// VARIABLES GLOBALES
interface Props {
  recents?: boolean;
  max?: number;
  scrollPosition: ScrollPosition;
}

const ProductList: React.FC<Props> = (props: Props) => {
  // PLACEHOLDERS DEL CONTEXTO Y COMPONENTE DE CARGA
  const str = useContext(appContext.appContext).lang.placeholders;
  const shadow: JSX.Element = <CardShadow key={0} {...str} />

  // COMPONENTE DE CARGANDO
  const [products, setProducts]: [JSX.Element[], Dispatch<SetStateAction<JSX.Element[]>>] = useState([shadow]);

  // OBTENER TODOS LOS PRODUCTOS
  useEffect(() => {
    useGetAllProducts()
      .then((productList: Array<product | firestore.DocumentData>) => {
        if (productList.length > 0) setProducts(
          productList.map((data: product | firestore.DocumentData, i: number) =>
            <Card key={i}
              title={data.name}
              text={data.description}
              code={data.key}
              img={data.img}
              price={data.price}
              scrollPosition={props.scrollPosition}
            />
          ));
      })
  }, [])

  // MOSTRAR SOLO LOS PRIMEROS 5
  if (props.recents) products.length = 5;

  // MOSTRAR SOLO UN LIMITE DE RESULTADOS
  else if (props.max) products.length = props.max;

  return <>{products}</>;
}

export default trackWindowScroll(ProductList);