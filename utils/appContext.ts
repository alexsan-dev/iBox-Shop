// TIPOS DE DATOS
import { User } from "firebase";
import React from "react";

// JSON DE LENGUAJES
import Langs from "../lang/strings.json";

// HOC PARA LENGUAJE DE LA APLICACION
interface langContext { lang: any; }
const defaultLangContext: langContext = { lang: Langs.es };
const langContext: React.Context<langContext> = React.createContext(
  defaultLangContext
);

// HOC GENERAL DE LA APLICACION
interface appContext {
  lang: any;
  user: userModel | User | null;
  theme: string;
  addToCartEvent: Function;
  cartList: string[];
}
const defaultAppContext: appContext = {
  lang: Langs.es,
  user: null,
  theme: "light",
  addToCartEvent: () => { },
  cartList: []
}
const appContext: React.Context<appContext> = React.createContext(
  defaultAppContext
)

export default { langContext, appContext };
