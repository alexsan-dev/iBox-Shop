// HOOKS Y TIPOS DE DATOS
import { useEffect, useRef, MutableRefObject } from "react";
import { Unsubscribe, User, firestore } from "firebase";

// INSTANCIA DE FIREBASE Y BASE DE DATOS LOCAL
import firebase from "../keys/firebase";
import Dexie from "dexie";

// FIREBASE AUTH Y FIREBASE FIRESTORE
import "firebase/auth";
import "firebase/firestore";

// =============== GLOBALS ===============
const db = firebase.firestore();
let fireStoreHandler: number = 0;
let fbprovider: firebase.auth.FacebookAuthProvider,
  gprovider: firebase.auth.GoogleAuthProvider;

// =============== EFECTOS ===============
// EFECTO RIPPLE PARA TODOS LOS BOTONES
export const useRipples = () => {
  useEffect(() => {
    // OBTENER TODAS LAS SUPERFICIES
    const surface: NodeListOf<HTMLElement> | null = document.querySelectorAll(".waves") as NodeListOf<HTMLElement>;

    // FUNCION DE EFECTO
    function ripple(e: any) {
      if (e.target && surface) {
        // PROPIEDADES INICALES DEL CIRCULO
        const circle: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        const maxLarge: number = Math.max(e.target.clientWidth, e.target.clientHeight);
        const rectSurface: ClientRect = e.target.getBoundingClientRect();

        // FUNCION LOGARITMICA DEL TIEMPO
        const time: number = Math.log(maxLarge) / Math.log(Math.exp(1)) / 11;

        // APLICAR DIMENSIONES Y ESTILO AL CIRCULO
        circle.style.width = circle.style.height = maxLarge + "px";
        circle.style.left = e.clientX - rectSurface.left - maxLarge / 2 + "px";
        circle.style.top = e.clientY - rectSurface.top - maxLarge / 2 + "px";
        circle.classList.add("ripple");
        circle.style.animation = `ripple ${time}s ease-in`;

        // AGREGAR CIRCULO A DIVS CON LA CLASE WAVES-DARK
        if (e.target.classList.contains("waves-dark"))
          circle.classList.add("ripple-dark");
        e.target.appendChild(circle);

        // ELIMINAR CIRCULO LUEGO DE *TIME* SEGUNDOS
        setTimeout(() => e.target.removeChild(circle), time * 1000);
      }
    }

    // AGREGAR FUNCION RIPPLE A TODAS LAS SUPERFICIES Y VERIFICAR SI YA SE AGREGO ANTES
    for (let i = 0; i < surface.length; i++) {
      if (!surface[i].getAttribute("data-ripple")) {
        surface[i].setAttribute("data-ripple", "true");
        surface[i].addEventListener("click", ripple);
      }
    }
  }, []);
};

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

// =========== BASE DE DATOS ============
// VARIABLES DE BASE DE DATOS LOCAL
export class localDB extends Dexie {
  users: Dexie.Table<user, number>;
  constructor() {
    super("localDB");
    this.version(1).stores({ users: "id, user" });
    this.users = this.table("users");
  }
}
const localdb = new localDB();
export const clearUser = () => localdb.users.clear();
export const getUser = (listen: Function) =>
  localdb.users.toArray().then((data: any) => listen(data[0]));
export const setUser = (user: userModel | firestore.DocumentData | undefined) =>
  localdb.users.put({ id: 1, user });

// OBTENER DATOS DE FIRESTORE
// AGREGAR USUARIO EN CUENTA NUEVA
export const useUserSet = (id?: string, data?: userModel) => {
  if (id && data)
    db.collection("users")
      .doc(id)
      .set(data);
};

