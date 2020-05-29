// COMPONENTES
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

// CONTEXTO
import { langContext } from 'Ctx'

// JSON DE LENGUAJE Y META TAGS
import Langs from 'Strings'
import Meta from 'components/Meta'

// PROPIEDADES
interface DocProps {
	lang: ILangPackage
	langCode: string
}

class IBoxDoc extends Document<DocProps> {
	static async getInitialProps(ctx: DocumentContext) {
		// OBTENER PROPIEDADES INICIALES
		const initialProps = await Document.getInitialProps(ctx)

		// OBTENER CÓDIGO DEL LENGUAJE EN EL SERVIDOR O CLIENTE
		const lang: string | undefined = ctx.req
			? ctx.req.headers['accept-language']?.substr(0, 2)
			: process.browser
			? navigator.language.substr(0, 2)
			: 'es'

		// ASIGNAR EL CÓDIGO DEL LENGUAJE AL OBJETO JSON DE LOS TEXTOS
		return {
			...initialProps,
			// @ts-ignore
			lang: lang ? Langs[lang] : Langs.es,
			langCode: lang || 'es',
		}
	}

	render() {
		return (
			<Html lang={this.props.langCode}>
				<head
					dangerouslySetInnerHTML={{
						__html: '<!-- Creado por Alex Santos ceo@ibox.gt -->',
					}}
				/>
				<Head>
					<Meta
						title={this.props.lang.general.app.title}
						desc={this.props.lang.general.app.description}
					/>
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
