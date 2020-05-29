// TIPOS DE DATOS
import React from 'react'

// JSON DE LENGUAJES
import LangsPackages from 'Strings'

// HOC PARA LENGUAJE DE LA APLICACIÓN
interface LangContext {
	lang: ILangPackage
}

const defaultLangContext: LangContext = { lang: LangsPackages.es }
const langContext: React.Context<LangContext> = React.createContext(defaultLangContext)

// HOC GENERAL DE LA APLICACIÓN
interface AppContext {
	lang: ILangPackage
	user: userModel | null
	theme: string
	addToCartEvent: (key: string, mode: boolean, reset?: boolean) => any
	cartList: string[]
	productList: product[] | []
}
const defaultAppContext: AppContext = {
	lang: LangsPackages.es,
	user: null,
	theme: 'light',
	addToCartEvent: () => null,
	cartList: [],
	productList: [],
}
const appContext: React.Context<AppContext> = React.createContext(defaultAppContext)

export { langContext, appContext }
