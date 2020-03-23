// HOOKS Y CONTEXTO
import { useContext } from "react";
import appContext from "../utils/appContext";

// PROPIEDADES
interface Props { text: string; title: string; pd: string; st: string; }

const Banner: React.FC<Props> = (props: Props) => {
  // CONTEXTO
  const { lang } = useContext(appContext.appContext);

  return (
    <div className="banner">
      <div>
        <img src="./images/logo.png" alt="Logo Banner" />
        <div>
          <h2 id="banTitle">{lang.general.app.name}</h2>
          <p>{lang.general.app.slogan}</p>
        </div>
      </div>

      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>

        <strong>{props.st}</strong><span>{props.pd}</span>
      </div>
      <br />

      <style jsx>{`
        .banner{
          display:block;
          width:100%;
          margin-top:-10px;
          padding:0 10px;
        }
        .banner div:nth-child(1){
          display:inline-flex;
          align-items:center;
          background:linear-gradient(to right, var(--primary), var(--blue));
          color:var(--backgrounds);
          padding:15px;
          border-radius:10px;
          font-size:0.7em;
          position:relative;
          left:50%;
          transform:translateX(-50%);
          margin-bottom:10px;
        }
        .banner div:nth-child(1) img{
          height:50px;
          width:50px;
          margin-right:10px;
        }
        strong{
          opacity:0.8;
        }
        #banTitle{
          color:var(--backgrounds);
        }
      `}</style>
    </div>
  )
}

export default Banner;