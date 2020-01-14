// CONTEXTO DEL COMPONENTE
import { NextPage } from "next";
import { useContext } from "react";
import appContext from "../utils/appContext";

// PAGINAS Y COMPONENTES
import Loading from "../components/Loading";
import Profile from "../components/Profile";
import Logins from "../components/Logins";

// COMPONENTE INICIAL
let page: JSX.Element = <Loading />;

const AccountPage: NextPage = () => {
  // OBTENER USUARIO DEL CONTEXTO
  const { user } = useContext(appContext.appContext);

  // ASIGNAR PAGINA PROFILE SI EXISTE USUARIO SINO ASIGNAR PAGINA DE LOGINS
  if (user) page = <Profile user={user} />;
  else page = <Logins />;

  // RETORNAR PAGINA RESULTANTE
  return page;
};

export default AccountPage;