// TIPOS DE DATOS, HOOKS Y COMPONENTES
import { useState, Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useGetAllProducts } from "../utils/hooks";
import { firestore } from "firebase";
import Card from "./ProductCard";
import appContext from "../utils/appContext";
import CardShadow from "./ProductCardPlaceholder";

// VARIABLES GLOBALES
interface Props {
  recents?: boolean;
  max?: number;
}

const ProductList: React.FC<Props> = (props: Props) => {
  // LISTA DE PRODUCTOS FINAL
  let productsArray: JSX.Element[] = [];
  // PLACEHOLDERS DEL CONTEXTO
  const str = useContext(appContext.appContext).lang.placeholders;

  // COMPONENTE DE CARGANDO
  const [products, setProducts]: [JSX.Element[], Dispatch<SetStateAction<JSX.Element[]>>] = useState([<CardShadow key={0} {...str} />]);

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
            />
          ));
      })
  }, [])

  productsArray = products.map((e: JSX.Element) => e);

  // MOSTRAR SOLO LOS PRIMEROS 5
  if (props.recents) productsArray.length = 5;
  else if (props.max) productsArray.length = props.max;

  return <>{productsArray}</>;
}

export default ProductList;