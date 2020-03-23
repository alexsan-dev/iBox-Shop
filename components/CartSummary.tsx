// HOOKS
import { useContext, useState, Dispatch, SetStateAction, RefObject, useRef, useEffect, MouseEvent } from "react";
import { renderToString } from "react-dom/server";
import { defUserData, useUserGet, showAlert, buyFromCart, useUserSet } from "../utils/hooks";

// ROUTER
import { useRouter, NextRouter } from "next/router";

// TIPOS E INTERFACES
interface IForms { name: string; email: string; address: string; phone: number; nit: string; }
interface SumState { user: userModel | null; total: number; }

// COMPONENTES
import CartList from "./CartList";
import Input from "./Input";

// CONTEXTO
import appContext from "../utils/appContext";
import Banner from "./Banner";

// INTERFAZ Y ESTADO INICIAL
const defState: SumState = { user: defUserData, total: 0 };
const defForms: IForms = { name: "", email: "", address: "", phone: 0, nit: "CF" };
let forms: NodeListOf<HTMLSpanElement>;

// CONTADOR GLOBAL
let sliderCount: number = 0;
let firstRender: number = 0;
let getUserRender: number = 0;
let sumTotal: number = 0;
const nSliders: number = 3;

// VERIFICAR INPUTS
const verifyForm = (vals: IForms | null) => {
  // OBTENER VALORES DEL FORMULARIO
  let out: boolean = false;
  let errCode: number = 1;

  if (vals) {
    // VERIFICAR LONGITUD
    if ((vals.address.length * vals.email.length * vals.name.length * vals.phone) !== 0) out = true;

    // VERIFICAR SI INCLUYE UN @
    if (out) {
      if (vals.email.includes("@")) {
        // VERIFICAR SI TIENE UN . DESPUÉS DE @
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

  // RETORNAR VERIFICACIÓN
  return { errCode, out };
}

// COMPONENTE
const CartSummary: React.FC<langPackage.cartPage["summary"]> = (strings: langPackage.cartPage["summary"]) => {
  // ESTADO DEL COMPONENTE
  const [sumState, setSum]: [SumState, Dispatch<SetStateAction<SumState>>] = useState(defState);

  // CARRITO Y USUARIO DEL CONTEXTO
  const { cartList, user, addToCartEvent } = useContext(appContext.appContext);

  // REFERENCIAS
  const slider: RefObject<HTMLDivElement> = useRef(null);
  const formValues: RefObject<IForms> = useRef(defForms);

  // ROUTER
  const router: NextRouter = useRouter();

  // BANNERS
  const banner: JSX.Element = <Banner
    {...strings.banner}
    title={`${strings.banner.title} ${(user?.displayName || formValues.current?.name)?.split(" ")[0]}`}
  />

  // GUARDAR DATOS DE LOS INPUTS
  const saveToForm = (data: InputGetProps) => {
    // ASIGNAR VALORES AL FORM
    if (formValues.current) Object.keys(formValues.current).forEach((keys: string) => {
      // @ts-ignore
      if (formValues.current && keys === data.name && data.text) formValues.current[keys] = data.text;
      if (formValues.current && data.name === "nit" && data.text.length === 0) formValues.current.nit = "CF";
    })
  }

  // GUARDAR AVANCE
  const saveProcess = () => window.localStorage.setItem("cartProcess", sliderCount.toString());

  // CAMBIAR SLIDER
  const changeSlider = (condition: boolean, resize: boolean, e?: MouseEvent<HTMLButtonElement>, ) => {
    // SELECCIONAR BOTÓN
    const btn: HTMLButtonElement = e?.target as HTMLButtonElement;

    // DESHABILITAR BOTÓN
    if (btn) {
      // NO ACEPTAR EVENTOS
      btn.style.pointerEvents = "none";

      // HABILITAR LUEGO DE 600MS
      setTimeout(() => btn.style.pointerEvents = "unset", 600);
    }

    if (condition) {
      // AUMENTAR O REDUCIR CONTADOR
      sliderCount = resize ? sliderCount + 1 : sliderCount - 1;

      if (sliderCount === 2 && !verifyForm(formValues.current).out && resize) {
        // OBTENER CÓDIGO DE ERROR
        const errText = verifyForm(formValues.current).errCode === 2 ? strings.forms.errors.text_1 : strings.forms.errors.text;

        // MOSTRAR ALERTA SI OCURRIÓ UN ERROR
        showAlert({
          type: "error",
          title: strings.forms.errors.title,
          body: errText,
        })

        // REGRESAR EL VALOR DEL SLIDER
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

            // CAMBIAR ALTO DE DELIVERY
            if (sliderCount == 1) deliveryForm.style.height = "auto";
            if (sliderCount == 2) {
              // QUITAR ALTO DE DELIVERY
              setTimeout(() => deliveryForm.style.height = "0", 300);
              finForm.style.height = "auto";
            }

            // QUITAR ALTO DE DELIVERY Y FORM
            else if (sliderCount == 0) setTimeout(() => {
              deliveryForm.style.height = "0"
              finForm.style.height = "0";
            }, 300)
          }
        }, 300);

      // GUARDAR AVANCE
      saveProcess();
    }
  }

  // SIGUIENTE SLIDER
  const nextSlider = (e?: MouseEvent<HTMLButtonElement>) => changeSlider(sliderCount < nSliders - 1, true, e);

  // ANTERIOR SLIDER
  const prevSlider = (e?: MouseEvent<HTMLButtonElement>) => changeSlider(sliderCount >= 0, false, e);

  const nextToCurrent = () => {
    // SELECCIONAR AVANCE
    const getProcess = window.localStorage.getItem("cartProcess");

    // GUARDAR AVANCE NUEVO
    if (!getProcess) saveProcess();

    // AVANZAR HASTA ACTUAL
    else {
      sliderCount = 0;
      for (let i = 0; i < parseInt(getProcess); i++)
        changeSlider(sliderCount < nSliders - 1, true)
    }
  }

  // ACTUALIZAR ESTADO CON USUARIO 
  const setUserToState = () => {
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

  // REINICIAR CARRITO
  const resetCart = () => {
    // REINICIAR GLOBALES
    sliderCount = 0;
    sumTotal = 0;
    window.localStorage.setItem("cartProcess", "");

    // ACTUALIZAR CARRITO
    addToCartEvent("", true, true);
  }

  //ENVIAR LOS DATOS DE COMPRA
  const sendToBuy = (e: MouseEvent<HTMLButtonElement>) => {
    // DESHABILITAR BOTÓN DE COMPRAR
    const btn: HTMLButtonElement = e.target as HTMLButtonElement;
    if (btn) btn.style.pointerEvents = "none";

    // MOSTRAR ALERTA DE ESPERA
    showAlert({
      type: "window",
      title: strings.buy.alert.title,
      body: strings.buy.alert.text,
      fixed: true
    })

    // ENVIAR DATOS A BACKEND
    if (formValues.current) buyFromCart({ sendData: formValues.current, cartList })
      .then(() => {
        // QUITAR ALERTA DE ESPERA
        const cAlert: NodeListOf<HTMLDivElement> = document.querySelectorAll(".alertContainer") as NodeListOf<HTMLDivElement>;
        cAlert.forEach((el: HTMLDivElement) => {
          el.style.opacity = "0";
          setTimeout(() => el.style.display = "none", 400)
        })

        // HABILITAR BOTÓN
        btn.style.pointerEvents = "unset";

        // FUNCTION DE SALIR
        const exitCart = () => {
          // REGRESAR
          router.back();

          // REINICIAR CARRITO
          setTimeout(() => resetCart(), 1500)

          // MOSTRAR ALERTA
          setTimeout(() => showAlert({
            title: "",
            body: "",
            fixed: true,
            customElements: renderToString(banner),
            type: "alert"
          }), 2000);
        }

        // AGREGAR DATOS AL USUARIO
        let userCopy: userModel | null = sumState.user;

        if (userCopy) {
          // AGREGAR DATOS NUEVOS
          if (userCopy.address !== formValues.current?.address || userCopy.phone !== formValues.current?.phone || userCopy.nit !== formValues.current?.nit) {
            userCopy.address = formValues.current?.address;
            userCopy.phone = formValues.current?.phone;
            userCopy.nit = formValues.current?.nit;

            // ACTUALIZAR DATOS CON FIREBASE
            useUserSet(sumState.user?.uid, userCopy)
              .then(exitCart);
          }
          else exitCart();
        } else exitCart();
      })
      .catch((e: Error) => {
        // QUITAR ALERTA DE ESPERA
        const cAlert: NodeListOf<HTMLDivElement> = document.querySelectorAll(".alertContainer") as NodeListOf<HTMLDivElement>;
        cAlert.forEach((el: HTMLDivElement) => {
          el.style.opacity = "0";
          setTimeout(() => el.style.display = "none", 400)
        })

        // MOSTRAR ERROR
        console.log(e);

        // MOSTRAR ALERTA DE ERROR
        showAlert({
          title: strings.alerts.title,
          body: strings.alerts.text,
          type: "error"
        })
      })
  }


  // GUARDAR AVANCE INICIAL
  useEffect(() => {
    // AVANZAR HASTA ACTUAL
    nextToCurrent();
    firstRender++;

    // OBTENER USUARIO ACTUAL SI EXISTE
    if (user)
      setUserToState()

    // CONFIGURAR VALORES POR DEFECTO
    else if (formValues.current) {
      formValues.current.nit = defForms.nit;
      formValues.current.name = defForms.name;
      formValues.current.email = defForms.email;
      formValues.current.phone = defForms.phone;
      formValues.current.address = defForms.address;
    }

    // ACTUALIZAR FORMULARIO DE ENVIÓ 
    const updateForm = setInterval(() => {
      forms = document.querySelectorAll(".finalForm") as NodeListOf<HTMLSpanElement>;

      // SELECCIONAR INFORMACIÓN
      if (forms && formValues.current) {
        if (forms[0]) forms[0].textContent = formValues.current.nit;
        if (forms[1]) forms[1].textContent = formValues.current.name;
        if (forms[2]) forms[2].textContent = formValues.current.email;
        if (forms[3]) forms[3].textContent = (sumState.total || sumTotal).toString();
        if (forms[4]) forms[4].textContent = formValues.current.address;
      }
    }, 100);

    // LIMPIAR INTERVALO
    return () => clearInterval(updateForm);
  }, [])

  // AVANZAR HASTA ACTUAL
  if (firstRender !== 0)
    nextToCurrent();

  // AGREGAR USUARIO AL ESTADO
  if (getUserRender === 0 && user) {
    setUserToState();
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
            <button onClick={nextSlider} className="waves blue">{strings.button} <i className="material-icons">arrow_forward</i></button>
          </div>
          <div className="cartSlider">
            <h3>{strings.forms.title}</h3>
            <p>{strings.forms.text}</p>

            <form id="deliveryForm">
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
            </form>
            <div className="controlSum">
              <button onClick={prevSlider} className="waves prevSlide amber"> <i className="material-icons">arrow_back</i> {strings.prevButton}</button>
              <button onClick={nextSlider} className="waves blue">{strings.button} <i className="material-icons">arrow_forward</i></button>
            </div>
          </div>
          <div className="cartSlider">
            <div id="secureBanner">
              <i className="material-icons">https</i>
              <div>
                <h2>{strings.sendForm.banner.title}</h2>
                <p>{strings.sendForm.banner.text}</p>
              </div>
            </div>
            <h3>{strings.sendForm.info.title} <i className="material-icons">assignment</i></h3>
            <p id="summaryText">
              <i className="material-icons">fiber_pin</i><strong>{strings.sendForm.info.fields.nit}</strong> <span className="finalForm">{formValues.current?.nit}</span>
              <br />
              <i className="material-icons">person</i><strong>{strings.sendForm.info.fields.name}</strong> <span className="finalForm">{user?.displayName || formValues.current?.name}</span>
              <br />
              <i className="material-icons">email</i><strong>{strings.sendForm.info.fields.email}</strong> <span className="finalForm">{user?.email || formValues.current?.email}</span>
              <br />
              <i className="material-icons">monetization_on</i><strong>{strings.sendForm.info.fields.total}</strong> Q <span className="finalForm">{sumState.total || sumTotal}</span>
              <br />
              <i className="material-icons">directions</i><strong>{strings.sendForm.info.fields.address}</strong> <span className="finalForm">{formValues.current?.address}</span>
            </p>
            <div className="controlSum">
              <button onClick={prevSlider} className="waves prevSlide amber"> <i className="material-icons">arrow_back</i> {strings.prevButton}</button>
              <button onClick={sendToBuy} className="waves blue">{strings.sendForm.button} <i className="material-icons">done_all</i></button>
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
          padding-left:20px;
        }
        button i{
          margin-left:10px;
          margin-right:0;
        }
        .prevSlide i {
          margin:0;
          margin-right:10px;
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