import { useRef } from 'react';
const Input = props => {
   let visible = true;
   const inp = useRef(null);

   const fx = e => {
      const label = inp.current.nextSibling;
      const hr = label.nextSibling;
      const i = hr.nextSibling;
      if (label && inp.current.value.length === 0) {
         label.classList.toggle("alabel");
         label.classList.toggle("dlabel");
         hr.classList.toggle("hractive");
         hr.classList.toggle("hrunactive");
         i.classList.toggle("iactive");
         i.classList.toggle("iunactive");
      }
   }

   const visibled = e => {
      if (visible) {
         e.target.innerHTML = "visibility";
         inp.current.setAttribute("type", "text");
         visible = !visible;
      } else {
         e.target.innerHTML = "visibility_off";
         inp.current.setAttribute("type", "password");
         visible = !visible;
      }
   }

   const getText = e => props.value({
      name: props.name,
      text: inp.current.value
   });

   return (
      <>

         <div className="in">
            <input ref={inp} type={props.type} id={props.name} name={props.name} onFocus={fx} onBlur={fx} onChange={getText} />
            <label htmlFor={props.name} className="dlabel">{props.label}</label>
            <hr className="hrunactive" />
            <i className="iunactive material-icons">{props.icon}</i>
            {props.type === "password" ? <span onClick={visibled} className="material-icons">visibility_off</span> : ""}
         </div>

         <span>{props.helper}</span>

      </>
   )
}
export default Input;
