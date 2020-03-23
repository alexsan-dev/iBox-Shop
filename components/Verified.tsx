// HOOKS Y TIPOS DE DATOS
import { useSendEmailVerification, useDeleteUser, useUserTime, showAlert } from "../utils/hooks";
import { useState, Dispatch, SetStateAction, MouseEvent } from "react";

// PROPIEDADES Y ESTADOS
interface Props {
  show: boolean;
  strings: langPackage.verified
}

// ESTADOS INICIALES
interface Visibility { visible: boolean; }

const Verified: React.FC<Props> = (props: Props) => {
  // ESTADO DEL COMPONENTE
  const defaultState: Visibility = { visible: props.show };
  const [visible, setVisible]: [Visibility, Dispatch<SetStateAction<Visibility>>] = useState(defaultState);

  // ENVIAR EMAIL DE RECUPERACIÓN
  const sendEmail = (e: MouseEvent<HTMLButtonElement>) => {
    const btn: HTMLButtonElement = e.target as HTMLButtonElement;
    btn.style.pointerEvents = "none";

    useSendEmailVerification()?.then(() => {
      console.log("Send verification email");
      btn.style.pointerEvents = "unset";
      setVisible({ visible: true });
    })
      .catch((err: Error) => console.log(err));
  };

  // BORRAR USUARIO DE FIREBASE
  const deleteUser = () => {
    useDeleteUser()
      ?.then(() => {
        console.log("User deleted");
      })
      .catch((error: any) => console.log("Error deleting user:", error));
  }

  // BORRAR USUARIO DESPUÉS DE PASADO UN DIA 
  if (!visible.visible) {
    // OBTENER LA DIFERENCIA DE TIEMPOS ( ACTUAL - CREACIÓN )
    const timeDelta: number = new Date().getMilliseconds() - useUserTime().getMilliseconds();

    // BORRAR USUARIO SI ES MAYOR DE 24H Y NO ESTA VERIFICADO
    if (timeDelta > 3600 * 24 * 1000) {
      showAlert({
        title: props.strings.alertTitle,
        body: props.strings.alertText,
        type: "confirm",
        onConfirm: deleteUser,
        onHide: deleteUser
      })
      setTimeout(deleteUser, 60000);
    }

    return (
      <>
        <div className="amber">
          <div>
            <h1>{props.strings.title}</h1>
            <p>{props.strings.text}</p>
          </div>
          <button onClick={sendEmail} className="waves waves-dark white">
            <i className="material-icons">send</i>
            {props.strings.button}
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
              color: var(--paragraph);
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