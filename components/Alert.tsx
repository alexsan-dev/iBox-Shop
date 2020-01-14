// HOOKS Y CONTEXTO
import { useRef, FC, RefObject, useContext } from "react";
import { useRipples } from "../utils/hooks";
import appContext from "../utils/appContext";

// COMPONENTES
import Input from "./Input";

// VARIABLES GLOBALES
let input: string = "";

const Alert: FC<AlertProps> = (props: AlertProps) => {
  // CONTEXTO Y REFERENCIA PRINCIPAL
  const type: string = props.type;
  const current: RefObject<HTMLDivElement> = useRef(null);
  const str = useContext(appContext.appContext).lang.alert;

  // AGREGAR EFECTO DE RIPPLE
  useRipples();

  // ALMACENAR LOS DATOS DEL INPUT EN EL TIPO "CONFIRM"
  const value = (data: string) => (input = data);

  // ANIMAR PRIMERO EL EFFECTO RIPPLE LUEGO LA OPACIDAD Y POR ULTIMO LLAMAR A ONCONFIRM()
  const onConfirm = () => {
    setTimeout(() => {
      if (current.current) current.current.style.opacity = "0";
      setTimeout(() => {
        if (props.hideAlert) props.hideAlert();
        if (props.onConfirm) props.onConfirm(input || null);
      }, 400);
    }, 300)
  };

  // ANIMAR OPACIDAD PRIMERO Y LUEGO LLAMAR A HIDEALERT()
  const hideAlert = () => {
    if (current.current) current.current.style.opacity = "0";
    setTimeout(() => {
      if (props.hideAlert) props.hideAlert();
    }, 400);
  };

  return (
    <div className="alertContainer" ref={current}>
      <div className="alertShadow" onClick={hideAlert}></div>

      <div id="alertContent">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        {props.input && type === "input" ? (
          <Input
            value={value}
            type={props.input.type}
            label={props.input.label}
            name={props.input.name}
            helper={props.input.helper}
            icon={props.input.icon}
          />
        ) : ("")}
        <ul>
          {type === "confirm" ? (
            <li>
              <button onClick={hideAlert} className="cancelBtn waves waves-dark">{str.cancel}</button>
            </li>
          ) : ("")}
          <li>
            <button className="primary waves" onClick={onConfirm}>
              {str.confirm}
            </button>
          </li>
        </ul>
      </div>

      <style jsx>{`
        @keyframes show {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .alertContainer {
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          animation: show 0.4s ease-in-out 1;
          transition: opacity 0.4s ease-in-out;
        }
        .alertContainer > .alertShadow {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }
        .alertContainer #alertContent {
          position: absolute;
          top: 50%;
          left: 50%;
          padding: 20px;
          width: calc(100% - 40px);
          max-width: 400px;
          transform: translate(-50%, -50%);
          background:var(--backgrounds);
          z-index: 2;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        ul {
          display: flex;
          justify-content: flex-end;
          position:relative;
          z-index:3;
        }
        ul li .cancelBtn{
          color:var(--text);
        }
        ul li button {
          color: var(--backgrounds);
          overflow: hidden;
        }
        h1 {
          color: var(--text);
        }
        p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Alert;