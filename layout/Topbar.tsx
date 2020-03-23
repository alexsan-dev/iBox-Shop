// HOOKS Y NAVEGACIÓN
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import Link from 'next/link';

// PROPIEDADES Y EVENTOS
interface Props { placeHolder: string }
let renderManager: Function = () => { };

const TopBar: React.FC<Props> = (props: Props, ref: any) => {
  // FUNCIÓN IMPERATIVA PARA CALLBACK EXTERNO
  useImperativeHandle(ref, () => ({
    callRender(count: number) { renderManager(count); }
  }))

  useEffect(() => {
    // SELECCIONAR TOPBAR, INPUT DE MOSTRAR Y OCULTAR BÚSQUEDA, INPUT DE BÚSQUEDA Y BOTÓN DE AGREGAR AL CARRITO
    const topbar: HTMLDivElement | null = document.querySelector(".topbar") as HTMLDivElement;
    const searchToggle: HTMLInputElement | null = document.getElementById("search-toggle") as HTMLInputElement;
    const search: HTMLInputElement | null = document.getElementById("search") as HTMLInputElement;
    const addToCartBtn: HTMLButtonElement | null = document.querySelector(".addToCartBtn") as HTMLButtonElement;
    const shopCount: HTMLButtonElement | null = document.getElementById("shopCount") as HTMLButtonElement;

    // REACCIONAR CUANDO SE AGREGA UN PRODUCTO AL CARRITO
    renderManager = (count: number) => {
      if (addToCartBtn) {
        addToCartBtn.classList.add("animCart");
        setTimeout(() => addToCartBtn.classList.remove("animCart"), 300);
        if (shopCount) shopCount.textContent = count < 100 ? count.toString() : "99+";
      }
    };

    // AGREGAR SOMBRA AL TOPBAR CUANDO SE HACE SCROLL
    const addShadow = () => {
      if (window.scrollY > 15 && topbar)
        topbar.style.boxShadow = "0 0 10px rgba(0,0,0,.4)";
      else if (topbar) topbar.style.boxShadow = "none";
    }

    // AGREGAR SOMBRA CUANDO SE HACE SCROLL
    window.addEventListener("scroll", addShadow, { capture: true, passive: true });
    addShadow();

    // LIMPIAR O SELECCIONAR INPUT DE BÚSQUEDA
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
        <label htmlFor="drawer-toggle" className="material-icons" id="menuBtn">menu</label>
        <Link href="/">
          <div id="brandLogo">
            <img src={require("../assets/logo.svg")} alt="Logo" />
          </div>
        </Link>
        <div id="navbtns">
          <label htmlFor="search-toggle" className="material-icons waves waves-dark">search</label>
          <Link href="/carrito" scroll={false}>
            <div>
              <i className="material-icons addToCartBtn waves waves-dark">shopping_cart</i>
              <i id="shopCount">{0}</i>
            </div>
          </Link>
        </div>
        <div id="searchBar">
          <label htmlFor="search-toggle" className="material-icons waves waves-dark">arrow_back</label>
          <input type="search" placeholder={props.placeHolder} id="search" name="search" />
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
            border-radius: 100%;
            margin: 0;
            position: relative;
            padding:8px;
          }
          .topbar .addToCartBtn{
            transition:transform 0.3s ease-in-out, background 0.3s ease-in-out;
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
            transform: translateX(40px);
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

          @keyframes animCart{
            0%{transform : rotate(15deg);}
            25%{ transform:rotate(-15deg); }
            50%{ transform:rotate(15deg); }
            100%{ transform:rotate(0deg); }
          }

          .topbar #navbtns label:nth-child(1) {
            z-index: 4;
            transition: transform 0.3s ease-in-out;
          }

          .topbar #navbtns #shopCount{
            position:absolute;
            background:var(--third);
            height:20px;
            width:20px;
            right:0;
            top:0;
            font-size:0.8em;
            font-style:normal;
            font-weight:bold;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .animCart{
            animation:animCart 0.3s ease-in-out 1;
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
            font-size: 1.8em;
            margin-right: 6px;
          }

          .topbar #searchBar input {
            border: none;
            outline: none;
            box-shadow: none;
            font-size: 18px;
            padding: 15px 0;
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

export default forwardRef(TopBar);