// HOOKS
import { useContext, useState, Dispatch, SetStateAction, RefObject, useRef, useEffect, MouseEvent } from "react";
import { defUserData, useUserGet, showAlert } from "../utils/hooks";

// TIPOS E INTERFACES
interface IForms { name: string; email: string; address: string; phone: number; nit: string; }
interface SumState { user: userModel | null; total: number; }

// COMPONENTES
import CartList from "./CartList";
import Input from "./Input";

// CONTEXTO
import appContext from "../utils/appContext";

// INTERFAZ Y ESTADO INICIAL
const defState: SumState = { user: defUserData, total: 0 };
const defForms: IForms = { name: "", email: "", address: "", phone: 0, nit: "CF" };

// CONTADOR GLOBAL
let sliderCount: number = 0;
let firstRender: number = 0;
let getUserRender: number = 0;
let sumTotal: number = 0;
const nSliders: number = 3;

// VERIFICAR INPUTS
const verifyForm = (vals: IForms | null) => {
  // OBETNER VALORES DEL FORMULARIO
  let out: boolean = false;
  let errCode: number = 1;

  if (vals) {
    // VERIFICAR LONGITUD
    if ((vals.address.length * vals.email.length * vals.name.length * vals.phone) !== 0) out = true;

    // VERIFICAR SI INCLUYE UN @
    if (out) {
      if (vals.email.includes("@")) {
        // VERIFICAR SI TIENE UN . DESPUES DE @
        const nString: string = vals.email.substr(vals.email.indexOf("@"));
        if (!nString.includes(".")) {
          out = false;
          errCode = 2;
        }
      }

      // SINO RETORNAR FALSE
      else {
        errCode = 2;
        out = false;
      }
    }
  }

  // RETORNAR VERIFICACION
  return { errCode, out };
}

