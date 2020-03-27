// HOOKS Y TIPOS DE DATOS
import { useEffect, useRef, MutableRefObject } from "react";
import { Unsubscribe, User, firestore } from "firebase";

// INSTANCIA DE FIREBASE Y BASE DE DATOS LOCAL
import firebase from "../keys/firebase";
import Dexie from "dexie";

// FIREBASE AUTH, FIREBASE FIRESTORE, FIREBASE CLOUD MESSAGING, CLOUD FUNCTIONS
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/functions";

// =============== GLOBALS ===============
const db = firebase.firestore();
const funcs = firebase.functions();
let fireStoreHandler: number = 0;
let localDBHandler: number = 0;
let fcmHandler: number = 0;
let fbProvider: firebase.auth.FacebookAuthProvider,
  gProvider: firebase.auth.GoogleAuthProvider;

// =============== EFECTOS ===============
// EFECTO RIPPLE PARA TODOS LOS BOTÓNES
export const useRipples = () => {
  useEffect(() => {
    setInterval(() => {
      // OBTENER TODAS LAS SUPERFICIES
      const surface: NodeListOf<HTMLElement> | null = document.querySelectorAll(".waves") as NodeListOf<HTMLElement>;

      // FUNCIÓN DE EFECTO
      function ripple(el: HTMLElement, e: MouseEvent) {
        if (el && surface) {
          // PROPIEDADES INICIALES DEL CIRCULO
          const circle: HTMLDivElement = document.createElement("div") as HTMLDivElement;
          const maxLarge: number = Math.max(el.clientWidth, el.clientHeight);
          const rectSurface: ClientRect = el.getBoundingClientRect();

          // FUNCIÓN LOGARÍTMICA DEL TIEMPO
          const time: number = Math.log(maxLarge) / Math.log(Math.exp(1)) / 11;

          // APLICAR DIMENSIONES Y ESTILO AL CIRCULO
          circle.style.width = circle.style.height = maxLarge + "px";
          circle.style.left = e.clientX - rectSurface.left - maxLarge / 2 + "px";
          circle.style.top = e.clientY - rectSurface.top - maxLarge / 2 + "px";
          circle.classList.add("ripple");
          circle.style.animation = `ripple ${time}s ease-in`;

          // AGREGAR CIRCULO A DIVS CON LA CLASE WAVES-DARK
          if (el.classList.contains("waves-dark"))
            circle.classList.add("ripple-dark");
          el.appendChild(circle);

          // ELIMINAR CIRCULO LUEGO DE *TIME* SEGUNDOS
          setTimeout(() => {
            try { el.removeChild(circle) }
            catch (err) { console.log(err) }
          }, time * 1000);
        }
      }

      // AGREGAR FUNCIÓN RIPPLE A TODAS LAS SUPERFICIES Y VERIFICAR SI YA SE AGREGO ANTES
      for (let i = 0; i < surface.length; i++) {
        if (!surface[i].getAttribute("data-ripple")) {
          surface[i].setAttribute("data-ripple", "true");
          surface[i].addEventListener("click", (e: MouseEvent) => ripple(surface[i], e));
        }
      }
    }, 10);
  }, []);
};

// MOSTRAR TOAST
interface IToast {
  text: string;
  actionText?: string;
  onHide?: Function;
  action?: (e: MouseEvent) => void;
  fixed?: boolean;
}
export const showToast = (data: IToast) => {
  let allToast: NodeListOf<HTMLDivElement> = document.querySelectorAll(".toast") as NodeListOf<HTMLDivElement>;
  let div: HTMLDivElement = document.createElement("div") as HTMLDivElement;
  let span: HTMLDivElement = document.createElement("span") as HTMLDivElement;
  let btn: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;

  // LIMPIAR TODOS LOS TOAST ANTERIORES
  allToast.forEach((el: HTMLDivElement) => document.body.removeChild(el));

  // AGREGAR CLASE 
  div.classList.add("toast");
  if (data.actionText) div.classList.add("actionToast");

  // AGREGAR TEXTOS Y ACCIONES
  span.textContent = data.text;
  btn.textContent = data.actionText || "";

  // EVENTO DE CLICK EN EL BOTÓN ACCIÓN
  btn.addEventListener("click", (e: MouseEvent) => {
    if (data.action) data.action(e);
    div.style.transform = "translateY(100%)";
    setTimeout(() => {
      try { document.body.removeChild(div); }
      catch (err) { console.log(err) }
      if (data.onHide) data.onHide();
    }, 5300);
  });

  // AGREGAR DIV AL BODY
  div.appendChild(span);
  if (data.actionText) div.appendChild(btn);
  document.body.appendChild(div);

  // ANIMAR HACIA ARRIBA
  setTimeout(() => {
    div.style.transform = "translateY(0)";
  }, 10)

  // NO ELIMINAR SI ES UN MENSAJE FIJO
  if (!data.fixed) {
    setTimeout(() => {
      div.style.transform = "translateY(100%)";
    }, 5000);

    setTimeout(() => {
      try { document.body.removeChild(div); }
      catch (err) { console.log(err) }
      if (data.onHide) data.onHide();
    }, 5300);
  }
}

