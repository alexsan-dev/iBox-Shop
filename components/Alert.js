import { useRef } from "react"
import Input from "./Input";

let input = undefined;
const Alert = props => {
    const type = props.type;
    const current = useRef(null);

    const onConfirm = () =>{
        current.current.style.opacity = 0;
        setTimeout(() => {
            props.hideAlert();
            if(props.onConfirm) props.onConfirm(input);
        }, 400);
    }

    const hideAlert = () =>{
        current.current.style.opacity = 0;
        setTimeout(() => props.hideAlert(), 400);
    }

    const value = data => input=data;

    return (
        <div className="alertContainer" ref={current}>
            <div className="alertShadow" onClick={hideAlert}></div>
            <div id="alertContent">
                <h1>{props.title}</h1>
                <p>{props.body}</p>
                {type==="input"?<Input value={value} type={props.input.type} label={props.input.label}  name={props.input.name}  helper={props.input.helper}  icon={props.input.icon} />:""}
                <ul>
                    {type === "confirmation" ? <li><button className="waves waves-dark" onClick={hideAlert}>Cancelar</button></li> : ""}
                    <li><button className="waves waves-dark primary" onClick={onConfirm}>Aceptar</button></li>
                </ul>
            </div>
            <style jsx>{`
                @keyframes show{
                    from{opacity:0}
                    to{opacity:1}
                }
                .alertContainer{
                    width:100%;
                    height:100vh;
                    position:fixed;
                    top:0;
                    left:0;
                    z-index:100;
                    animation:show 0.4s ease-in-out 1;
                    transition:opacity 0.4s ease-in-out;
                }
                .alertContainer > .alertShadow{
                    width:100%;
                    height:100%;
                    position:absolute;
                    top:0;
                    left:0;
                    background:rgba(0,0,0,.4);
                    z-index:1;
                }
                .alertContainer #alertContent{
                    position:absolute;
                    top:50%;
                    left:50%;
                    background:var(--backgrounds);
                    padding:20px;
                    width:calc(100% - 40px);
                    max-width:400px;
                    transform:translate(-50%, -50%);
                    z-index:2;
                    box-shadow:0 0 10px rgba(0,0,0,.3);
                    border-radius:10px;
                }
                ul{
                    display:flex;
                    justify-content:flex-end;
                }
                ul li button{
                    color:var(--backgrounds);
                }
                h1{
                    color:var(--text);
                }
                p{
                    margin-bottom:10px;
                }
            `}</style>
        </div>
    )
}
export default Alert;