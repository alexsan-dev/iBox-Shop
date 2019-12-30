import { useEffect, useState } from "react";
import { useLogout, useAuth } from "../utils/hooks";
import Router from 'next/router'
import Link from "next/link";
import Verified from '../components/Verified';
import Logo from "../assets/logo.svg";

const Layout = props => {
   const [user, setUser] = useState(null);
   useAuth(user => setUser(user));

   useEffect(() => {
      // GLOBALS
      const routes = document.querySelectorAll(".routes");
      const drawerToggle = document.getElementById("drawer-toggle");
      const drawerHook = document.getElementById("sideHook");
      const topbar = document.querySelector(".topbar");
      const search = document.getElementById("search");
      const searchToggle = document.getElementById("search-toggle");

      // DRAWER ROUTER
      function setActive(url) {
         setTimeout(() => {
            Array.prototype.forEach.call(routes, function (b) {
               const route = b.textContent.split(" ")[1].toLowerCase();
               b.classList.remove("blue");
               b.classList.add("white");
               if (url.substr(1) === route) {
                  b.classList.remove("white");
                  b.classList.add("blue");
               }
               if (url.substr(1) === "") {
                  routes[0].classList.remove("white");
                  routes[0].classList.add("blue");
               }
            });
         }, 600)
         setTimeout(() => drawerToggle.checked = false, 300);
      }

      Router.events.on('routeChangeComplete', setActive);
      setActive(Router.pathname);

      // NAVBAR
      window.addEventListener("scroll", () => {
         if (window.scrollY > 15) topbar.style.boxShadow = "0 0 10px rgba(0,0,0,.4)";
         else topbar.style.boxShadow = "none";
      });

      // SEARCH BAR
      searchToggle.addEventListener("click", () => {
         const toggle = searchToggle.checked;
         if (toggle) search.focus();
         else setTimeout(() => search.value = null, 300);
      });

   });
   return (
      <>
         <nav>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
            <input type="checkbox" id="search-toggle" name="search-toggle" />
            <div className="topbar">
               <label htmlFor="drawer-toggle" className="material-icons" id="menuBtn">menu</label>
               <Link href="/"><div id="brandLogo"><img src={Logo} alt="Logo" /></div></Link>
               <div id="navbtns">
                  <label htmlFor="search-toggle" className="material-icons waves waves-dark">search</label>
                  <i className="material-icons waves waves-dark">shopping_cart</i>
               </div>
               <div id="searchBar">
                  <label htmlFor="search-toggle" className="material-icons waves waves-dark">arrow_back</label>
                  <input type="search" placeholder="Buscar productos" id="search" />
               </div>
            </div>
            <label htmlFor="search-toggle" className="drawerShadow ssf"></label>
            <label htmlFor="drawer-toggle" className="drawerShadow sbf"></label>
            <div id="drawer">
               <div id="drawerHead">
                  <span>iBox® App (v0.3)</span>
                  <p>Tu comodidad en una caja</p>
               </div>
               <ul>
                  <li><Link href="/" passHref><a className="white routes waves waves-dark btn" title="Inicio"><i className="material-icons">home</i> Inicio</a></Link></li>
                  <li><Link href="/tienda" passHref><a className="btn white routes waves waves-dark" title="Tienda"><i className="material-icons">store</i> Tienda</a></Link></li>
               </ul>
               <hr />
               <span className="dividerTitle">Aplicación</span>
               <ul>
                  <li><Link href="/cuenta" passHref><a className="white routes waves waves-dark btn" title="Cuenta"><i className="material-icons">person_add</i> Cuenta</a></Link></li>

                  {user && <li><Link href="/"><button onClick={useLogout} className="white waves waves-dark"><i className="material-icons">exit_to_app</i> Cerrar Sesión</button></Link></li>}

                  <li><button className="white waves waves-dark"><i className="material-icons">share</i> Compartir</button></li>

                  <li><button className="white waves waves-dark"><i className="material-icons">arrow_downward</i> Descargar</button></li>

               </ul>
            </div>
            <div id="sideHook"></div>
         </nav>
         {user && <Verified show={user.providerData[0].providerId==="facebook.com"?true:user.emailVerified}/>}
         {props.children}
      </>
   )
}

export default Layout;
