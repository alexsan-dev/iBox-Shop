// TIPOS DE DATOS
import { User } from "firebase";
import React from "react";

// JSON DE LENGUAJES
import LangsPackages from "../lang/strings.json";

// HOC PARA LENGUAJE DE LA APLICACIÓN
interface langContext { lang: langType; }
// @ts-ignore
const defaultLangContext: langContext = { lang: LangsPackages.es };
const langContext: React.Context<langContext> = React.createContext(defaultLangContext);

// HOC GENERAL DE LA APLICACIÓN
interface appContext {
  lang: langType;
  user: userModel | User | null;
  theme: string;
  addToCartEvent: Function;
  cartList: string[];
  productList: product[] | [];
}
const defaultAppContext: appContext = {
  // @ts-ignore
  lang: LangsPackages.es,
  user: null,
  theme: "light",
  addToCartEvent: () => { },
  cartList: [],
  productList: []
}
const appContext: React.Context<appContext> = React.createContext(
  defaultAppContext
)

export default { langContext, appContext };
