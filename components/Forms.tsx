// TIPOS DE DATOS Y HOOKS
import { setProviders, useLogin, useAuthError, useResetPass, useRipples } from "../utils/hooks";
import { useState, Dispatch, SetStateAction } from "react";

// COMPONENTES Y ALERTAS
import Input from "./Input";
import Alert from "./Alert";

// VARIABLES GLOBALES
let email: string = "";
let pass: string = "";
let name: string = "";

// ESTADOS INICIALES
interface accountState { switchC: boolean; alert?: AlertProps; alertSwitch: boolean; }
const defaultState: accountState = { switchC: false, alertSwitch: false };
const defaultAlert: AlertProps = { type: "", title: "", body: "" };

// PROPIEDADES
interface Props {
  headerButton_1: string;
  headerButton_2: string;
  headerButton: string;
  headerTitle: string;
  headerText: string;
  forgotTitle: string;
  forgotText: string;
  emailField: string;
  emailForgotHelper: string;
  alertErrorTitle: string;
  alertErrorText_1: string;
  alertErrorText_2: string;
  title: string;
  text: string;
  alreadyAccount: string;
  confirm_1: string;
  forgotButtonText: string;
  fbLoginText: string;
  gLoginText: string;
  privacy_1: string;
  privacy_2: string;
  emailHelper: string;
  userField: string;
  userHelper: string;
  passField: string;
  passHelper: string;
  errorText: any;
}

