// TIPOS DE DATOS Y HOOKS
import { useEffect, useContext, useState, Dispatch, SetStateAction, FC, useRef } from "react";
import { useAuth, showToast, useRipples } from "../utils/hooks";
import { User } from "firebase";

// VARIABLES GLOBALES ( LENGUAJE, THEMA, USUARIO )
import langContext from "../utils/appContext";
import appContext from "../utils/appContext";

// COMPONENTES, ALERTAS Y LAYOUTS
import Verified from "../components/Verified";
import Footer from "./Footer";
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
let layoutHandler: number = 0;
let cartList: string[] = [];
let topbar: any;
const addToCartEvent = (e: string) => {
  cartList.push(e);
  if (topbar.current) topbar.current.callRender();
}

const Layout: FC<Props> = (props: Props) => {
  console.log('%c⚠️ RENDER ENTIRE APP', 'background: #f44336;color:#fff;padding:5px;font-weight:bold; border-radius:5px');

  // EFECTO DE RIPPLES
  useRipples();

  // ESTADOS Y CONEXTO DEL COMPONENTE
  const { lang } = useContext(langContext.langContext);
  const defaultUser: userState = { user: null, online: false, logout: false };
  const [user, setUser]: [userState, Dispatch<SetStateAction<userState>>] = useState(defaultUser);
  topbar = useRef(null);

  // DETECTAR CAMBIOS EN EL INCIO DE SESION
  useAuth((getUser: User) => {
    if (layoutHandler === 0 && !getUser) return 0;
    setUser({ user: getUser, online: user.online, logout: user.logout })
    layoutHandler++;
  });

  useEffect(() => {
    // ESTADO DE CONEXION
    const online = navigator.onLine;

    // MOSTRAR ALERTA CUANDO RECUPERO LA CONEXION
    window.addEventListener("online", () => showToast({ text: lang.toast.online }));
    // MOSTRAR ALERTA CUANDO PERDIO LA CONEXION
    window.addEventListener("offline", () => showToast({ text: lang.toast.offline }));

    // DETECTAR CONEXION AL ENTRAR
    if (!online) showToast({ text: lang.toast.online });
  });

  return (
    <>
      <nav>
        <Topbar ref={topbar} placeHolder={lang.placeholders.searchInput} />
        <Drawer strings={lang.general} user={user.user} />
      </nav>

      <appContext.appContext.Provider value={{ lang, theme: "light", user: user.user, addToCartEvent, cartList }}>
        {user.user && <Verified strings={lang.verified} show={user.user.providerData[0]?.providerId === "facebook.com" ? true : user.user.emailVerified} />}
        <main>
          {props.children}
        </main>
      </appContext.appContext.Provider>

      <Footer {...lang.footer} />

      <style jsx>{`
          nav {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
            background: var(--backgrounds);
          }  

          main{
            overflow:hidden;
          }

          @media screen and (min-width:460px){
            main{
              width:90%;
              margin:0 auto;
              overflow:unset;
            }
          }
      `}</style>
    </>
  );
};
export default Layout;
