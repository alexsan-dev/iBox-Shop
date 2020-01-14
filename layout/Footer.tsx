// PROPIEDADES
interface Props {
  store: boolean;
  blob_1: string;
  blob_2: string;
  title: string;
  text: string;
  text_1: string;
  text_2: string;
  text_3: string;
  rights_1: string;
  rights_2: string;
  button_1: string;
  button_2: string;
  button_3: string;
}

const Footer: React.FC<Props> = (props: Props) => {
  return (
    <footer>
      {props.store ? (
        <div className="st">
          <img src={require("../assets/store.png")} alt="iBox Store" />
          <span>
            {props.blob_1}{" "}
            <a href="mailto:cto@ibox.gt" title="Cto mail">
              {props.blob_2}
            </a>
          </span>
        </div>
      ) : ("")}

      <div id="footerWave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--parraf)"
            fillOpacity="1"
            d="M0,192L48,165.3C96,139,192,85,288,106.7C384,128,480,224,576,224C672,224,768,128,864,106.7C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div id="links">
        <h2>
          {props.title}
          <i className="uil uil-phone"></i>
        </h2>

        <p>{props.text}</p>

        <a href="https://facebook.com/shops.ibox" target="_blank" rel="noreferrer" title="FacebookPage">
          <i className="uil uil-facebook-f"></i> iBox Shop
        </a>
        <a href="mailto:ceo@ibox.gt" title="Email">
          <i className="uil uil-envelope"></i> Email
        </a>
      </div>

      <div id="fText">
        <h2>{props.rights_1}</h2>
        <span>
          {props.rights_2} {new Date().getFullYear()}
        </span>
      </div>

      <style jsx>{`
          footer {
            margin-top: -75px;
            position: relative;
            z-index: 2;
          }

          footer div {
            background: var(--parraf);
            padding: 20px;
            color: var(--backgrounds);
          }

          footer .st {
            width: 306px;
            position: absolute;
            left: -30px;
            top: -20px;
            display: flex;
            align-items: flex-start;
            background: transparent;
          }

          .st > span {
            background: var(--third);
            padding: 15px 20px 15px 30px;
            position: relative;
            left: -20px;
            border-radius: 10px;
          }

          footer .st > img {
            position: relative;
            top: -50px;
            width: 120px;
            z-index: 2;
          }

          footer .icon-facebook {
            color: var(--backgrounds);
            font-size: 1em;
            position: relative;
            top: 2px;
            left:-5px;
          }

          footer #links {
            padding-bottom: 0;
          }

          footer h2 {
            color: var(--backgrounds);
            margin-bottom:10px;
            width:110%;
            display:block;
          }

          footer #fText h2 {
            font-size: 1em;
          }

          footer a {
            color: var(--backgrounds);
            text-decoration: none;
          }

          footer a[target="_blank"] {
            margin-right: 20px;
          }

          footer a i {
            margin-right: 7px;
          }

          footer p {
            margin:10px 0;
          }

          footer #links .faq {
            margin:10px 0 20px 0;
            font-weight:500;
            width:100%;
            display:block;
          }

          footer #links .fqs{
            margin-bottom:0px;
          }

          footer a #ficon {
            position: relative;
            top: -30px;
          }

          footer span {
            font-size: 0.8em;
          }

          footer #footerWave{
            width:100%;
            overflow:hidden;
            padding:0;
            margin:0;
            background:transparent;
          }

          footer svg {
            margin-bottom: -30px;
            width: calc(100% + 20px);
          }

          @media screen and (max-width: 355px) {
            .st > span {
              display: none;
            }
            footer svg {
              margin-bottom: -25px;
              width: calc(100% + 10px);
            }
          } 

          @media screen and (min-width:460px){
            footer{
              width:90%;
              left:5%;
            }
            
            footer .st {
              left: -40px;
              top: -15px;
            }
          }

      `}</style>
    </footer>
  );
};
export default Footer;