// MOSTRAR ALERTAS
interface AlertProps {
  type: "confirm" | "window" | "alert" | "input" | "error";
  onHide?: Function;
  onConfirm?: Function;
  title: string;
  body: string;
  confirmBtn?: string;
  cancelBtn?: string;
  customElements?: string;
  fixed?: boolean;
}

export const showAlert = (props: AlertProps) => {
  // CREAR ELEMENTOS
  const alertContainer: HTMLDivElement = document.createElement("div");
  const alertShadow: HTMLDivElement = document.createElement("div");
  const alertContent: HTMLDivElement = document.createElement("div");
  const alertBody: HTMLDivElement = document.createElement("div");
  const actions: HTMLUListElement = document.createElement("ul");
  const liCancel: HTMLLIElement = document.createElement("li");
  const liConfirm: HTMLLIElement = document.createElement("li");
  const h1: HTMLHeadingElement = document.createElement("h1");
  const p: HTMLParagraphElement = document.createElement("p");
  const cancelBtn: HTMLButtonElement = document.createElement("button");
  const confirmBtn: HTMLButtonElement = document.createElement("button");

  // ASIGNAR CLASES
  alertContainer.classList.add("alertContainer");
  alertShadow.classList.add("alertShadow");
  alertContent.classList.add("alertContent");
  alertBody.classList.add("alertBody");
  actions.classList.add("alertActions");
  cancelBtn.classList.add("cancelBtn", "waves", "waves-dark");
  confirmBtn.classList.add("primary", "waves");

  // ASIGNAR TEXTOS
  h1.textContent = props.title;
  p.textContent = props.body;
  cancelBtn.textContent = props.cancelBtn || "Cancelar";
  confirmBtn.textContent = props.confirmBtn || "Aceptar";

  // ASIGNAR EVENTOS
  const hideAlert = () => {
    alertShadow.style.pointerEvents = "none";
    cancelBtn.style.pointerEvents = "none";
    confirmBtn.style.pointerEvents = "none";
    alertContainer.style.opacity = "0";
    setTimeout(() => {
      try {
        document.body.removeChild(alertContainer);
        if (props.onHide) props.onHide();
      } catch (err) { console.log(err) }
    }, 400);
  }

  if (!props.fixed) alertShadow.addEventListener("click", hideAlert);
  cancelBtn.addEventListener("click", hideAlert);
  confirmBtn.addEventListener("click", () => {
    if (props.onConfirm) props.onConfirm();
    hideAlert();
  });

  if (props.type == "confirm") cancelBtn.style.display = "block";

  // ASIGNAR AL DOM
  liConfirm.appendChild(confirmBtn);
  liCancel.appendChild(cancelBtn);
  actions.appendChild(liCancel);
  actions.appendChild(liConfirm);
  alertBody.appendChild(h1);
  alertBody.appendChild(p);
  if (props.customElements) {
    const ct: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    ct.innerHTML = props.customElements;
    alertBody.appendChild(ct);
  }
  alertContent.appendChild(alertBody);

  if (props.type !== "window")
    alertContent.appendChild(actions);

  alertContainer.appendChild(alertShadow);
  alertContainer.appendChild(alertContent);
  document.body.appendChild(alertContainer);
}

