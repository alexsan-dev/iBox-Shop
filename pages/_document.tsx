// COMPONENTES
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// CONTEXTO
import langContext from '../utils/appContext';

// JSON DE LENGUAJE Y META TAGS
import Langs from '../lang/strings.json';
import Meta from '../components/Meta';

class iBoxDoc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // OBTENER PROPIEDADES INICIALES
    const initialProps = await Document.getInitialProps(ctx);

    // OBTENER CODIGO DEL LENGUAJE EN EL SERVIDOR O CLIENTE
    const lang: string | undefined = ctx.req ? ctx.req.headers["accept-language"]?.substr(0, 2) : process.browser ? navigator.language.substr(0, 2) : "es";

    // ASIGNAR EL CODIFO DEL LENFUAJE AL OBJETO JSON DE LOS TEXTOS
    // @ts-ignore
    return { ...initialProps, lang: lang ? Langs[lang] : Langs.es, langCode: lang || "es" }
  }

  render() {
    return (
      // @ts-ignore
      <Html lang={this.props.langCode}>
        <head dangerouslySetInnerHTML={{ __html: '<!-- Creado por Alex Santos ceo@ibox.gt -->' }}></head>
        <Head>
          {/* 
          // @ts-ignore */}
          <Meta title={this.props.lang.general.appTitle} desc={this.props.lang.appDescription} />
        </Head>
        <body>
          {/* 
          // @ts-ignore */}
          <langContext.langContext.Provider value={{ lang: this.props.lang }}>
            <Main />
          </langContext.langContext.Provider>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default iBoxDoc;