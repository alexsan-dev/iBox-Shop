// HOOKS
import { useContext } from "react";
import { useCartSearch } from "../utils/hooks";

// TIPOS DE DATOS
import { firestore } from "firebase";

// COMPONENTES
import CartProductCard from "./CartProductCard";
import CardShadow from "./ProductCardPlaceholder";
import appContext from "../utils/appContext";

// PROPIEDADES Y GLOBALES
interface OptProps { filterList?: OrderCart }

// COMPONENTE
const CartList: React.FC<OptProps> = (optProps: OptProps) => {
  // OBTENER LISTA DEL CONTEXTO
  const { productList, cartList } = useContext(appContext.appContext);
  let filterList: OrderCart;
  let cardList: JSX.Element[] = [<CardShadow key={0} />];

  // CREAR LISTA DE CARDS
  filterList = optProps.filterList || useCartSearch(cartList, productList);

  if (filterList.productsFilter.length > 0) cardList =
    filterList.productsFilter.map((product: product | firestore.DocumentData, i: number) =>
      <CartProductCard
        key={i}
        title={product.name}
        text={product.description}
        code={product.key?.trim()}
        img={product.img}
        price={product.price * filterList.multArry[i]}
        cant={filterList.multArry[i]}
      />
    )

  return <>{cardList}</>
}

export default CartList;