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
	theme: string
	cartList: string[]
	user: UserData | null
	productList: IProduct[] | undefined
	refreshApp: (refresh: boolean) => any
	addToCartEvent: (key: string, mode: boolean, reset?: boolean) => any
}
const defaultAppContext: AppContext = {
	lang: LangsPackages.es,
	user: null,
	theme: 'light',
	refreshApp: () => null,
	addToCartEvent: () => null,
	cartList: [],
	productList: [],
}
const appContext: React.Context<AppContext> = React.createContext(defaultAppContext)

export { langContext, appContext }