// OBTENER USUARIOS DE FIRESTORE O CARGAR LA VERSION LOCAL
export const useUserGet = (
  id: string | undefined,
  listener: Function,
  err: Function
) => {
  getUser((user: user | undefined) => {
    if (user && fireStoreHandler === 0) {
      console.log('%c📖 READ USER FROM LOCAL DB', 'background:#FFA000; color: #ffff; padding:5px; font-weight:bold; border-radius:5px');

      fireStoreHandler++;
      listener(user.user);
    } else if (fireStoreHandler === 0 && id) {
      db.collection("users")
        .doc(id)
        .get()
        .then((user: firestore.DocumentSnapshot<firestore.DocumentData>) => {
          console.log('%c📖 READ USER FROM FIRESTORE 🔥', 'background:#FFA000; color: #ffff; padding:5px; font-weight:bold; border-radius:5px');
          fireStoreHandler++;
          setUser(user.data());
          listener(user.data());
        })
        .catch((e: Error) => err(e));
    }
  });
};

// =============== AUTENTICACION ===============
// CONFIGURAR PROVEEDORES ( FACEBOOK Y GOOGLE )
export const setProviders = () => {
  fbprovider = new firebase.auth.FacebookAuthProvider();
  gprovider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  fbprovider.setCustomParameters({ display: "popup" });
};

// ESCUCHADOR PARA CAMBIOS EN EL INICIO DE SESION
export const useAuth = (listen: Function) => {
  fireStoreHandler = 0;
  useEffect(() => {
    const unsubscribe: Unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user: User | null) => listen(user));
    return () => unsubscribe();
  }, []);
};

// CERRAR SESION
export const useLogout = () => {
  firebase.auth().signOut();
  clearUser();
  fireStoreHandler = 0;
};

// BORRAR TODOS LOS DATOS AL CERRAR SESION
export const useCleanData = () => {
  clearUser();
  fireStoreHandler = 0;
}

// ENVIAR CORREO DE VERIFICACION
export const useSendEmailVerification = () =>
  firebase.auth().currentUser?.sendEmailVerification();

// BORRAR USUARIO
export const useDeleteUser = () => {
  clearUser();
  fireStoreHandler = 0;
  return firebase.auth().currentUser?.delete();
};

// TIEMPO USUARIO DESDE SU CREACION
export const useUserTime = () => {
  const userDate: string | undefined = firebase.auth().currentUser?.metadata
    .creationTime;
  if (userDate) return new Date(userDate);
  else return new Date();
};

// RECUPERAR CONTRASEÑA
export const useResetPass = (email: string, err: Function) =>
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .catch((e: any) => err(e));

// INICIO DE SESION
interface LoginType {
  email?: string;
  pass?: string;
  name?: string;
  type: boolean | string;
  err: Function;
}
export const useLogin = (data: LoginType) => {
  // USUARIO NUEVO
  if (data.type === true && data.email && data.pass)
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.pass)
      .then((res: firebase.auth.UserCredential) => {
        const userData: userModel = {
          emailVerified: res.user ? res.user.emailVerified : null,
          displayName: data.name ? data.name : null,
          email: data.email ? data.email : null,
          provider: res.user?.providerData[0]?.providerId,
          photoURL:
            "https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef"
        };
        useUserSet(res.user?.uid, userData);
        res.user?.updateProfile({
          displayName: data.name,
          photoURL:
            "https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef"
        });

        res.user
          ?.sendEmailVerification()
          .then(() => console.log("Send verification email for new user"));
      })
      .catch((e: Error) => data.err(e));

  // USUARIOS EXISTENTES CON EMAIL, FACEBOOK, GOOGLE
  else if (data.type === false && data.email && data.pass)
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.pass)
      .catch((e: Error) => data.err(e));
  else if (data.type === "fb")
    firebase
      .auth()
      .signInWithRedirect(fbprovider)
      .catch((e: Error) => data.err(e));
  else if (data.type === "g")
    firebase
      .auth()
      .signInWithRedirect(gprovider)
      .catch((e: Error) => data.err(e));
  else throw Error("Missing type property");
};

// CODIGOS DE ERROR EN EL INCIO DE SESION
export const useAuthError = (code: string, str: any) => {
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
      return str.default;
  }
};
