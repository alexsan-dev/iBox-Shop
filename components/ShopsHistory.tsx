// TIPOS Y HOOKS
import { firestore } from "firebase";
import { useCartSearch } from "../utils/hooks";
import { useContext } from "react";

// CONTEXTO
import appContext from "../utils/appContext";
import Link from "next/link";
import HistoryElement from "./HistoryElement";

// PROPIEDADES
interface props { user: userModel | null | firestore.DocumentData; strings: langPackage.profilePage["history"] };

const ShopsHistory: React.FC<props> = (props: props) => {
  // CONTEXTO
  const { productList } = useContext(appContext.appContext);

  // LISTA DE PRODUCTOS
  let elementList: JSX.Element[] = [];

  // OBTENER DATOS DE COMPRA
  if (props.user?.history) {
    const history = props.user.history;
    history.forEach((currentHistory: { cartList: string[], date: string }, i: number) => {
      // LISTA DE COMPRAS
      const cartList: string[] = currentHistory.cartList;

      // BUSCAR PRODUCTOS
      const userShops: OrderCart = useCartSearch(cartList, productList);

      // RECORRER LISTA
      userShops.productsFilter.forEach((product: product | firestore.DocumentData) => elementList.push(
        <HistoryElement key={i} name={product.name} cant={userShops.multArry[i]} date={currentHistory.date} />
      ))
    });
  }

  // RETORNAR LISTA
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--secondary)"
          fillOpacity="1"
          d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,112C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
      <div id="profileHistory">
        <h2>{props.strings.title}</h2>
        {props.user?.history ? <>
          <p>{props.strings.text}</p>
          <ul>{elementList}</ul></> :
          <p>{props.strings.empty} <Link href="/tienda" passHref><a title={props.strings.button} className="white waves waves-dark btn"><i className="material-icons">store</i> {props.strings.button}</a></Link></p>
        }
      </div>
      <style jsx>{`
        svg{
          position:relative;
          margin-top:-30px;	
        }
        #profileHistory{
          padding:20px;
          margin-top:-30px;
          padding-bottom:110px;
          background:var(--secondary);
        }
        .btn{
          position:relative;
          padding-left:18px;
          margin-top:15px;
          float:right;
          z-index:3;
          color:var(--secondary);
        }
        h2{
          color:var(--backgrounds);
        }
        p{
          color:var(--backgrounds);
          margin-bottom:20px;
        }
      `}</style>
    </>
  )
}

export default ShopsHistory;