type ShareData = {
	title?: string
	text?: string
	url?: string
}

interface Navigator {
	share: (data?: ShareData) => Promise<void>
}

interface OrderCart {
	sum: number
	productsFilter: IProduct[] | null
	multArry: number[]
}

// TIPOS E INTERFACES
interface IForms {
	displayName: string
	email: string
	address: string
	phone: number
	nit: string
	wa?: boolean
}

interface IProductDB {
	id?: string
	product: IProduct | any
}

interface String {
	format(): string
}

interface IProductPoints {
	pid: string
	points: number[]
	comments: string[]
}

interface IProduct {
	color: string
	description: string
	name: string
	price: number
	tag: string[]
	key: string
	img: string
	brand: string
	specs: string
	points: IProductPoints
}

interface IUserDB {
	id?: number
	user: UserData | null
}

interface IPromoCodes {
	code: string
	price: number | string
}

interface UserData {
	provider?: string | null
	displayName: string | null
	email: string | null
	photoURL: string | null
	uid?: string
	address?: string
	phone?: number
	nit?: string
	department?: string
	promoCodes?: {
		code: string
		used: boolean
	}[]
	history?: {
		cartList: string[]
		date: string
	}[]
}

interface InputProps {
	label: string
	type: string
	name: string
	helper: string
	icon: string
	value: Function
	defValue?: string | number
	maxLength?: number
}

interface InputGetProps {
	name: string
	text: string
}

interface CardProps {
	title: string
	img: string
	text: string
	price: number
	code: string
	scrollPosition?: any
	pid: string
}

interface ILang {
	es: ILangPackage
	en: ILangPackage
}

interface ILangPackage {
	general: ILangGeneral
	placeholders: ILangPlaceholders
	alert: ILangAlert
	verified: ILangVerified
	errorPage: ILangErrorPage
	indexPage: ILangIndexPage
	accountPage: ILangAccountPage
	shopPage: ILangShopPage
	cartPage: ILangCartPage
	profilePage: ILangProfilePage
	footer: ILangFooter
	loading: ILangLoading
	splash: ILangSplash
	toast: ILangToast
	errors: ILangErrors
}

interface ILangGeneral {
	app: {
		name: string
		description: string
		nameCom: string
		nameShort: string
		slogan: string
		title: string
		greeting: string
		navDivider: string
		update: {
			title: string
			text: string
			button: string
		}
		share: {
			shareText: string
			shareTextAlt: string
			name: string
		}
	}
	buttons: {
		logout: string
		addToCart: string
		share: string
		download: string
		back: string
	}
	routes: {
		home: string
		shop: string
		account: string
		cart: string
	}
	logout: {
		title: string
		text: string
	}
}
interface ILangPlaceholders {
	productShadowText_1: string
	productShadowText_2: string
	searchPlaceholder: string
	searchInput: string
}
interface ILangAlert {
	confirm: string
	cancel: string
}
interface ILangVerified {
	alertTitle: string
	alertText: string
	title: string
	text: string
	button: string
}
interface ILangErrorPage {
	title: string
	description_1: string
	description_2: string
	button: string
}
interface ILangIndexPage {
	header: {
		button: string
		text: string
		title: string
	}
	slider: {
		title: string
		text: string
		button: string
		electroCatTitle: string
		electroCatText: string
		devicesCatTitle: string
		devicesCatText: string
		accessCatTitle: string
		accessCatText: string
	}
	middle: {
		blob_1: string
		blob_2: string
		button_1: string
		button_2: string
		title: string
		text: string
	}
	recent: {
		title: string
		text: string
		button: string
	}
}
interface ILangInputFields {
	field: string
	helper: string
}
interface ILangAccountPage {
	title: string
	text: string
	alreadyAccount: string
	confirm_1: string
	privacy_1: string
	privacy_2: string
	header: {
		docTitle: string
		description: string
		title: string
		text: string
	}
	forms: {
		forgot: {
			title: string
			helper: string
			text: string
			buttonText: string
		}
		alerts:{
			loading: string
		}
		inputs: {
			email: inputFields
			user: inputFields
			pass: inputFields
		}
	}
	alerts: {
		title: string
		text_1: string
		text_2: string
	}
	buttons: {
		createAccount: string
		login: string
		fbLoginText: string
		gLoginText: string
	}
}
interface ILangProfilePage {
	title: string
	span: string
	history: {
		title: string
		text: string
		empty: string
		button: string
	}
	info: {
		title: string
		text: string
		button: string
		confirmUpdate: {
			alert: {
				title: string
				text: string
			}
		}
		inputs: {
			address: inputFields
			phone: inputFields
			nit: inputFields
		}
	}
}
interface ILangShopPage {
	header: {
		docTitle: string
		description: string
		title: string
		text: string
	}
	shopList: {
		title: string
		text: string
	}
	productPage: {
		header: {
			text: string
		}
		description: {
			pointsDefault: string
			code: string
			points: string
			tags: string
			brand: string
			color: string
		}
	}
}
interface ILangCartPage {
	header: {
		docTitle: string
		description: string
		title: string
		titleExt: string
		text: string
	}
	cards: {
		total: string
	}
	summary: {
		button: string
		prevButton: string
		total: string
		alerts: {
			title: string
			text: string
		}
		banner: {
			title: string
			text: string
			pd: string
			st: string
		}
		buy: {
			alert: {
				title: string
				text: string
			}
		}
		sendForm: {
			banner: {
				title: string
				text: string
			}
			button: string
			info: {
				title: string
				fields: {
					name: string
					nit: string
					email: string
					total: string
					address: string
				}
			}
		}
		notFound: {
			title: string
			text: string
		}
		forms: {
			title: string
			text: string
			promo: {
				title: string
				text: string
				helper: string
			}
			errors: {
				title: string
				text: string
				text_1: string
				text_2: string
			}
			inputs: {
				promo: ILangInputFields
				name: ILangInputFields
				email: ILangInputFields
				address: ILangInputFields
				phone: ILangInputFields
				nit: ILangInputFields
			}
		}
	}
}
interface ILangFooter {
	title: string
	text: string
	blobs: {
		contact: string
		email: string
	}
	buttons: {
		request: string
		comment: string
		sendMsg: string
	}
	faq: {
		quest_1: string
		quest_2: string
		quest_3: string
	}
	rights: {
		main: string
		reserved: string
	}
}
interface ILangLoading {
	title: string
	text: string
}
interface ILangSplash {
	title: string
	text: string
}
interface ILangToast {
	online: string
	button: string
	offline: string
}
interface ILangErrors {
	popup_closed_by_user: string
	app_deleted: string
	app_not_authorized: string
	argument_error: string
	invalid_api_key: string
	invalid_user_token: string
	network_request_failed: string
	operation_not_allowed: string
	requires_recent_login: string
	too_many_requests: string
	unauthorized_domain: string
	user_disabled: string
	user_token_expired: string
	web_storage_unsupported: string
	account_exists_with_different_credential: string
	credential_already_in_used: string
	email_already_in_use: string
	user_not_found: string
	weak_password: string
	invalid_email: string
	wrong_password: string
	invalid_verification_code: string
	invalid_verification_id: string
	captcha_check_failed: string
	invalid_phone_number: string
	missing_phone_number: string
	quota_exceeded: string
	defaultVal: string
}
