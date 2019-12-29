import Document, { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/Meta';

class iBoxDoc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <head dangerouslySetInnerHTML={{ __html: '<!-- Creado por Alex Santos ceo@ibox.gt -->' }}></head>
        <Head>
          <Meta title="iBox - ¡Tienda en línea de accesorios y electrónica!" desc="Somos una empresa dedicada a la venta de accesorios 📱 y electrónica en tiendas online. Entra y conoce nuestra amplia gama de productos para ti 🔥." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default iBoxDoc;