// =============== UTILIDADES ===============
// HOOK PARA INTERVALOS DE TIEMPO
export const useInterval = (callback: any, delay: number) => {
  const savedCallback: MutableRefObject<() => void> = useRef(() => { });
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

// =========== NOTIFICACIONES ============
// INICIAR NOTIFICACIONES
export const initFCM = () => {
  const messaging = process.browser ? firebase.messaging() : undefined;
  if (fcmHandler === 0) messaging?.usePublicVapidKey("BHA7UNM4lYGtAPa3KxkrpAGjaY7krSo1KUzBKYI8r8G3yTji-PaIzLg7rIGvoZmFSrWrGVUNZ25WGvFiSua9XCs");
  fcmHandler++;
  return messaging;
}

// ENVIAR TOKEN A LA DB
export const sendToken = async (token: string) => {
  const tokens = await db.collection("tokens");
  return tokens.add({ upload: new Date().toUTCString(), token });
}

// =========== BASE DE DATOS ============
// VARIABLES DE BASE DE DATOS LOCAL
export class localDB extends Dexie {
  // DECLARAR TABLAS
  users: Dexie.Table<user, number>;
  productList: Dexie.Table<productList, number>;

  constructor() {
    super("localDB");
    this.version(1).stores({ users: "id, user", productList: "id, products" });

    // TABLA USUARIOS Y PRODUCTOS
    this.users = this.table("users");
    this.productList = this.table("productList");
  }
}

// INSTANCIA DE BASE DE DATOS
const iLocalDB = new localDB();

// LIMPIAR USUARIO
export const clearUser: Function = async () => iLocalDB.users.clear();

// AGREGAR USUARIO A LOCAL
export const setUser: Function = async (user: userModel | firestore.DocumentData | undefined) =>
  iLocalDB.users.put({ id: 1, user });

// AGREGAR PRODUCTOS AL LOCAL
export const setProducts: Function = async (products: product[] | firestore.DocumentData | undefined) =>
  iLocalDB.productList.put({ id: 1, products })


// OBTENER DATOS DE FIRESTORE
// AGREGAR USUARIO EN CUENTA NUEVA
export const useUserSet = async (id?: string, data?: userModel) => {
  if (id && data) {
    db.collection("users").doc(id).set(data);
    setUser(data);
  }
}

// OBTENER USUARIOS DE FIRESTORE O CARGAR LA VERSION LOCAL
export const useUserGet = async (id: string | undefined) => {
  const user: user[] = await iLocalDB.users.toArray();
  let resUser: userModel | null | undefined = null;

  // VERIFICAR USUARIO LOCAL
  if (user[0] && fireStoreHandler === 0) {
    // RETORNAR USUARIO LOCAL
    console.log("Read user from localDB");
    resUser = user[0].user;
    fireStoreHandler++;
  }
  else if (fireStoreHandler === 0 && id) {
    // LEER DE FIREBASE
    const getUser: firestore.DocumentSnapshot<firestore.DocumentData> = await db.collection("users").doc(id).get();
    if (getUser) {
      console.log('%c📖 READ USER FROM FIRESTORE 🔥', 'background:#FFA000; color: #ffff; padding:5px; font-weight:bold; border-radius:5px');

      // GUARDAR EN LOCAL
      await setUser(getUser.data());

      // RETORNAR USUARIO
      // @ts-ignore
      resUser = getUser.data();
      fireStoreHandler++;
    } else resUser = null;
  }

  // SINO AGREGAR NULL
  else resUser = null;
  return resUser;
};

// =============== PRODUCTOS ===============
// OBTENER LISTADO DE PRODUCTOS DE FIRESTORE O LOCAL
export const useGetAllProducts: Function = async (onDataUpdate?: Function) => {
  // OBTENER DATOS LOCALES
  let products: product[] | firestore.DocumentData[] = [];
  const localData: productList[] = await iLocalDB.productList.toArray();

  // VERIFICAR POR NUEVOS DATOS 
  if (window.navigator.onLine) setTimeout(async () => {
    // CREAR CONEXIÓN
    const firestoreData: firestore.CollectionReference<firestore.DocumentData> = await db.collection("products");

    // DETECTAR CAMBIOS
    firestoreData.onSnapshot(async (nData: firestore.QuerySnapshot) => {
      // OBTENER NUEVOS DATOS
      const newData: firestore.DocumentData[] = nData.docs.map((doc: firestore.DocumentData) => doc.data());

      // VERIFICAR SI SON IGUALES
      if (localData[0] && JSON.stringify(localData[0].products) !== JSON.stringify(newData)) {
        // CREAR NUEVA LISTA
        products = newData.map((doc: firestore.DocumentData) => doc);

        // AGREGAR A BASE LOCAL Y ENVIAR
        await setProducts(products);
        if (onDataUpdate) onDataUpdate(products);
      }
    })
  }, 1000);

  // SI EXISTEN DEVOLVER DATOS LOCALES
  if (localData[0]) {
    console.log("read products from localDB");
    products = localData[0].products;
  }

  // SINO DEVOLVER DE FIREBASE
  else if (localDBHandler === 0) {
    console.log('%c📖 READ PRODUCTS FROM FIRESTORE 🔥', 'background:#FFA000; color: #ffff; padding:5px; font-weight:bold; border-radius:5px');

    // CREAR NUEVA LISTA
    const firestoreData: firestore.QuerySnapshot<firestore.DocumentData> = await db.collection("products").get();
    firestoreData.forEach((doc: firestore.DocumentData) => products.push(doc.data()))

    // AGREGAR A BASE LOCAL Y ENVIAR
    await setProducts(products);
    localDBHandler++;
  }
  return products;
}
// =============== CARRITO ===============
interface OrderCart { sum: number; productsFilter: Array<product | firestore.DocumentData>; multArry: number[] }
export const useCartSearch: Function = (cartList: string[], productList: Array<product | firestore.DocumentData>) => {
  // DECLARAR ARRAY DE CARDS
  let productsFilter: Array<product | firestore.DocumentData> = [];
  let sum: number = 0;
  let multArry: number[] = [];

  // BUSCAR POR CLAVE
  productList.reverse().forEach((product: product | firestore.DocumentData) => {
    // DECLARAR MULTIPLICIDAD
    let firstAdded: boolean = false;
    let mult: number = 0;

    // AGREGAR MULTIPLICIDAD
    cartList?.forEach((keyID: string) => product.key.trim() === keyID ? mult++ : null);

    // CREAR LISTA DE CARDS
    cartList?.forEach((keyID: string) => {
      if (product.key.trim() === keyID && !firstAdded) {
        productsFilter.push(product)

        // SALIR Y AGREGAR A LA SUMA TOTAL
        firstAdded = true;
        sum += product.price * mult;
      }
    })

    // CREAR LISTA DE MULTIPLICIDAD
    if (mult !== 0) multArry.push(mult);
  })
  let resData: OrderCart = { sum, productsFilter, multArry };
  return resData;
}

export const verifyForm = (vals: IForms | null) => {
  // OBTENER VALORES DEL FORMULARIO
  let out: boolean = false;
  let errCode: number = 1;

  if (vals) {
    // VERIFICAR LONGITUD
    if ((vals.address.length * vals.email.length * vals.displayName.length * vals.phone) !== 0) out = true;

    // VERIFICAR SI INCLUYE UN @
    if (out) {
      if (vals.email.includes("@")) {
        // VERIFICAR SI TIENE UN . DESPUÉS DE @
        const nString: string = vals.email.substr(vals.email.indexOf("@"));
        if (!nString.includes(".")) {
          out = false;
          errCode = 2;
        }
      }

      // SINO RETORNAR FALSE
      else {
        errCode = 2;
        out = false;
      }
    }

    // VERIFICAR EL NUMERO DE TELÉFONO
    if (out) {
      if (vals.phone.toString().length !== 8) {
        errCode = 3;
        out = false;
      }
    }
  }

  // RETORNAR VERIFICACIÓN
  return { errCode, out };
}

interface IForms { displayName: string; email: string; address: string; phone: number; nit: string; }
interface ReqForm { sendData: IForms; cartList: string[]; }
export const buyFromCart = (req: ReqForm) => funcs.httpsCallable("buyFromCart")(req);

// =============== USUARIOS ===============
// USUARIO POR DEFECTO
export const defUserData: userModel = { displayName: "", email: "", provider: "", photoURL: null, uid: "", address: "", phone: 0, nit: "", department: "" };

// CONFIGURAR PROVEEDORES ( FACEBOOK Y GOOGLE )
export const setProviders = async () => {
  // PROVEEDOR DE FACEBOOK
  fbProvider = new firebase.auth.FacebookAuthProvider();

  // PROVEEDOR DE GOOGLE
  gProvider = new firebase.auth.GoogleAuthProvider();

  // ASIGNAR IDIOMA DE AUTH
  firebase.auth().useDeviceLanguage();
};

// ESCUCHADOR PARA CAMBIOS EN EL INICIO DE SESIÓN
export const useAuth = (listen: Function) => {
  // LIMITAR RENDERS
  fireStoreHandler = 0;

  useEffect(() => {
    // RETORNAR USUARIO
    const unsubscribe: Unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user: User | null) => listen(user));
    return () => unsubscribe();
  }, []);
};

