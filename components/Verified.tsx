// HOOKS Y TIPOS DE DATOS
import { useSendEmailVerification, useDeleteUser, useUserTime } from "../utils/hooks";
import { useState, Dispatch, SetStateAction } from "react";

// COMPONENTE DE ALERTAS
import Alert from "./Alert";

// PROPIEDADES Y ESTADOS
interface Props {
  show: boolean;
  alertTitle: string;
  alertText: string;
  title: string;
  text: string;
  button: string;
}

// ESTADOS INICIALES
interface Visibility { visible: boolean; deleted: boolean; }

const Verified: React.FC<Props> = (props: Props) => {
  // ESTADO DEL COMPONENTE
  const defaultState: Visibility = { visible: props.show, deleted: false };
  const [visible, setVisible]: [Visibility, Dispatch<SetStateAction<Visibility>>] = useState(defaultState);

  // ENVIAR EMAIL DE RECUPERACION
  const sendEmail = () => {
    useSendEmailVerification()?.then(() => {
      console.log("Send verification email");
      setVisible({ visible: true, deleted: visible.deleted });
    });
  };

  // ACTUALIZAR ESTADO AL CERRAR ALERTA
  const hideAlert = () => setVisible({ visible: true, deleted: false });

  // BORRAR USUARIO
  const onConfirm = () => {
    useDeleteUser()
      ?.then(() => {
        console.log("User deleted");
      })
      .catch((error: any) => console.log("Error deleting user:", error));
  }

  // BORRAR USUARIO DESPUES DE PASADO UN DIA 
  if (!visible.visible) {
    // OBTENER LA DIFERENCIA DE TIEMPOS ( ACTUAL - CREACION )
    const timeDelta: number = new Date().getMilliseconds() - useUserTime().getMilliseconds();

    // BORRAR USUARIO SI ES MAYOR DE 24H Y NO ESTA VERIFICADO
    if (timeDelta > 3600 * 24 * 1000) {
      setVisible({ visible: false, deleted: true });
      setTimeout(() => {
        useDeleteUser()
          ?.then(() => {
            console.log("User deleted");
          })
          .catch((error: any) => console.log("Error deleting user:", error));
      }, 60000);
    }

    return (
      <>
        {visible.deleted && (
          <Alert
            hideAlert={hideAlert}
            title={props.alertTitle}
            body={props.alertText}
            type="error"
            onConfirm={onConfirm}
          />
        )}
        <div className="amber">
          <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
          <button onClick={sendEmail} className="waves waves-dark white">
            <i className="uil uil-message"></i>
            {props.button}
          </button>

          <style jsx>{`
            .amber {
              padding: 20px;
              color: var(--backgrounds);
              display: flex;
              align-items: center;
              overflow:hidden;
              justify-content: space-between;
            }
            .amber > div {
              width: 170px;
            }
            button {
              color: var(--parraf);
            }
            h1 {
              color: var(--backgrounds);
              font-size: 1.3em;
            }
            p {
              font-size: 0.9em;
            }
            @media screen and (min-width:445px){
              .amber > div {
                width: 190px;
              }
            }
            @media screen and (min-width:460px){
              .amber{
                width:calc(90% + 20px);
                left:calc(5% - 10px);
                border-radius:10px;
              }
            }
          `}</style>
        </div>
      </>
    );
  } else return null;
};

export default Verified;