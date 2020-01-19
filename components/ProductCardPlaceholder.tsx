// TIPOS DE DATOS Y HOOKS
import { useState, FC, Dispatch, SetStateAction } from "react";
import { useInterval } from "../utils/hooks";

// VARIABLES INICIALES DE ANIMACION
interface Bars { r1: number; r2: number; r3: number; }
const defaultBars: Bars = { r1: 0, r2: 0, r3: 0 };

// PROPIEDADES
interface Props { productShadowText_1: string; productShadowText_2: string; }

// VARIABLES GLOBALES
const time: number = 600;

const CardShadow: FC<Props> = (props: Props) => {
  // ESTADO INICIAL DEL COMPONENTE
  let [bars, setBars]: [Bars, Dispatch<SetStateAction<Bars>>] = useState(defaultBars);

  // OBTENER NUMEROS ALEATORIOS CADA *TIME* 
  useInterval(() =>
    setBars({
      r1: Math.random() * 100,
      r2: Math.random() * 100,
      r3: Math.random() * 100
    }), time);

  return (
    <div className="card">
      <div className="card-head waves">
        <span className="uil uil-image"></span>
        <p>
          {props.productShadowText_1}
          <br />
          {props.productShadowText_2}
        </p>
      </div>

      <div className="card-body">
        <div className="card-content">
          <span></span>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes op {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .card {
          margin-top: -20px;
          position: relative;
          width: 100%;
          margin-bottom: 20px;
          border-radius: 15px;
          overflow: hidden;
          z-index: 1;
          transition: opacity ${time / 1000}s ease-in-out;
        }
        .card .card-head {
          width: 100%;
          position: relative;
          padding-left: 10px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .card .card-head span {
          font-size: 5em;
          color: var(--unactive);
        }
        .card .card-head p {
          color: var(--unactive);
          font-weight: 500;
          font-size: 1.2em;
          text-transform: uppercase;
          margin-left: 0px;
        }
        .card .card-head::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .card .card-body {
          position: relative;
          width: 100%;
          padding: 0 30px;
          color: var(--text);
          z-index: 2;
        }
        .card .card-body span {
          display: block;
          position: relative;
          width: 100%;
          height: 20px;
          border-radius: 50px;
          background: var(--unactive);
          transition: width ${time / 1000}s ease-in-out;
        }
        .card .card-body > div > div {
          margin-top: 10px;
        }
        .card .card-body > div > div > span {
          opacity: 0.8;
          margin-bottom: 5px;
          height: 10px;
        }
        .card .card-body > div > div > span:nth-child(1) {
          width: ${bars.r1}%;
        }
        .card .card-body > div > div > span:nth-child(2) {
          width: ${bars.r2}%;
        }
        .card .card-body > div > div > span:nth-child(3) {
          width: ${bars.r3}%;
        }
      `}</style>
    </div>
  );
};

export default CardShadow;