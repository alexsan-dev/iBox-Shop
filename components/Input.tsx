// HOOKS PARA REFERENCIA
import { useRef, FC, RefObject } from "react";

// VARIABLES GLOBALES
let visible: boolean = true;

const Input: FC<InputProps> = (props: InputProps) => {
  // REFERENCIA AL INPUT ACTUAL
  const inp: RefObject<HTMLInputElement> = useRef(null);

  // AGREGAR COLOR A LABEL, HR, I CERCANOS AL INPUT
  const fx = () => {
    const label: HTMLElement = inp.current?.nextSibling as HTMLElement;
    const hr: HTMLElement = label?.nextSibling as HTMLElement;
    const i: HTMLElement = hr?.nextSibling as HTMLElement;

    if (label && inp.current?.value.length === 0 && hr && i) {
      label.classList.toggle("alabel");
      label.classList.toggle("dlabel");
      hr.classList.toggle("hractive");
      hr.classList.toggle("hrunactive");
      i.classList.toggle("iactive");
      i.classList.toggle("iunactive");
    }
  };

  // BOTON DE MOSTAR Y OCULTAR PARA INPUT DE CLAVE
  const visibled = (e: any) => {
    if (visible) {
      e.target?.classList.replace("uil-eye-slash", "uil-eye");
      inp.current?.setAttribute("type", "text");
      visible = !visible;
    } else {
      e.target?.classList.replace("uil-eye", "uil-eye-slash");
      inp.current?.setAttribute("type", "password");
      visible = !visible;
    }
  };

  // ENVIAR LOS DATOS DEL INPUT A LA VALUE()
  const getText = () =>
    props.value({
      name: props.name,
      text: inp.current?.value
    });

  return (
    <>
      <div className="in">
        <input
          ref={inp}
          type={props.type}
          id={props.name}
          name={props.name}
          onFocus={fx}
          onBlur={fx}
          onChange={getText}
        />
        <label htmlFor={props.name} className="dlabel">
          {props.label}
        </label>
        <hr className="hrunactive" />
        <i className={`iunactive uil uil-${props.icon}`}></i>
        {props.type === "password" ? (
          <span onClick={visibled} className="uil uil-eye-slash"></span>
        ) : ("")}
      </div>
      <span>{props.helper}</span>

      <style jsx>{`
          .in {
            position: relative;
            width: auto;
            height: auto;
            margin-top: 20px;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
          }

          .in i {
            transition: color 0.2s ease-in-out;
            position: absolute;
            left: 0;
            margin-top: -1px;
          }

          .in + span {
            margin-bottom: 30px;
            font-size: 13px;
            color: var(--parraf);
          }

          .in > label {
            position: absolute;
            transition: all 0.2s ease-in-out;
            font-weight: 500;
          }

          .in > span {
            position: absolute;
            right: 20px;
            color: var(--parraf);
          }

          .dlabel {
            color: var(--parraf);
            transform: translate(0, 0);
            font-size: 15px;
            left: 35px;
          }

          .in > input {
            font-size: 15px;
            color: var(--parraf);
            border-bottom: 1.5px solid var(--unactive);
            padding: 15px 0 15px 35px;
            width: 100%;
            font-weight: 500;
            position: relative;
          }

          .in > input:-webkit-autofill + label {
            transform: translate(0, -200%);
            font-size: 13px;
            left: 0;
            color: var(--blue);
          }

          .in > input:-webkit-autofill ~ hr {
            transform: scaleX(1);
          }

          .in > input:-webkit-autofill ~ i {
            color: var(--blue);
          }

          .iactive {
            color: var(--blue);
          }

          .iunactive {
            color: var(--parraf);
          }

          .in > hr {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1.5px;
            background: var(--blue);
            transition: transform 0.4s ease-in-out;
            margin: 0;
            z-index: 2;
          }

          .hrunactive {
            transform: scaleX(0);
          }

          .hractive {
            transform: scaleX(1);
          }

          .alabel {
            transform: translate(0, -200%);
            font-size: 13px;
            left: 0;
            color: var(--blue);
          }
      `}</style>
    </>
  );
};

export default Input;