// CERRAR SESIÓN
export const useLogout = async () => {
  // CERRAR SESIÓN
  await firebase.auth().signOut();

  // BORRAR DATOS
  await clearUser();

  // SALIR
  fireStoreHandler = 0;
  return true;
};

// BORRAR TODOS LOS DATOS AL CERRAR SESIÓN
export const useCleanData = async () => {
  // BORRAR DATOS
  await clearUser();

  // SALIR
  fireStoreHandler = 0;
  return true;
}

// ENVIAR CORREO DE VERIFICACIÓN
export const useSendEmailVerification = async () => firebase.auth().currentUser?.sendEmailVerification();

// BORRAR USUARIO
export const useDeleteUser = async () => {
  // BORRAR DATOS LOCALES
  await clearUser();
  fireStoreHandler = 0;

  // RETORNAR ACCIÓN
  return firebase.auth().currentUser?.delete();
};

// TIEMPO USUARIO DESDE SU CREACIÓN
export const useUserTime = () => {
  // OBTENER FECHA DE USUARIO
  const userDate: string | undefined = firebase.auth().currentUser?.metadata.creationTime;

  // RETORNAR NUEVA FECHA O FECHA DE USUARIO
  if (userDate) return new Date(userDate);
  else return new Date();
};

// RECUPERAR CONTRASEÑA
export const useResetPass = async (email: string) => {
  // ENVIAR CORREO DE RECUPERACIÓN
  await firebase.auth().sendPasswordResetEmail(email)
  return true;
}

