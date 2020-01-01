import Store from '../assets/store.png';

const Footer = props => {
   return (
      <footer>
         {props.store ? (

            <div className="st">
               <img src={Store} alt='iBox Store' />
               <span>Contacta con el área técnica 💻 <a href="mailto:cto@ibox.gt" title="Cto mail">cto@ibox.gt</a></span>
            </div>

         ) : ''}

         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--parraf)" fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,106.7C384,128,480,224,576,224C672,224,768,128,864,106.7C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

         <div id="links">
            <h2>Contacta con nosotros <i className="uil uil-phone"></i></h2>
            <p>Si tienes algún comentario envianos un mensaje , visita también nuestra página en Facebook. 👍</p>
            <a href="https://facebook.com/shops.ibox" target="_blank" rel="noreferrer" title="FacebookPage"><i className="uil uil-facebook-f"></i> iBox Shop</a>
            <a href="mailto:ceo@ibox.gt" title="Email"><i className="uil uil-envelope"></i> Email</a>
         </div>

         <div id="fText">
            <h2>Hecho con ❤️ en Guatemala 🇬🇹</h2>
            <span>Todos los derechos reservados iBox® {new Date().getFullYear()}</span>
         </div>
      </footer>
   )
}
export default Footer;
