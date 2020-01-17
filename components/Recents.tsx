// HOOKS Y TIPOS DE DATOS
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useGetAllProducts } from "../utils/hooks";

// COMPONENTES Y NAVEGACION
import CardShadow from './ProductCardPlaceholder';
import Link from "next/link";
import { firestore } from "firebase";
import Card from "./ProductCard";


// PROPIEDADES E INTERFACES
interface Props {
  title: string;
  text: string;
  productShadowText_1: string;
  productShadowText_2: string;
  button: string;
}

interface recentsState { products: JSX.Element[]; }

const Recents: React.FC<Props> = (props: Props) => {
  const defaultSate: recentsState = { products: [<CardShadow key={0} text_1={props.productShadowText_1} text_2={props.productShadowText_2} />] }
  const [products, setProducts]: [recentsState, Dispatch<SetStateAction<recentsState>>] = useState(defaultSate);

  // OBTENER PRODUCTOS DE FIRESTORE O LOCAL
  useEffect(() => {
    useGetAllProducts().then((productsL: Array<product | firestore.DocumentData>) => {
      const products: JSX.Element[] = productsL.map((data: product | firestore.DocumentData, i: number) => <Card key={i} title={data.name} text={data.description} code={data.key} img={data.img} price={data.price} />)
      setProducts({ products });
    }).catch((e: Error) => console.log(e))
  }, [])

  return (
    <div id="middle">
      <div id="recents">
        <svg id="recentsD" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--gray-light)"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,112C384,128,480,192,576,202.7C672,213,768,171,864,133.3C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div>
          <h2>
            {props.title}
            <i className="uil uil-clock"></i>
          </h2>
          <p>{props.text}</p>

          {products.products[0]}

        </div>
      </div>

      <Link href="/tienda" passHref scroll={false}>
        <a className="waves waves-dark seeMore right" title="Ver más">
          {props.button} <i className="uil uil-arrow-right"></i>
        </a>
      </Link>
      <img src={require("../assets/middle.png")} alt="Store" />

      <style jsx>{`
        #middle {
          position: relative;
        }
        #recents {
          position: relative;
          width: 100%;
          margin-top: -115px;
        }
        #recentsD {
          margin-bottom: -5px;
          width: 115%;
        }
        .seeMore {
          bottom: 45px;
          z-index: 10;
        }
        #recents > div {
          background: var(--gray-light);
          padding: 20px;
          padding-bottom: 125px;
        }
        h2 {
          margin-top: -50px;
        }
        p {
          width: calc(100% - 165px);
          max-width:225px;
          margin-bottom: 25px;
          font-size:0.8em;
        }
        img {
          position: absolute;
          top: -40px;
          right: -5%;
          z-index: 2;
        }
        @media screen and (min-width:445px){
          img{
            right:-5%;
            width:230px;
          }
        }
      `}</style>
    </div>
  );
};

export default Recents;