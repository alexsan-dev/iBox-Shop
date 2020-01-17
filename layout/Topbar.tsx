// HOOKS Y NAVEGACION
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import Link from 'next/link';

// PROPIEDADES Y EVENTOS
interface Props { placeHolder: string }
let renderManager: Function = () => { };

const Topbar: React.FC<Props> = (props: Props, ref: any) => {
  // FUNCION IMPERATIVA PARA CALLBAKC EXTERNO
  useImperativeHandle(ref, () => ({
    callRender() { renderManager(); }
  }))

  useEffect(() => {
    // SELECCIONAR TOPBAR, INPUT DE MOSTRAR Y OCULTAR BUSQUEDA, INPUT DE BUSQUEDA Y BOTON DE AGREGAR AL CARRITO
    const topbar: HTMLDivElement | null = document.querySelector(".topbar") as HTMLDivElement;
    const searchToggle: HTMLInputElement | null = document.getElementById("search-toggle") as HTMLInputElement;
    const search: HTMLInputElement | null = document.getElementById("search") as HTMLInputElement;
    const addToCartBtn: HTMLButtonElement | null = document.querySelector(".addToCartBtn") as HTMLButtonElement;

    // REACCIONAR CUANDO SE AGREGA UN PRODUCTO AL CARRITO
    renderManager = () => {
      if (addToCartBtn) {
        addToCartBtn.style.transform = "scale(2)";
        addToCartBtn.style.backgroundColor = "var(--primary)";
        setTimeout(() => addToCartBtn.style.transform = "scale(1)", 300);
        setTimeout(() => addToCartBtn.style.backgroundColor = "transparent", 600);
      }
    };


    // AGREGAR SOMBRA AL TOPBAR CUANDO SE HACE SCROLL
    window.addEventListener("scroll", () => {
      if (window.scrollY > 15 && topbar)
        topbar.style.boxShadow = "0 0 10px rgba(0,0,0,.4)";
      else if (topbar) topbar.style.boxShadow = "none";
    });

    // LIMPIAR O SELECIONAR INPUT DE BUSQUEDA
    searchToggle?.addEventListener("click", () => {
      const toggle: boolean | undefined = searchToggle?.checked;
      if (toggle) search.focus();
      else
        setTimeout(() => {
          if (search) search.value = "";
        }, 300);
    });
  }, [])

  return (
    <>
      <input type="checkbox" id="search-toggle" name="search-toggle" />
      <label htmlFor="search-toggle" className="topbarShadow ssf"></label>

      <div className="topbar">
        <label htmlFor="drawer-toggle" className="uil uil-list-ul" id="menuBtn"></label>
        <Link href="/">
          <div id="brandLogo">
            <img src={require("../assets/logo.svg")} alt="Logo" />
          </div>
        </Link>
        <div id="navbtns">
          <label htmlFor="search-toggle" className="uil uil-search waves waves-dark"></label>
          <i className="uil uil-shopping-cart-alt addToCartBtn waves waves-dark"></i>
        </div>
        <div id="searchBar">
          <label htmlFor="search-toggle" className="uil uil-arrow-left waves waves-dark"></label>
          <input type="search" placeholder={props.placeHolder} id="search" />
        </div>
      </div>

      <style jsx>{`
          .topbar {
            background: var(--primary);
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            display: flex;
            z-index: 2;
            align-items: center;
            justify-content: space-between;
            padding: 5px;
            transition: box-shadow 0.3s ease-in-out;
          }

          .topbar i,
          .topbar label {
            font-size: 25px;
            color: #fff;
            overflow: hidden;
            border-radius: 100%;
            margin: 0;
            height: 45px;
            width: 45px;
            position: relative;
          }
          .topbar .addToCartBtn{
            transition:transform 0.3s ease-in-out, background 0.3s ease-in-out;
          }

          .topbar i::before,
          .topbar label::before {
            position: absolute;
            top: 50%;
            left: 4px;
            transform: translate(0%, -50%);
          }

          .topbar #navbtns {
            padding: 0;
            display: flex;
            margin: 0;
            position: relative;
          }

          .topbar #menuBtn {
            margin-left: 5px;
          }

          .topbarShadow {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 2;
            background: rgba(0, 0, 0, 0.5);
            transform: scale(0);
            transition: opacity 0.3s ease-in-out, transform 0s linear 0.3s;
          }

          #search-toggle:checked ~ .topbar #navbtns label:nth-child(1) {
            transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
            transform: translateX(45px);
            color: var(--text);
          }

          #search-toggle:checked ~ .topbar #searchBar {
            transition: opacity 0.3s ease-in-out, transform 0s linear 0s;
            opacity: 1;
            transform: scale(1);
          }

          #search-toggle:checked ~ .ssf {
            transition: opacity 0.3s ease-in-out, transform 0s linear 0s;
            opacity: 1;
            transform: scale(1);
          }

          .topbar #navbtns label:nth-child(1) {
            z-index: 4;
            transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
          }

          .topbar #searchBar {
            opacity: 0;
            transform: scale(0);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--backgrounds);
            display: flex;
            align-items: center;
            z-index: 2;
            transition: opacity 0.3s ease-in-out, transform 0s linear 0.3s;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
          }

          .topbar #searchBar label {
            color: var(--text);
            font-size: 2.5em;
            margin-right: 10px;
          }

          .topbar #searchBar input {
            border: none;
            outline: none;
            box-shadow: none;
            font-size: 18px;
            padding: 17px 0;
            width: calc(100% - 97px);
            font-weight: 400;
          }

          .topbar #searchBar input::-webkit-search-cancel-button {
            -webkit-appearance: none;
          }

          .topbar #brandLogo {
            width: 50px;
            height: 50px;
            overflow: hidden;
            position: absolute;
            left: 50px;
            display: flex;
            align-items: center;
          }

          .topbar #brandLogo img {
            width: 100%;
          }

          #search-toggle {
            display: none;
          }

          @media screen and (min-width:460px){
            .topbar{
              width:90%;
              left:5%;
            }
          }
			
			`}</style>
    </>
  )
}

export default forwardRef(Topbar);