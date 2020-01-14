// TIPOS DE DATOS Y HOOKS
import { useEffect, useContext, useState, Dispatch, SetStateAction, FC, useRef } from "react";
import { useAuth } from "../utils/hooks";
import { User } from "firebase";

// VARIABLES GLOBALES ( LENGUAJE, THEMA, USUARIO )
import langContext from "../utils/appContext";
import appContext from "../utils/appContext";

// COMPONENTES, ALERTAS Y LAYOUTS
import Verified from "../components/Verified";
import Footer from "./Footer";
import Toast from "../components/Toast";
import Topbar from "./Topbar";
import Drawer from "./Drawer";

// INTERFACES PARA LAS PROPIEDADES Y PROVIDER GLOBAL
interface Props { children: any; }
interface userState {
  user: User | null;
  online: boolean;
  logout: boolean;
}

// EVENTOS DE AGREGAR AL CARRITO
let cartList: string[] = [];
let topbar: any;
const addToCartEvent = (e: string) => {
  cartList.push(e);
  if (topbar.current) topbar.current.callRender();
}

const Layout: FC<Props> = (props: Props) => {
  console.log('%c⚠️ RENDER ENTIRE APP', 'background:#f44336; color: #ffff; padding:10px; font-weight:bold; border-radius:5px');

  // ESTADOS Y CONEXTO DEL COMPONENTE
  const { lang } = useContext(langContext.langContext);
  const defaultUser: userState = { user: null, online: false, logout: false };
  const [user, setUser]: [userState, Dispatch<SetStateAction<userState>>] = useState(defaultUser);
  topbar = useRef(null);

  // DETECTAR CAMBIOS EN EL INCIO DE SESION
  useAuth((getUser: User) => setUser({ user: getUser, online: user.online, logout: user.logout }));

  useEffect(() => {
    // SELECCIONAR MENSAJE DE ALERTA INFERIOR
    const toast: NodeListOf<HTMLDivElement> | null = document.querySelectorAll(".toast") as NodeListOf<HTMLDivElement>;

    // MOSTRAR ALERTA CUANDO RECUPERO LA CONEXION
    window.addEventListener("online", () => {
      if (toast) {
        toast[0].style.transform = "translateY(100%)";
        toast[1].style.transform = "translateY(0)";
        setTimeout(() => (toast[1].style.transform = "translateY(100%)"), 5000);
      }
    });

    // MOSTRAR ALERTA CUANDO PERDIO LA CONEXION
    window.addEventListener("offline", () => {
      if (toast) {
        toast[1].style.transform = "translateY(100%)";
        toast[0].style.transform = "translateY(0)";
        setTimeout(() => (toast[0].style.transform = "translateY(100%)"), 5000);
      }
    });
  });

  return (
    <>
      <nav>
        <Topbar ref={topbar} placeHolder={lang.searchPlaceholder} />
        <Drawer {...lang.general} user={user.user} />
      </nav>

      <Toast text={lang.toast.text_2} />
      <Toast text={lang.toast.text_1} />

      <appContext.appContext.Provider value={{ lang, theme: "light", user: user.user, addToCartEvent, cartList }}>
        {user.user && <Verified {...lang.verified} show={user.user.providerData[0]?.providerId === "facebook.com" ? true : user.user.emailVerified} />}
        <main>
          {props.children}
        </main>
      </appContext.appContext.Provider>

      <Footer store {...lang.footer} />

      <style jsx>{`
          nav {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
            background: var(--backgrounds);
          }  

          @media screen and (min-width:460px){
            main{
              width:90%;
              margin:0 auto;
            }
          }
      `}</style>
    </>
  );
};
export default Layout;
