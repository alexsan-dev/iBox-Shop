// CONTEXTO DEL COMPONENTE
import { NextPage } from "next";
import { useContext } from "react";
import appContext from "../utils/appContext";

// PAGINAS Y COMPONENTES
import Profile from "../components/Profile";
import Logins from "../components/Logins";

const AccountPage: NextPage = () => {
  // OBTENER USUARIO DEL CONTEXTO
  const { user } = useContext(appContext.appContext);

  // RETORNAR PAGINA PROFILE SI EXISTE USUARIO SINO ASIGNAR PAGINA DE LOGINS
  return user ? <Profile user={user} /> : <Logins />;
};

export default AccountPage;