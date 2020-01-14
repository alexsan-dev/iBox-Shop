// LENGUAJE DEL COMPONENTE
import { useContext } from "react";
import appContext from "../utils/appContext";

const Loading: React.FC = () => {
  // CONTEXTO PARA EL LENGUAJE
  const str = useContext(appContext.appContext).lang.loading;
  return (
    <div>
      <h1>{str.title}</h1>
      <p>{str.text}</p>
      <style jsx>{`
        div {
          padding: 20px;
          width: calc(100% - 40px);
          max-width: 400px;
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: var(--backgrounds);
        }
        h1 {
          color: var(--text);
          font-size: 1.8em;
        }
      `}</style>
    </div>
  );
};

export default Loading;