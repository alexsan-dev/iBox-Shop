// TIPOS DE DATOS Y HOOKS
import { setProviders, useLogin, useAuthError, useResetPass, showAlert } from "../utils/hooks";
import { useState, Dispatch, SetStateAction, MouseEvent } from "react";
import { useRouter, NextRouter } from "next/router";

// COMPONENTES Y ALERTAS
import Input from "./Input";
import { FirebaseError } from "firebase";

// VARIABLES GLOBALES
let email: string = "";
let pass: string = "";
let name: string = "";

// PROPIEDADES
interface FormProps {
  errorLangPackage: langPackage.errors;
  strings: langPackage.accountPage;
}

// ESTADOS INICIALES
interface accountState { switchC: boolean; }
const defaultState: accountState = { switchC: false };

const Forms: React.FC<FormProps> = (props: FormProps) => {
  // ESTADOS DEL COMPONENTE
  let [account, setAccount]: [accountState, Dispatch<SetStateAction<accountState>>] = useState(defaultState);
  let regText = account.switchC ? props.strings.buttons.login : props.strings.buttons.createAccount;

  // INPUT DE RECUPERACIÓN
  let inputVal: InputGetProps = { name: "remail", text: "" };

  // ROUTERS
  const router: NextRouter = useRouter();

  // CONFIGURAR PROVEEDORES DE LOGIN
  setProviders().catch((e: Error) => console.log("Error during set providers ", e));

  // OBTENER TEXTO DE LOS INPUTS
  const value = (data: InputGetProps) => {
    if (data.name === "email") email = data.text;
    else if (data.name === "name") name = data.text;
    else if (data.name === "pass") pass = data.text;
  };

  // MOSTRAR ALERTA EN EL BOTÓN DE RECUPERAR CLAVE
  const forgotPass = () => {
    let input: HTMLDivElement;
    let currentAlert: HTMLDivElement;
    let form: HTMLDivElement;

    setTimeout(() => {
      // SELECCIONAR ELEMENTOS
      form = document.getElementById("form") as HTMLDivElement;
      input = document.getElementById("forgotInput") as HTMLDivElement;
      currentAlert = document.querySelector(".alertBody") as HTMLDivElement;

      // MOSTRAR INPUTS
      input.style.display = "block";

      // AGREGAR A LA ALERTA
      if (currentAlert) currentAlert.appendChild(input);
    }, 10)

    // MOSTRAR ALERTA PRIMERO
    showAlert({
      title: props.strings.forms.forgot.title,
      body: props.strings.forms.forgot.text,
      confirmBtn: "Recuperar",
      type: "input",

      // VERIFICAR EL TEXTO EN EL INPUT DE LA ALERTA
      onConfirm: () => {
        if (inputVal)
          // SI EXISTE REINICIAR LA CLAVE
          useResetPass(inputVal.text)
            .catch((e: FirebaseError) =>
              showAlert({
                title: props.strings.alerts.title,
                body: useAuthError(e.code, props.errorLangPackage),
                type: "error"
              })
            );
        else
          // SINO MOSTRAR ERROR
          showAlert({
            title: props.strings.alerts.title,
            body: props.strings.alerts.text_1,
            type: "error"
          });
      },
      onHide: () => {
        try {
          input.style.display = "none";
          form.appendChild(input);
        } catch (e) { console.log(e) }
      }
    });
  };

  // INICIAR SESIÓN CON CORREO O CREAR CUENTA
  const logs = (e: MouseEvent<HTMLButtonElement>) => {
    const btn: HTMLButtonElement = e.target as HTMLButtonElement;
    btn.style.pointerEvents = "none";

    if (account.switchC && email.length * name.length * pass.length !== 0 && name.length <= 15)
      // INICIAR SESIÓN CON CUENTA NUEVA
      useLogin({ type: account.switchC, name, email, pass, onSuccess: () => router.push("/tienda") })
        .catch((e: FirebaseError) =>
          showAlert({
            title: props.strings.alerts.title,
            body: useAuthError(e.code, props.errorLangPackage),
            type: "error",
            onHide: () => btn.style.pointerEvents = "unset"
          }))

    // INICIAR SESIÓN CON CUENTA EXISTENTE
    else if (!account.switchC && email.length * pass.length !== 0)
      useLogin({ type: account.switchC, email, pass, onSuccess: () => router.push("/tienda") })
        .catch((e: FirebaseError) =>
          showAlert({
            title: props.strings.alerts.title,
            body: useAuthError(e.code, props.errorLangPackage),
            type: "error",
            onHide: () => btn.style.pointerEvents = "unset"
          }))

    // VERIFICAR SI TODOS LOS CAMPOS SE HAN LLENADO
    else
      showAlert({
        title: props.strings.alerts.title,
        body: props.strings.alerts.text_2,
        type: "error",
        onHide: () => btn.style.pointerEvents = "unset"
      });
  };

  // INICIAR SESIÓN CON FACEBOOK
  const fbLog = (e: MouseEvent<HTMLButtonElement>) => {
    const btn: HTMLButtonElement = e.target as HTMLButtonElement;
    btn.style.pointerEvents = "none";

    const enableBtn = () => btn.style.pointerEvents = "unset";
    useLogin({
      type: "fb", onSuccess: () => {
        router.push("/tienda")
        enableBtn();
      }
    })
      .catch((body: FirebaseError) => showAlert({ onHide: enableBtn, title: props.strings.alerts.title, body: body.code, type: "error" }))
  }

  // INICIAR SESIÓN CON GOOGLE
  const gLog = (e: MouseEvent<HTMLButtonElement>) => {
    const btn: HTMLButtonElement = e.target as HTMLButtonElement;
    btn.style.pointerEvents = "none";

    const enableBtn = () => btn.style.pointerEvents = "unset";
    useLogin({
      type: "g", onSuccess: () => {
        router.push("/tienda")
        enableBtn();
      }
    })
      .catch((body: FirebaseError) => showAlert({ onHide: enableBtn, title: props.strings.alerts.title, body: body.code, type: "error" }))
  }

  // ACTUALIZAR ESTADO ( NUEVA CUENTA / CUENTA EXISTENTE )
  const regSwitch = () => setAccount({ switchC: !account.switchC });

  return (
    <>
      <div id="form">
        <h2>
          {props.strings.title} <i className="material-icons">sync</i>
        </h2>
        <p>{props.strings.text}</p>
        <p>
          {account.switchC ? props.strings.confirm_1 : "no"} {props.strings.alreadyAccount}{" "}
          <button onClick={regSwitch}>{regText}</button>
        </p>

        <form id="credentials">
          <Input
            type="email"
            label={props.strings.forms.inputs.email.field}
            name="email"
            value={value}
            helper={props.strings.forms.inputs.email.helper}
            icon="email"
          />
          {account.switchC ? (
            <Input
              type="text"
              label={props.strings.forms.inputs.user.field}
              name="name"
              value={value}
              helper={props.strings.forms.inputs.user.helper}
              icon="person"
            />
          ) : ("")}
          <Input
            type="password"
            label={props.strings.forms.inputs.pass.field}
            name="pass"
            value={value}
            helper={props.strings.forms.inputs.pass.helper}
            icon="lock"
          />
        </form>

        {account.switchC ? ("") : (
          <p>
            {props.strings.forms.forgot.buttonText}{" "}
            <button className="waves waves-dark" onClick={forgotPass}>
              {props.strings.forms.forgot.title}
            </button>
          </p>
        )}

        <div id="forgotInput">
          <Input
            type="text"
            label={props.strings.forms.inputs.email.field}
            name="remail"
            helper={props.strings.forms.forgot.helper}
            icon="email"
            value={(vals: InputGetProps) => inputVal.text = vals.text}
          />
        </div>

        <button onClick={logs} className="blue waves">
          <i className="material-icons">person</i>
          {account.switchC ? props.strings.buttons.createAccount : props.strings.buttons.login}
        </button>
        <button onClick={fbLog} className="waves fbLog">
          <img src={require("../assets/f-icon.png")} /> {props.strings.buttons.fbLoginText}
        </button>
        <button onClick={gLog} className="waves gLog">
          <img src={require("../assets/g-icon.png")} /> {props.strings.buttons.gLoginText}
        </button>
      </div>

      <a href="./privacidad.pdf" target="_blank" title={props.strings.privacy_1} className="btn amber privacy waves waves-dark">
        <i className="material-icons">account_balance</i>
        {props.strings.privacy_1}
        <br />
        {props.strings.privacy_2}
      </a>

      <style jsx>{`
        .privacy {
          position: absolute;
          right: 0;
          margin-top: -100px;
          z-index: 2;
          font-size: 13px;
          color: var(--backgrounds);
        }
        #form > p {
          color: var(--paragraph);
        }
        #form > p:nth-child(5) {
          text-align: center;
        }
        p > button {
          display: inline-block;
          color: var(--paragraph);
        }
        h2 {
          color: var(--paragraph);
        }
        #form {
          width: calc(100% - 40px);
          background: var(--backgrounds);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          padding: 20px;
          border-radius: 10px;
          position: relative;
          top: -40px;
          left: 50%;
          transform: translate(-50%, 0%);
          margin-bottom: 60px;
        }
        #form > button {
          color: var(--backgrounds);
          width: 100%;
          justify-content: center;
          margin-top: 10px;
        }
        #forgotInput{
          display:none;
        }
        #credentials {
          margin-top: -10px;
        }
        button svg {
          margin: 30px;
        }
        .fbLog {
          background: #3b5998;
          margin: 0;
        }
        .fbLog > img{
          height:20px;
          margin-right:13px;
          filter:invert(100%);
        }
        .gLog {
          background: #d44638;
          margin: 0;
        }
        .gLog > img{
          margin-right:13px;
        }

        @media screen and (min-width:460px){
          .privacy{
            right:10px;
            z-index:10;
          }
        }
      `}</style>
    </>
  );
};

export default Forms;