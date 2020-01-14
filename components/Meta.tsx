// PROPIEDADES 
interface Props { title: string; desc: string; }

const Meta: React.FC<Props> = (props: Props) => {
  return (
    <>
      <title>{props.title}</title>
      <meta name="author" content="Alex Santos | iBox Shop®" />
      <meta name="Robots" content="follow" />
      <meta name="description" content={props.desc} />
      <meta
        name="keywords"
        content="accesorios, compras en linea, tiendas en linea, venta de celulares, ibox"
      />
      <meta name="theme-color" content="rgb(47, 109, 153)" />
      <meta name="MobileOptimized" content="yes" />
      <meta name="HandheldFriendly" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={props.title} />
      <link rel="apple-touch-icon" href="./favicon.ico" />
      <link rel="shortcut icon" href="./favicon.ico" />
      <link rel="favicon" href="./favicon.ico" />
      <link rel="manifest" href="./manifest.json" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:image" content="https://ibox.gt/images/banner.jpg" />
      <meta property="og:image:secure_url" content="https://ibox.gt/images/banner.jpg" />
      <meta property="og:url" content="https://ibox.gt" />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="573715776764507" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@https://ibox.gt" />
      <meta name="twitter:creator" content="@iBox" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.desc} />
      <meta name="twitter:image" content="https://ibox.gt/images/banner.jpg" />
    </>
  );
};

export default Meta;