// TIPOS DE DATOS Y CONTEXTO
import { FC, useContext, useRef, RefObject } from "react";
import appContext from "../utils/appContext";

// CARGAR IMAGEN
import { LazyLoadImage } from 'react-lazy-load-image-component';

// PROPIEDADES
interface Props extends CardProps { cant: number; onUpdate?: Function }

// COMPONENTE
const CartProductCard: FC<Props> = (props: Props) => {
  // OBTENER LENGUAJE Y EVENTO DE AGREGAR AL CARRITO
  const { addToCartEvent, lang } = useContext(appContext.appContext);
  const img: RefObject<HTMLDivElement> = useRef(null);

  // ANIMAR IMAGEN
  const animImg = () => {
    // ANIMAR IMAGEN
    img.current?.classList.add("animImg");
    setTimeout(() => img.current?.classList.remove("animImg"), 300);
  }

  // AGREGAR AL CARRITO
  const addToCartCall = () => {
    addToCartEvent(props.code, true);

    // ACTUALIZAR Y ANIMAR
    if (props.onUpdate) props.onUpdate();
    animImg();
  }

  // ELIMINAR DEL CARRITO
  const removeToCartCall = () => {
    addToCartEvent(props.code, false);

    // ACTUALIZAR Y ANIMAR
    if (props.onUpdate) props.onUpdate();
    animImg();
  }

  return (
    <div id="cartCard">
      <div id="cartCardHead" ref={img}>
        <LazyLoadImage
          scrollPosition={props.scrollPosition}
          effect="black-and-white"
          src={props.img}
          alt={props.title}
          width="100%"
        />
      </div>
      <div id="cartCardBody">
        <h3>{props.title}</h3>

      </div>
      <div id="cartCardPrice">
        <div className="amber">
          <span>{props.cant}</span>
          <button className="waves waves-dark" onClick={removeToCartCall}>-</button>
          <button className="waves waves-dark" onClick={addToCartCall}>+</button>
        </div>
        <strong>
          <i>{lang.cartPage.cards.total}: </i>
          <span>Q</span>{Math.floor(props.price)}<span id="round">{Math.round((props.price - Math.floor(props.price)) * 100)}</span>
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
          color:var(--backgrounds);
          border-radius:10px;
          overflow:hidden;
          display:flex;
          align-items:center;
          position:relative;
          z-index:2;
        }
        #cartCardPrice div span{
          font-weight:bold;
          margin:0 20px;
        }
        @keyframes animImg{
            0%{transform : rotate(${Math.random() * 15}deg);}
            25%{ transform:rotate(-${Math.random() * 15}deg); }
            50%{ transform:rotate(${Math.random() * 15}deg); }
            100%{ transform:rotate(0deg); }
        }
        .animImg{
           animation:animImg 0.3s ease-in-out 1;
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