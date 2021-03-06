// COMPONENTES
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

// CONTEXTO
import { langContext } from 'Ctx'

// JSON DE LENGUAJE Y META TAGS
import Langs from 'Strings'

// PROPIEDADES
interface DocProps {
	lang: ILangPackage
	langCode: string
}

class IBoxDoc extends Document<DocProps> {
	static async getInitialProps(ctx: DocumentContext) {
		// OBTENER PROPIEDADES INICIALES
		const initialProps = await Document.getInitialProps(ctx)

		// ASIGNAR EL CÓDIGO DEL LENGUAJE AL OBJETO JSON DE LOS TEXTOS
		return {
			...initialProps,
			lang: Langs.es,
			langCode: 'es',
		}
	}

	render() {
		return (
			<Html lang={this.props.langCode}>
				<Head>
					<meta name='author' content='Alex Santos | iBox Shop®' />
					<meta name='Robots' content='follow' />
					<meta name='theme-color' content='rgb(47, 109, 153)' />
					<meta name='msapplication-TileColor' content='rgb(47, 109, 153)' />
					<meta name='MobileOptimized' content='yes' />
					<meta name='HandheldFriendly' content='yes' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
					<link rel='apple-touch-icon' href='/favicon.ico' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<link rel='favicon' href='/favicon.ico' />
					<link rel='manifest' href='/manifest.json' />
					<meta property='og:type' content='website' />
					<meta property='fb:app_id' content='573715776764507' />
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:creator' content='@iBox' />
				</Head>
				<body>
					<langContext.Provider value={{ lang: this.props.lang }}>
						<Main />
					</langContext.Provider>
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default IBoxDoc
