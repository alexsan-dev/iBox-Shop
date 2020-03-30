// HOOKS Y CONTEXTO DEL COMPONENTE
import { useGetAllProducts } from "../utils/hooks";
import { useContext, useEffect } from "react";
import { NextPage } from "next";
import appContext from "../utils/appContext";

// PAGINAS Y COMPONENTES
import Profile from "../components/Profile";
import Logins from "../components/Logins";

const AccountPage: NextPage = () => {
  // OBTENER USUARIO DEL CONTEXTO
  const { user } = useContext(appContext.appContext);

  // DESCARGAR PRODUCTOS
  useEffect(() => { useGetAllProducts() }, [])

  // RETORNAR PAGINA PROFILE SI EXISTE USUARIO SINO ASIGNAR PAGINA DE LOGINS
  return user ? <Profile /> : <Logins />;
};

export default AccountPage;