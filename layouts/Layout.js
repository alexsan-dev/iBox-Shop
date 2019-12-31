import { useEffect, useState } from "react";
import { useLogout, useAuth } from "../utils/hooks";
import Router from 'next/router'
import Link from "next/link";
import Verified from '../components/Verified';
import Toast from '../components/Toast';
import Logo from "../assets/logo.svg";

const Layout = props => {
   const [user, setUser] = useState({user:null, online:false});
   useAuth(user => setUser({user, online:user.online}));

   useEffect(() => {
      // GLOBALS
      const routes = document.querySelectorAll(".routes");
      const drawerToggle = document.getElementById("drawer-toggle");
      const drawerHook = document.getElementById("sideHook");
      const topbar = document.querySelector(".topbar");
      const toast = document.querySelectorAll(".toast");
      const search = document.getElementById("search");
      const searchToggle = document.getElementById("search-toggle");
      const shareBtn = document.querySelector(".shareBtn");

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

      if (navigator.share) {
         shareBtn.addEventListener("click", () => {
            navigator.share({
               title: 'iBox Shop',
               text: 'Entra a esta tienda, te gustara. ✨👌!',
               url: window.location.origin
            })
            .then(() => console.log('Successfully share'))
            .catch((error) => console.log('Error sharing', error));
         })
      } else shareBtn.style.display = "none";

      window.addEventListener('online', () => {
         toast[0].style.transform = "translateY(100%)";
         toast[1].style.transform = "translateY(0)";
         setTimeout(() => toast[1].style.transform = "translateY(100%)", 5000);
      })
      window.addEventListener('offline', () => {
         toast[1].style.transform = "translateY(100%)";
         toast[0].style.transform = "translateY(0)";
         setTimeout(() => toast[0].style.transform = "translateY(100%)", 5000);
      })

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
                  <span>iBox Shop® App (v0.3)</span>
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

                  {user.user && <li><Link href="/"><button onClick={useLogout} className="white waves waves-dark"><i className="material-icons">exit_to_app</i> Cerrar Sesión</button></Link></li>}

                  <li><button className="white waves waves-dark shareBtn"><i className="material-icons">share</i> Compartir</button></li>

                  <li><button className="white waves waves-dark"><i className="material-icons">arrow_downward</i> Descargar</button></li>

               </ul>
            </div>
            <div id="sideHook"></div>
         </nav>
         {user.user && <Verified show={user.user.providerData[0].providerId === "facebook.com" ? true : user.user.emailVerified} />}
         {props.children}
         <Toast text="Sin conexion a internet"/>
         <Toast text="De nuevo en linea"/>
      </>
   )
}

export default Layout;