// COMPONENTE
const CartSummary: React.FC<langPackage.cartPage["summary"]> = (strings: langPackage.cartPage["summary"]) => {
  // ESTADO DEL COMPONENTE
  const [sumState, setSum]: [SumState, Dispatch<SetStateAction<SumState>>] = useState(defState);

  // CARRITO Y USUARIO DEL CONEXTO
  const { cartList, user } = useContext(appContext.appContext);

  // REFERENCIAS
  const slider: RefObject<HTMLDivElement> = useRef(null);
  const formValues: RefObject<IForms> = useRef(defForms);

  // GUARDAR DATOS DE LOS INPUTS
  const saveToForm = (data: InputGetProps) => {
    if (formValues.current) Object.keys(formValues.current).forEach((keys: string) => {
      // @ts-ignore
      if (formValues.current && keys === data.name && data.text) formValues.current[keys] = data.text;
      if (formValues.current && data.name === "nit" && data.text) formValues.current.nit = "CF";
    })
  }

  // GUARDAR AVANCE
  const saveProcces = () => window.localStorage.setItem("cartProcces", sliderCount.toString());

  // CAMBIAR SLIDER
  const changeSlider = (condition: boolean, resize: boolean, e?: MouseEvent<HTMLButtonElement>, ) => {
    // SELECCIONAR BOTTON
    const btn: HTMLButtonElement = e?.target as HTMLButtonElement;

    // DESHABILITAR BOTTON
    if (btn) {
      // NO ACEPTAR EVENTOS
      btn.style.pointerEvents = "none";

      // HABILITAR LUEGO DE 600MS
      setTimeout(() => btn.style.pointerEvents = "unset", 600);
    }

    if (condition) {
      // AUMENTAR O REDUCIT CONTADOR
      sliderCount = resize ? sliderCount + 1 : sliderCount - 1;

      if (sliderCount === 2 && !verifyForm(formValues.current).out && resize) {
        // OBTENER CODIGO DE ERROR
        const errText = verifyForm(formValues.current).errCode === 2 ? strings.forms.errors.text_1 : strings.forms.errors.text;

        // MOSTRAR ALERTA SI OCURRIO UN ERROR
        showAlert({
          type: "error",
          title: strings.forms.errors.title,
          body: errText,
        })

        // RERGRESAR EL VALOR DEL SLIDER
        sliderCount--;
      }

      else
        setTimeout(() => {
          if (slider.current) {
            // SELECCIONAR FORMULARIO Y ANIMAR
            const deliveryForm: HTMLDivElement = slider.current.childNodes[1].childNodes[2] as HTMLDivElement;
            const transform = `translateX(calc(calc(${(100 / nSliders) * sliderCount}% + ${30 * sliderCount}px) * -1))`;
            const finForm: HTMLParagraphElement = slider.current.childNodes[2].childNodes[2] as HTMLParagraphElement;

            // ANIMAR SLIDER
            slider.current.style.transform = transform;

            if (sliderCount == 1) deliveryForm.style.height = "auto";
            if (sliderCount == 2) {
              setTimeout(() => {
                deliveryForm.style.height = "0"
              }, 300)
              finForm.style.height = "auto";
            }
            else if (sliderCount == 0) setTimeout(() => {
              deliveryForm.style.height = "0"
              finForm.style.height = "0";
            }, 300)
          }
        }, 300);

      // GUARDAR AVANCE
      saveProcces();
    }
  }

  // SIGUIENTE SLIDER
  const nextSlider = (e?: MouseEvent<HTMLButtonElement>) => changeSlider(sliderCount < nSliders - 1, true, e);

  // ANTERIOR SLIDER
  const prevSlider = (e?: MouseEvent<HTMLButtonElement>) => changeSlider(sliderCount >= 0, false, e);

  const nexttoCurrent = () => {
    // SELCCIONAR AVANCE
    const getProcces = window.localStorage.getItem("cartProcces");

    // GUARDAR AVANCE NUEVO
    if (!getProcces) saveProcces();

    // AVANZAR HASTA ACTUAL
    else {
      sliderCount = 0;
      for (let i = 0; i < parseInt(getProcces); i++)
        changeSlider(sliderCount < nSliders - 1, true)
    }
  }

  // ACTUALIZAR ESTADO CON USUARIO 
  const setUsertoState = () => {
    // OBTENER DATOS COMPLETOS
    if (user) useUserGet(user.uid)

      // AGREGAR AL ESTADO
      .then((user: userModel | null | undefined) => {
        // GUARDAR DATOS PREDETERMINADOS
        saveToForm({ name: "name", text: user?.displayName || "" });
        saveToForm({ name: "email", text: user?.email || "" });

        // ACTUALIZAR ESTADOS
        setSum({ user: user || defState.user, total: sumState.total })
      })
  }

  // GUARDAR AVANCE INICIAL
  useEffect(() => {
    nexttoCurrent();
    firstRender++;

    // OBTENER USUARIO ACTUAL SI EXISTE
    if (user)
      setUsertoState()

    else {
      saveToForm({ name: "name", text: "" });
      saveToForm({ name: "email", text: "" });
    }

    const updateForm = setInterval(() => {
      const forms: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".finalForm") as NodeListOf<HTMLSpanElement>;
      if (forms && formValues.current) {
        if (forms[0]) forms[0].textContent = formValues.current.nit;
        if (forms[1]) forms[1].textContent = formValues.current.name;
        if (forms[2]) forms[2].textContent = formValues.current.email;
        if (forms[3]) forms[3].textContent = (sumState.total || sumTotal).toString();
        if (forms[4]) forms[4].textContent = formValues.current.address;
      }
    }, 100);

    return () => clearInterval(updateForm);
  }, [])

  // AVANZAR HASTA ACTUAL
  if (firstRender !== 0)
    nexttoCurrent();

  if (getUserRender === 0 && user) {
    setUsertoState();
    getUserRender++;
  }

  return (
    <div id="cartListCt">
      {cartList.length > 0 ? <>
        <div id="cartSliders" ref={slider}>
          <div className="cartSlider">
            <CartList cartList={cartList} updateTotal={(sum: number) => {
              setSum({ user: sumState.user, total: ((sum > 0 ? sum : 0.01) - 0.01) })
              sumTotal = (sum > 0 ? sum : 0.01) - 0.01;
            }
            } />
            <div id="totalCart">
              <span><i className="material-icons">monetization_on</i> {strings.total}</span>
              <h3 id="sum">{sumState.total || sumTotal}</h3>
            </div>
            <button onClick={nextSlider} className="waves">{strings.button} <i className="material-icons">arrow_forward</i></button>
          </div>
          <div className="cartSlider">
            <h3>{strings.forms.title}</h3>
            <p>{strings.forms.text}</p>

            <div id="deliveryForm">
              {
                !user && <>
                  <Input
                    type="text"
                    label={strings.forms.inputs.name.field}
                    name="name"
                    value={saveToForm}
                    helper={strings.forms.inputs.name.helper}
                    icon="person"
                  />
                  <Input
                    type="email"
                    label={strings.forms.inputs.email.field}
                    name="email"
                    value={saveToForm}
                    helper={strings.forms.inputs.email.helper}
                    icon="email"
                  />
                </>
              }
              <Input
                type="text"
                label={strings.forms.inputs.address.field}
                name="address"
                value={saveToForm}
                helper={strings.forms.inputs.address.helper}
                icon="directions"
                defValue={sumState.user?.address}
              />
              <Input
                type="number"
                label={strings.forms.inputs.phone.field}
                name="phone"
                value={saveToForm}
                helper={strings.forms.inputs.phone.helper}
                icon="phone"
                defValue={sumState.user?.phone}
              />
              <Input
                type="text"
                label={strings.forms.inputs.nit.field}
                name="nit"
                value={saveToForm}
                helper={strings.forms.inputs.nit.helper}
                icon="fiber_pin"
                defValue={sumState.user?.nit}
              />
            </div>
            <div className="controlSum">
              <button onClick={prevSlider} className="waves prevSlide"> <i className="material-icons">arrow_back</i> {strings.prevButton}</button>
              <button onClick={nextSlider} className="waves">{strings.button} <i className="material-icons">arrow_forward</i></button>
            </div>
          </div>
          <div className="cartSlider">
            <div id="secureBanner">
              <i className="material-icons">https</i>
              <div>
                <h2>Datos seguros</h2>
                <p>Protejemos tus datos bajo HTTPS, tus datos son confidenciales y no los compartimos con nadie.</p>
              </div>
            </div>
            <h3>Resumen de Compra <i className="material-icons">assignment</i></h3>
            <p id="summaryText">
              <i className="material-icons">fiber_pin</i><strong>NIT:</strong> <span className="finalForm">{formValues.current?.nit}</span>
              <br />
              <i className="material-icons">person</i><strong>Nombre:</strong> <span className="finalForm">{user?.displayName || formValues.current?.name}</span>
              <br />
              <i className="material-icons">email</i><strong>Email:</strong> <span className="finalForm">{user?.email || formValues.current?.email}</span>
              <br />
              <i className="material-icons">monetization_on</i><strong>Por un total de:</strong> Q <span className="finalForm">{sumState.total || sumTotal}</span>
              <br />
              <i className="material-icons">directions</i><strong>En:</strong> <span className="finalForm">{formValues.current?.address}</span>
            </p>
            <div className="controlSum">
              <button onClick={prevSlider} className="waves prevSlide"> <i className="material-icons">arrow_back</i> {strings.prevButton}</button>
              <button className="waves">Comprar <i className="material-icons">done_all</i></button>
            </div>
          </div>
        </div>
      </> :
        <div id="cartNotFound">
          <h2>{strings.notFound.title} <i className="material-icons">remove_shopping_cart</i></h2>
          <p>{strings.notFound.text}</p>
          <img src={require("../assets/error.png")} alt="EmptyCart" />
        </div>
      }

      <style jsx>{`
        #cartListCt{
          width:calc(100% - 40px);
          position:relative;
          margin-top:-40px;
          left:20px;
          padding:20px;
          background:var(--backgrounds);
          box-shadow:0 0px 10px rgba(0,0,0,.2);
          border-radius:10px;
          margin-bottom:120px;
          overflow:hidden;
        }
        #totalCart{
          display:flex;
          color:var(--blue);
          margin:10px 0;
          font-size:1.3em;
          align-items:center;
        }
        #totalCart span{
          opacity:0.8;
          margin-right:10px;
        }
        #totalCart span i{
          position:relative;
          top:5px;
        }
        #cartSliders{
          display:grid;
          grid-template-columns:repeat(${nSliders}, ${100 / nSliders}%);
          column-gap:30px;
          width:${nSliders * 100}%;
          transition:transform 0.3s ease-in-out;
        }
        .cartSlider{
          width:100%;
        }
        .cartSlider h3{
          opacity:0.8;
        }
        #deliveryForm{
          margin-bottom:20px;
          height:0;
        }
        button{
          position:relative;
          z-index:3;
          color:var(--backgrounds);
          width:100%;
          font-weight:bold;
          font-size:1em;
          align-items:center;
          justify-content:center;
          padding-left:28px;
        }
        button i{
          margin-left:10px;
        }
        button::before{
          content:'';
          width:100%;
          height:100%;
          position:absolute;
          top:0;
          left:0;
          background:var(--blue);
          z-index:-1;
        }
        .prevSlide{
          padding-left:10px;
        }
        .prevSlide i {
          margin:0;
          margin-right:10px;
        }
        .prevSlide::before{
          background:var(--secondary);
        }
        #cartNotFound img{
          width:230px;
          position:relative;
          margin:0 auto;
          left:25px;
        }
        .controlSum{
          display:grid;
          grid-template-columns:1fr 1fr;
          column-gap:10px
        }
        .cartSlider > #summaryText{
          height:0;
          margin:15px 0 20px 0;
        }
        .cartSlider  h3 > i{
          position:relative;
          top:5px;
        }
        .cartSlider > #summaryText > strong{
          opacity:0.7;
        }
        .cartSlider > #summaryText > i{
          opacity:0.7;
          font-size:1em;
          position:relative;
          top:1px;
          margin-right:5px;
        }
        #secureBanner{
          padding:10px;
          padding-bottom:13px;
          display:flex;
          font-size:0.8em;
          align-items:center;
          background:linear-gradient(to left,#2196f3, var(--primary));
          border-radius:10px;
          color:var(--backgrounds);
          margin-bottom:10px;
        }
        #secureBanner > i{
          font-size:3em;
          margin-right:10px;
        }
        #secureBanner h2{
          color:var(--backgrounds);
        }
      `}</style>
    </div>
  )
}

export default CartSummary;