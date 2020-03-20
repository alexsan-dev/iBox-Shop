// TIPOS DE DATOS Y CONTEXTO
import { FC, useContext } from "react";
import appContext from "../utils/appContext";

// PROPIEDADES
interface Props extends CardProps { cant: number; onUpdate?: Function }

// COMPONENTE
const CartProductCard: FC<Props> = (props: Props) => {
  // OBTENER LENGUAJE Y EVENTO DE AGREGAR AL CARRITO
  const { addToCartEvent, lang } = useContext(appContext.appContext);
  const addToCartCall = () => {
    addToCartEvent(props.code, true);
    if (props.onUpdate) props.onUpdate();
  }
  const removeToCartCall = () => {
    addToCartEvent(props.code, false);
    if (props.onUpdate) props.onUpdate();
  }

  return (
    <div id="cartCard">
      <div id="cartCardHead">
        <img src={props.img} alt={props.title} />
      </div>
      <div id="cartCardBody">
        <h3>{props.title}</h3>

      </div>
      <div id="cartCardPrice">
        <div>
          <span>{props.cant}</span>
          <button className="waves waves-dark" onClick={removeToCartCall}>-</button>
          <button className="waves waves-dark" onClick={addToCartCall}>+</button>
        </div>
        <strong>
          <i>{lang.cartPage.cards.total}: </i>
          <span>Q</span>{props.price - 1}<span id="round">99</span>
        </strong>
      </div>

      <style jsx>{`
        #cartCard{
          position:relative;
          width:100%;
          display:grid;
          grid-template-columns:100px 1fr;
          grid-template-rows:1fr;
          column-gap:25px;
          row-gap:10px;
          align-items:center;
          margin-bottom:10px;
        }
        #cartCardHead{
          position:relative;
          width:100px;
          height:100px;
          border-radius:10px;
          overflow:hidden;
          background:rgba(0,0,0,0.1);
        }
        h3{
          font-size:1.05em;
          opacity:0.8;
        }
        img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        #cartCardPrice{
          display:flex;
          width:100%;
          justify-content:space-between;
          grid-column:1/3;
          align-items:center;
        }
        #cartCardPrice strong{
          color:var(--primary);
          font-size:1.2em;
        }
        #cartCardPrice i{
          font-style:normal;
          color:var(--gray);
          font-size:0.9em
        }
        #cartCardPrice strong span:nth-child(1){
          font-size:0.9em;
        }
        #cartCardPrice strong span:nth-child(3){
          font-size:0.8em;
          position:relative;
          top:-8px;
        }
        #cartCardPrice div{
          background:var(--secondary);
          color:var(--backgrounds);
          border-radius:10px;
          overflow:hidden;
          display:flex;
          align-items:center;
        }
        #cartCardPrice div span{
          font-weight:bold;
          margin:0 20px;
        }
        button{
          padding:0;
          margin:0;
          display:inline-flex;
          justify-content:center;
          padding:8px 10px 10px 10px;
          color:var(--background);
          font-size:1.3em;
          border-radius:0;
          width:40px;
          height:40px;
          position:relative;
          z-index:3;
          background:rgba(0,0,0,.05);
        }
        button:nth-child(2){
          padding:6px 10px 10px 10px;
        }
      `}</style>
    </div>
  )
}

export default CartProductCard;