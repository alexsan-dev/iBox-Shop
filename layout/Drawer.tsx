// TIPOS DE DATOS Y HOOKS
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useLogout } from "../utils/hooks";
import { User } from "firebase";

// NAVEGACION Y ALERTAS
import Router from "next/router";
import Link from "next/link";
import Alert from "../components/Alert";

//PROPIEDADES 
interface Props {
	user: User | null;
	appName: string;
	shareText: string;
	appNameCom: string;
	appSlogan: string;
	homeRoute: string;
	shopRoute: string;
	navDivider: string;
	accountRoute: string;
	shareButton: string;
	downloadButton: string;
	logoutButton: string;
	logoutTitle: string;
	logoutText: string;
}

// ESTADOS Y VARIABLES GLOBALES
interface drawerState { logout: boolean; }
let shareCount: number = 0;
let x0: number = 0;
let x0_1: number = 0;
let deferredPrompt: Event | null;
let hideDrawer: Function;

const Drawer: React.FC<Props> = (props: Props) => {
	// ESTADOS DEL COMPONENTE
	const defaultState: drawerState = { logout: false }
	const [account, setAccount]: [drawerState, Dispatch<SetStateAction<drawerState>>] = useState(defaultState);

	// OCULTAR DRAWER AL CERRAR SESION
	const logout = () => {
		setAccount({ logout: true });
		hideDrawer();
	}

	// PREGUNTAR SI QUIERE CERRAR SESION
	const hideAlert = () => setAccount({ logout: false });

	useEffect(() => {
		// SELECCIONAR TODOS LOS BOTONES DE PAGINA, EL INPUT DE MOSTRAR Y OCULTAR, BOTON DE COMPARTIR Y BOTON DE INSTALAR
		const routes: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll(".routes") as NodeListOf<HTMLAnchorElement>;
		const drawerToggle: HTMLInputElement | null = document.getElementById("drawer-toggle") as HTMLInputElement;
		const shareBtn: HTMLButtonElement | null = document.querySelector(".shareBtn") as HTMLButtonElement;
		const addBtn: HTMLButtonElement | null = document.querySelector(".add-button") as HTMLButtonElement;
		const hook: HTMLDivElement | null = document.getElementById("sideHook") as HTMLDivElement;
		const drawer: HTMLDivElement | null = document.getElementById("drawer") as HTMLDivElement;

		// OCULTAR DRAWER
		hideDrawer = () => { if (drawerToggle) drawerToggle.checked = false };
		console.log("Hide drawer on", hideDrawer);

		// AGREGAR UNA CLASE "BLUE" A LAS PESTAÑAS ACTIVAS EN EL MENU
		function setActive(url: string) {
			setTimeout(() => {
				Array.prototype.forEach.call(routes, function (b: HTMLAnchorElement | null) {
					if (b) {
						const route: string | undefined = b.textContent?.split(" ")[1].toLowerCase();
						b.classList.remove("blue");
						b.classList.add("white");
						if (url.substr(1) === route) {
							b.classList.remove("white");
							b.classList.add("blue");
						}
						if (url.substr(1) === "" && routes) {
							routes[0].classList.remove("white");
							routes[0].classList.add("blue");
						}
					}
				});
			}, 600);
			setTimeout(() => {
				if (drawerToggle) drawerToggle.checked = false;
			}, 300);
		}

		// SELECCIONAR CUAL ES LA PAGINA ACTUAL
		Router.events.on("routeChangeComplete", setActive);
		setActive(Router.pathname);

		// BOTON DE COMPARTIR CON SHARE API
		if (navigator.share && shareCount === 0) {
			if (shareBtn) {
				shareBtn.addEventListener("click", () => {
					navigator
						.share({
							title: props.appName,
							text: props.shareText,
							url: window.location.origin
						})
						.then(() => console.log("Successfully share"))
						.catch((error: Error) => console.log("Error sharing", error));
				});
				shareCount++;
			}
		} else if (shareBtn) shareBtn.style.display = "none";

		// BOTON DE INSTALAR ( SERVICE WORKER )
		if (addBtn) {
			addBtn.style.display = "none";
			window.addEventListener("beforeinstallprompt", e => {
				e.preventDefault();
				deferredPrompt = e;
				addBtn.style.display = "flex";
				addBtn.addEventListener("click", () => {
					addBtn.style.display = "none";
					if (deferredPrompt) {
						// @ts-ignore
						deferredPrompt.prompt();
						// @ts-ignore
						deferredPrompt.userChoice.then(choiceResult => {
							if (choiceResult.outcome === "accepted")
								console.log("User accepted app prompt");
							else console.log("User dismissed the app prompt");
							deferredPrompt = null;
						});
					}
				});
			});
		}

		// ABRIR  DRAWER AL DESLIZAR EL HOOK
		hook.addEventListener("touchstart", (e: TouchEvent) => x0 = e.changedTouches[0].clientX)
		hook.addEventListener("touchend", (e: TouchEvent) => { if (e.changedTouches[0].clientX - x0 > 60 && drawerToggle) drawerToggle.checked = true; x0 = 0; })

		// CERRAR DRAWER AL DESLIZAR EL DRAWER
		drawer.addEventListener("touchstart", (e: TouchEvent) => x0_1 = e.changedTouches[0].clientX)
		drawer.addEventListener("touchend", (e: TouchEvent) => { if (e.changedTouches[0].clientX - x0_1 < -100 && drawerToggle) drawerToggle.checked = false; x0_1 = 0; })

	}, [])

	return (
		<>
			<input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
			<label htmlFor="drawer-toggle" className="drawerShadow sbf"></label>
			{account.logout && <Alert hideAlert={hideAlert} type="confirm" title={props.logoutTitle} body={props.logoutText} onConfirm={useLogout} />}

			<div id="drawer">
				<div id="drawerHead">
					<span>{props.appNameCom}</span>
					<p>{props.appSlogan}</p>
				</div>
				<ul>
					<li>
						<Link href="/" passHref>
							<a className="white routes waves waves-dark btn" title="Home">
								<i className="uil uil-home-alt"></i> {props.homeRoute}
							</a>
						</Link>
					</li>
					<li>
						<Link href="/tienda" passHref>
							<a className="btn white routes waves waves-dark" title="Shop">
								<i className="uil uil-store"></i> {props.shopRoute}
							</a>
						</Link>
					</li>
				</ul>
				<hr />
				<span className="dividerTitle">{props.navDivider}</span>
				<ul>
					<li>
						<Link href="/cuenta" passHref>
							<a className="white routes waves waves-dark btn" title="Account">
								<i className="uil uil-user"></i> {props.accountRoute}
							</a>
						</Link>
					</li>
					{props.user && (
						<li>
							<button onClick={logout} className="white waves waves-dark">
								<i className="uil uil-exit"></i> {props.logoutButton}
							</button>
						</li>
					)}
					<li>
						<button className="white waves waves-dark shareBtn">
							<i className="uil uil-share-alt"></i> {props.shareButton}
						</button>
					</li>
					<li>
						<button className="white waves waves-dark add-button">
							<i className="uil uil-import"></i> {props.downloadButton}
						</button>
					</li>
				</ul>
			</div>
			<div id="sideHook"></div>

			<style jsx>{`
          #drawer-toggle{
            display: none;
          }

          #drawer-toggle:checked ~ #drawer {
            transform: translateX(0);
          }

          #drawer-toggle:checked ~ .sbf {
            transition: opacity 0.3s ease-in-out, transform 0s linear 0s;
            opacity: 1;
            transform: scale(1);
          }

          #drawer {
            transform: translateX(-105%);
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 100vh;
            background: var(--backgrounds);
            z-index: 2;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            list-style: none;
            transition: transform 0.3s ease-in-out;
          }

          .drawerShadow {
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

          #drawer > #drawerHead {
            padding: 25px;
          }

          #drawer > #drawerHead > span {
            font-size: 1.2em;
            color: var(--text);
            font-weight: 500;
          }

          #drawer > #drawerHead > p {
            font-size: 0.85em;
            color: var(--parraf);
          }

          #drawer > ul {
            padding: 0 10px;
          }

          #drawer > ul li {
            width: 100%;
          }

          #drawer > ul li button,
          #drawer > ul li a {
            color: var(--parraf);
            font-size: 14px;
            width: 100%;
          }

          #drawer > ul li button i,
          #drawer > ul li a i {
            margin-right: 25px;
            margin-top: -1px;
          }

          #drawer > ul li button.blue,
          #drawer > ul li a.blue {
            color: var(--primary);
          }

          #drawer > ul li button:after,
          #drawer > ul li a:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.85);
            z-index: -2;
          }

          #drawer > .dividerTitle {
            color: var(--unactive);
            margin: 25px 20px 12px 20px;
            font-size: 0.87em;
            display: block;
            font-weight: 450;
          }

          #sideHook {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 30px;
            z-index: 1;
          }

					@media screen and (max-width: 355px) {
						#drawer {
              width: 260px;
            }
					}
			`}</style>
		</>
	)
}

export default Drawer;