// INICIO DE SESIÓN
interface LoginType { email?: string; pass?: string; name?: string; type: boolean | string; onSuccess?: Function }
export const useLogin = async (data: LoginType) => {
  // USUARIO NUEVO
  if (data.type === true && data.email && data.pass) {
    // VERIFICAR CREDENCIALES
    const credentials: firebase.auth.UserCredential = await firebase.auth().createUserWithEmailAndPassword(data.email, data.pass);

    // SI EXISTEN ASIGNAR DATOS INICIALES
    if (credentials) {
      const userData: userModel = {
        displayName: data.name || null,
        email: data.email || null,
        provider: credentials.user?.providerData[0]?.providerId,
        photoURL: "https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef",
        uid: credentials.user?.uid,
        address: "",
        phone: 0,
        nit: "",
        department: ""
      };

      // AGREGAR A BASE LOCAL
      await useUserSet(credentials.user?.uid, userData);

      // ENVIAR CORREO DE VERIFICACIÓN
      await credentials.user?.sendEmailVerification()
      console.log("Send verification email for new user");
    }
    else return false;
  }

  // USUARIOS EXISTENTES CON EMAIL, FACEBOOK, GOOGLE
  else if (data.type === false && data.email && data.pass)
    await firebase.auth().signInWithEmailAndPassword(data.email, data.pass);
  else if (data.type === "fb")
    await firebase.auth().signInWithPopup(fbProvider)
  else if (data.type === "g")
    await firebase.auth().signInWithPopup(gProvider);
  else throw Error("Missing type property");

  if (data.onSuccess) data.onSuccess();
  return true;
};

// CÓDIGOS DE ERROR EN EL INICIO DE SESIÓN
export const useAuthError = (code: string, str: langPackage.errors) => {
  const codeText = code.substr(5);
  switch (codeText) {
    case "app-deleted":
      return str.app_deleted;
    case "app-not-authorized":
      return str.app_not_authorized;
    case "argument-error":
      return str.argument_error;
    case "invalid-api-key":
      return str.invalid_api_key;
    case "invalid-user-token":
      return str.invalid_user_token;
    case "network-request-failed":
      return str.network_request_failed;
    case "operation-not-allowed":
      return str.operation_not_allowed;
    case "requires-recent-login":
      return str.requires_recent_login;
    case "too-many-requests":
      return str.too_many_requests;
    case "unauthorized-domain":
      return str.unauthorized_domain;
    case "user-disabled":
      return str.user_disabled;
    case "user-token-expired":
      return str.user_token_expired;
    case "web-storage-unsupported":
      return str.web_storage_unsupported;
    case "account-exists-with-different-credential":
      return str.account_exists_with_different_credential;
    case "credential-already-in-used":
      return str.credential_already_in_used;
    case "email-already-in-use":
      return str.email_already_in_use;
    case "user-not-found":
      return str.user_not_found;
    case "weak-password":
      return str.weak_password;
    case "invalid-email":
      return str.invalid_email;
    case "wrong-password":
      return str.wrong_password;
    case "invalid-verification-code":
      return str.invalid_verification_code;
    case "invalid-verification-id":
      return str.invalid_verification_id;
    case "captcha-check-failed":
      return str.captcha_check_failed;
    case "invalid-phone-number":
      return str.invalid_phone_number;
    case "missing-phone-number":
      return str.missing_phone_number;
    case "quota-exceeded":
      return str.quota_exceeded;
    default:
      return str.defaultVal;
  }
};