const Forms: React.FC<Props> = (props: Props) => {
  // ESTADOS DEL COMPONENTE
  let [account, setAccount]: [accountState, Dispatch<SetStateAction<accountState>>] = useState(defaultState);
  let regText = !account.switchC ? props.headerButton_1 : props.headerButton_2;

  // AGREGAR EFFECTO RIPPLE
  useRipples();

  // CONFIGURAR PROVEEDORES DE LOGIN
  setProviders();

  // OBTENER TEXTO DE LOS INPUTS
  const value = (data: InputGetProps) => {
    if (data.name === "email") email = data.text;
    else if (data.name === "name") name = data.text;
    else if (data.name === "pass") pass = data.text;
  };

  // MOSTRAR ALERTAS Y ACTUALIZAR ESTADOS
  const showAlert = (data: AlertProps) => {
    const alertData: AlertProps = data
      ? {
        title: data.title,
        input: data.input || undefined,
        onConfirm: data.onConfirm || undefined,
        type: data.type,
        body: data.body
      }
      : defaultAlert;
    setAccount({
      switchC: account.switchC,
      alert: alertData,
      alertSwitch: data ? true : false
    });
  };

  // MOSTRAR ALERTA EN EL BOTON DE RECUPERAR CLAVE
  const forgotPass = () => {
    // MOSTRAR ALERTA PRIMERO
    showAlert({
      title: props.forgotTitle,
      body: props.forgotText,
      type: "input",
      input: {
        type: "text",
        label: props.emailField,
        name: "remail",
        helper: props.emailForgotHelper,
        icon: "envelope",
        value: () => { }
      },

      // VERIFICAR EL TEXTO EN EL INPUT DE LA ALERTA
      onConfirm: (data: InputGetProps) => {
        if (data)
          // SI EXISTE RESETEAR LA CLAVE
          useResetPass(data.text, (e: any) =>
            showAlert({
              title: props.alertErrorTitle,
              body: useAuthError(e.code, props.errorText),
              type: "error"
            })
          );
        else
          // SINO MOSTRAR ERROR
          showAlert({
            title: props.alertErrorTitle,
            body: props.alertErrorText_1,
            type: "error"
          });
      }
    });
  };

  // INICIAR SESION CON CORREO O CREAR CUENTA
  const logs = () => {
    if (account.switchC && email.length * name.length * pass.length !== 0 && name.length <= 15)
      // INICIAR SESION CON CUENTA NUEVA
      useLogin({
        type: account.switchC,
        name,
        email,
        pass,

        // MOSTRAR ERROR SI EXISTE
        err: (e: any) =>
          showAlert({
            title: props.alertErrorTitle,
            body: useAuthError(e.code, props.errorText),
            type: "error"
          })
      });

    // INICIAR SESION CON CUENTA EXISTENTE
    else if (!account.switchC && email.length * pass.length !== 0)
      useLogin({
        type: account.switchC,
        email,
        pass,
        err: (e: any) =>
          showAlert({
            title: props.alertErrorTitle,
            body: useAuthError(e.code, props.errorText),
            type: "error"
          })
      });

    // VERIFICAR SI TODOS LOS CAMPOS SE HAN LLENADO
    else
      showAlert({
        title: props.alertErrorTitle,
        body: props.alertErrorText_2,
        type: "error"
      });
  };

  // INICIAR SESION CON FACEBOOK
  const fblog = () =>
    useLogin({
      type: "fb",
      err: (body: any) =>
        showAlert({ title: props.alertErrorTitle, body, type: "error" })
    });

  // INICIAR SESION CON GOOGLE
  const glog = () =>
    useLogin({
      type: "g",
      err: (body: any) =>
        showAlert({ title: props.alertErrorTitle, body, type: "error" })
    });

  // ACTUALIZAR ESTADO ( NUEVA CUENTA / CUENTA EXISTENTE )
  const regSwitch = () =>
    setAccount({
      switchC: !account.switchC,
      alert: account.alert,
      alertSwitch: account.alertSwitch
    });

  return (
    <>
      {account.alertSwitch && account.alert && (
        <Alert
          title={account.alert.title}
          type={account.alert.type}
          body={account.alert.body}
          onConfirm={account.alert.onConfirm}
          hideAlert={showAlert}
          input={account.alert.input}
        />
      )}
      <div id="form">
        <h2>
          {props.title} <i className="uil uil-sync"></i>
        </h2>
        <p>{props.text}</p>
        <p>
          {account.switchC ? props.confirm_1 : "no"} {props.alreadyAccount}{" "}
          <button onClick={regSwitch}>{regText}</button>
        </p>

        <div id="credentials">
          <Input
            type="email"
            label={props.emailField}
            name="email"
            value={value}
            helper={props.emailHelper}
            icon="envelope"
          />
          {account.switchC ? (
            <Input
              type="text"
              label={props.userField}
              name="name"
              value={value}
              helper={props.userHelper}
              icon="user"
            />
          ) : ("")}
          <Input
            type="password"
            label={props.passField}
            name="pass"
            value={value}
            helper={props.passHelper}
            icon="lock"
          />
        </div>

        {account.switchC ? ("") : (
          <p>
            {props.forgotButtonText}{" "}
            <button className="waves waves-dark" onClick={forgotPass}>
              {props.forgotTitle}
            </button>
          </p>
        )}

        <button onClick={logs} className="blue waves">
          <i className="uil uil-user-square"></i>
          {account.switchC ? props.headerButton_1 : props.headerButton_2}
        </button>
        <button onClick={fblog} className="waves fblog">
          <i className="uil uil-facebook-f"></i> {props.fbLoginText}
        </button>
        <button onClick={glog} className="waves glog">
          <i className="uil uil-google"></i> {props.gLoginText}
        </button>
      </div>

      <a href="./privacidad.pdf" target="_blank" title="Privacy" className="btn amber privacy waves waves-dark">
        <i className="uil uil-university"></i>
        {props.privacy_1}
        <br />
        {props.privacy_2}
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
          color: var(--parraf);
        }
        #form > p:nth-child(5) {
          text-align: center;
        }
        p > button {
          display: inline-block;
          color: var(--parraf);
        }
        h2 {
          color: var(--parraf);
        }
        #form {
          width: calc(100% - 40px);
          background: var(--backgrounds);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          padding: 20px;
          border-radius: 10px;
          position: relative;
          top: -50px;
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
        #credentials {
          margin-top: -10px;
        }
        button svg {
          margin: 30px;
        }
        .fblog {
          background: #3b5998;
          margin: 0;
        }
        .glog {
          background: #d44638;
          margin: 0;
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