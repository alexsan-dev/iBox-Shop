// TIPOS DE DATOS Y CONTEXTO
import { FC, useContext } from "react";
import appContext from "../utils/appContext";

// CARGAR IMAGEN DINAMICAMENTE
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card: FC<CardProps> = (props: CardProps) => {
  // OBTENER LENGUAJE Y EVENTO DE AGREGAR AL CARRITO
  const { lang, addToCartEvent } = useContext(appContext.appContext);
  const addToCartCall = () => addToCartEvent(props.code, true);

  return (
    <div className="card">
      <div className="card-head">
        <LazyLoadImage
          scrollPosition={props.scrollPosition}
          effect="blur"
          src={props.img}
          alt={props.title}
          width="100%"
          style={{ marginTop: "-25%", position: "relative" }}
        />
        <div className="waves waves-dark headShadow"></div>
      </div>

      <div className="card-body">
        <div className="card-content">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <div id="cartInfo">
            <button className="card-price"><span>Q</span>{props.price - 1}<span id="round">99</span></button>
            <button className="amber waves addToCart" onClick={addToCartCall}>
              <i className="material-icons">add_shopping_cart</i>{lang.general.buttons.addToCart}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          position: relative;
          width: 100%;
          margin-bottom: 20px;
          border-radius: 15px;
          overflow: hidden;
          z-index: 1;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        }
        .card .card-head {
          width: 100%;
          height: 150px;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease-in-out;
          transform-origin: right bottom;
        }
        .card .card-head .headShadow{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background: rgba(0, 0, 0, 0.1);
        }
        .card .card-body #cartInfo {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 15px;
        }
        .card .card-body #cartInfo .addToCart {
          color: var(--backgrounds);
        }
        .card .card-body #cartInfo .addToCart i{
          margin-left:-5px;
        }
        .card .card-body #cartInfo .card-price {
          color: var(--primary);
          z-index: 2;
          font-weight: 550;
          padding: 0;
          font-size: 2em;
          position:relative;
        }
        .card .card-body {
          position: relative;
          width: 100%;
          padding: 30px;
          color: var(--text);
          display: flex;
          align-items: center;
          background: var(--backgrounds);
          z-index: 2;
        }
        .card .card-body .card-content > p {
          font-size: 0.9em;
          width: 100%;
        }
        span{
          font-size:0.8em;
          display:block;
          position:relative;
          top:2px;
        }
        #round{
          font-size:0.6em;
          position:absolute;
          top:5px;
          right:-23px;
        }
      `}</style>
    </div>
  );
};

export default Card;