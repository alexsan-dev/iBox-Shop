// HOOKS
import { useContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { getCartProducts } from "../utils/hooks";

// TIPOS DE DATOS
import { firestore } from "firebase";

// COMPONENTES
import CartProductCard from "./CartProductCard";
import appContext from "../utils/appContext";
import CardShadow from "./ProductCardPlaceholder";

// PROPIEDADES Y GLOBALES
interface OrderCart { sum: number; productsFilter: Array<product | firestore.DocumentData>; multArry: number[] }
interface Props { cartList: string[]; updateTotal: Function; }

// VARIABLES GLOBALES
let firstRender: number = 0;

// COMPONENTE
const CartList: React.FC<Props> = (props: Props) => {
  // OBTENER LISTA DEL CONTEXTO
  const { lang } = useContext(appContext.appContext);

  // PLACEHOLDERS DEL CONTEXTO Y COMPONENTE DE CARGA
  const shadow: JSX.Element = <CardShadow key={0} {...lang.placeholders} />
  const [state, setState]: [JSX.Element[], Dispatch<SetStateAction<JSX.Element[]>>] = useState([shadow])

  // CREAR LISTA DE CARDS
  const setList = (data: OrderCart) => {
    if (data.productsFilter.length > 0) setState(
      data.productsFilter.map((product: product | firestore.DocumentData, i: number) =>
        <CartProductCard
          key={i}
          title={product.name}
          text={product.description}
          code={product.key?.trim()}
          img={product.img}
          price={product.price * data.multArry[i]}
          cant={data.multArry[i]}
          onUpdate={readProducts}
        />
      )
    )
  }

  // LEER PRODUCTOS
  const readProducts = () => {
    getCartProducts(props.cartList, (data: OrderCart) => {
      setList(data)
      props.updateTotal(data.sum);
    })
      .then((data: OrderCart) => {
        setList(data)
        props.updateTotal(data.sum);
      });
  }

  useEffect(() => {
    readProducts();
  }, [])

  // RENDERIZAR NUEVAMENTE LA PRIMERA VEZ
  if (props.cartList.length > 0 && firstRender === 0) {
    readProducts();
    firstRender++;
  }

  return <>{state}</>
}

export default CartList;