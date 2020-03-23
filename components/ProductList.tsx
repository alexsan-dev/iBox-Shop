// TIPOS DE DATOS, HOOKS
import { useState, Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useGetAllProducts } from "../utils/hooks";
import { firestore } from "firebase";

// CARGAR IMÁGENES
import { trackWindowScroll, ScrollPosition } from "react-lazy-load-image-component";

// COMPONENTES
import Card from "./ProductCard";
import appContext from "../utils/appContext";
import CardShadow from "./ProductCardPlaceholder";

// VARIABLES GLOBALES
interface Props {
  recent?: boolean;
  max?: number;
  scrollPosition: ScrollPosition;
}

const ProductList: React.FC<Props> = (props: Props) => {
  // PLACEHOLDERS DEL CONTEXTO Y COMPONENTE DE CARGA
  const str = useContext(appContext.appContext).lang.placeholders;
  const shadow: JSX.Element = <CardShadow key={0} {...str} />

  // COMPONENTE DE CARGANDO
  const [products, setProducts]: [JSX.Element[], Dispatch<SetStateAction<JSX.Element[]>>] = useState([shadow]);

  // ACTUALIZAR EL ESTADO
  const setProductsList = (productList: Array<product | firestore.DocumentData>) => {
    if (productList.length > 0) setProducts(
      productList.reverse().map((data: product | firestore.DocumentData, i: number) =>
        <Card key={i}
          title={data.name}
          text={data.description}
          code={data.key.trim()}
          img={data.img}
          price={data.price}
          scrollPosition={props.scrollPosition}
        />
      ));
  }

  // OBTENER TODOS LOS PRODUCTOS
  useEffect(() => {
    useGetAllProducts((productList: product[]) => {
      setProductsList(productList);
    })
      .then((productList: Array<product | firestore.DocumentData>) => {
        setProductsList(productList);
      })
  }, [])

  // MOSTRAR SOLO LOS PRIMEROS 5
  if (props.recent) products.length = 5;

  // MOSTRAR SOLO UN LIMITE DE RESULTADOS
  else if (props.max) products.length = props.max;

  return <>{products}</>;
}

export default trackWindowScroll(ProductList);