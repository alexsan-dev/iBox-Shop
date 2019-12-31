import { useEffect, useRef } from 'react';
import firebase from '../credentials/servers';
import Dexie from 'dexie';
import 'firebase/auth';
import "firebase/firestore"

// ============== EFECTOS ===============
// EFECTO RIPPLE PARA TODOS LOS BOTONES
export const useRipples = () => {
  useEffect(() => {
    const surface = document.querySelectorAll('.waves');
    function ripple(e) {
      let circle = document.createElement("div");
      let maxLarge = Math.max(this.clientWidth, this.clientHeight)
      let rectSurface = this.getBoundingClientRect();
      let time = (Math.log(maxLarge) / Math.log(Math.exp(1))) / 11;

      circle.style.width = circle.style.height = maxLarge + "px";
      circle.style.left = e.clientX - rectSurface.left - maxLarge / 2 + "px";
      circle.style.top = e.clientY - rectSurface.top - maxLarge / 2 + "px";
      circle.classList.add("ripple");
      circle.style.animation = `ripple ${time}s ease-in`;

      if (this.classList.contains("waves-dark")) circle.classList.add("ripple-dark");
      this.appendChild(circle);
      setTimeout(() => this.removeChild(circle), time * 1000);
    }
    for (let i = 0; i < surface.length; i++) {
      if(!surface[i].getAttribute("data-ripple")){
        surface[i].setAttribute("data-ripple", true);
        surface[i].addEventListener('click', ripple);
      }
    }
  }, []);
}

// HOOK PARA INTERVALOS DE TIEMPO
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => { savedCallback.current = callback }, [callback]);
  useEffect(() => {
    function tick() { savedCallback.current(); }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// =========== BASE DE DATOS ============
let indexeddb = {};

// VARIABLES DE BASE DE DATOS LOCAL
export const useDB = () => {
  indexeddb = new Dexie("localDB");
  indexeddb.version(1).stores({ user: 'key, user' })
  indexeddb.open().then(() => console.log("OpenDB")).catch(err => console.log("Error during open db ", err));
}

// CONEXION A BASE DE DATOS FIRESTORE
let db = firebase.firestore();
let fireStoreHandler = 0;

// AGREGAR USUARIO EN CUENTA NUEVA
export const useUserSet = (id, data) => db.collection("users").doc(id).set(data);

// OBTENER USUARIOS DE FIRESTORE O CARGAR LA VERSION LOCAL
export const useUserGet = (id, listener, err) => {
  indexeddb.user.get(1, user => {
    if (user && fireStoreHandler === 0) {
      console.log("Read user from Local");
      fireStoreHandler++;
      listener(user.user);
    }
    else if (fireStoreHandler === 0) {
      db.collection("users").doc(id).get().then(user => {
        console.log("Read user from Firestore");
        fireStoreHandler++;
        indexeddb.user.put({ key: 1, user: user.data() })
        listener(user.data());
      }).catch(err);
    }
  })
}

// ============== AUTENTICACION ===============
let fbprovider, gprovider;

// OBTENER USUARIO ACTUAL
export let user = firebase.auth().currentUser;

// CONFIGURAR PROVEEDORES ( FACEBOOK Y GOOGLE )
export const setProviders = () => {
  fbprovider = new firebase.auth.FacebookAuthProvider();
  gprovider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  fbprovider.setCustomParameters({ 'display': 'popup' });
}

// INICIO DE SESION
export const useLogin = data => {
  // USUARIO NUEVO
  if (data.type === true) firebase.auth().createUserWithEmailAndPassword(data.email, data.pass).then(res => {
    useUserSet(res.user.uid, { 
      displayName: data.name, 
      email: data.email, 
      provider: res.user.providerData[0].providerId, 
      photoURL: "https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef" 
    });

    res.user.updateProfile({ 
      displayName: 
      data.name, 
      photoURL: "https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef" 
    });

    res.user.sendEmailVerification().then(() => console.log("Send verification email for new user"));
  }).catch(data.err);

  // USUARIOS EXISTENTES CON EMIAL, FACEBOOK, GOOGLE
  else if (data.type === false) firebase.auth().signInWithEmailAndPassword(data.email, data.pass).catch(data.err);
  else if (data.type === "fb") firebase.auth().signInWithRedirect(fbprovider).catch(data.err);
  else if (data.type === "g") firebase.auth().signInWithRedirect(gprovider).catch(data.err);
}

// ESCUCHADOR PARA CAMBIOS EN EL INICIO DE SESION
export const useAuth = listen => {
  useEffect(() => {
    fireStoreHandler = 0;
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) listen(user);
      else listen(false);
    });
    return () => unsubscribe();
  }, []);
}

// CERRAR SESION
export const useLogout = () => {
  firebase.auth().signOut();
  indexeddb.user.clear();
  fireStoreHandler = 0;
}

// RECUPERAR CONTRASEÑA
export const useResetPass = (email, err) => firebase.auth().sendPasswordResetEmail(email).catch(err);

// COMPROBAR SI ES UN USARIO VERIFICADO
export const useVerifiedUser = dats => {
  if (dats) {
    const userProvider = dats.providerData[0].providerId;
    if (userProvider === "facebook.com") return true;
    else dats.emailVerified;
  } else return false;
}

// ENVIAR CORREO DE VERIFICACION
export const useSendEmailVerification = () => firebase.auth().currentUser.sendEmailVerification();

// BORRAR USUARIO
export const useDeleteUser = () => firebase.auth().currentUser.delete();

// TIEMPO USUARIO DESDE SU CREACION
export let useUserTime = () => new Date(firebase.auth().currentUser.metadata.creationTime);

// CODIGOS DE ERROR EN EL INCIO DE SESION
export const useAuthError = code => {
  switch (code) {
    case "auth/app-deleted":
      return "Fallo la conexion interna, intenta recargar la pagina."
    case "auth/app-not-authorized":
      return "Esta aplicacion no esta autorizada para iniciar sesion aqui."
    case "auth/argument-error":
      return "Se envio una solitud con parametros incorrectos."
    case "auth/invalid-api-key":
      return "Las credenciales de la aplicacion son incorrectas."
    case "auth/invalid-user-token":
      return "Parece que tu cuenta se invalido."
    case "auth/network-request-failed":
      return "Comprueba tu conexion a internet."
    case "auth/operation-not-allowed":
      return "Se trato de inicar sesion en proveedor no autorizado."
    case "auth/requires-recent-login":
      return "Se registro una sesion anterior con el mismo usuario."
    case "auth/too-many-requests":
      return "Se alcanzo el limite maximo de intentos."
    case "auth/unauthorized-domain":
      return "Este sitio no esta autorizado para iniciar sesion aqui."
    case "auth/user-disabled":
      return "Este usuario ha sido deshabilitado."
    case "auth/user-token-expired":
      return "Las credenciales del usuario han expirado."
    case "auth/web-storage-unsupported":
      return "Tu navegador o dispositivo no soporta el almacenamiento interno."
    case "auth/account-exists-with-different-credential":
      return "Esta cuenta ya existe y esta registrada con otro metodo."
    case "auth/credential-already-in-used":
      return "Las credenciales de esta cuenta ya estan en uso."
    case "auth/email-already-in-use":
      return "Esta direccion de correo electronico ya esta registrado en otra cuenta."
    case "auth/user-not-found":
      return "No se ha podido encontrar el usuario, intenta nuevamente."
    case "auth/weak-password":
      return "Tu contraseña debe contener al menos 6 caracteres alfanumericos."
    case "auth/invalid-email":
      return "El correo electronico no es valido."
    case "auth/wrong-password":
      return "La contraseña no es la correcta, intenta nuevamente."
    case "auth/invalid-verification-code":
      return "El codigo introducido no es valido."
    case "auth/invalid-verification-id":
      return "El ID de verificacion no es valido."
    case "auth/captcha-check-failed":
      return "No se pudo verificar el Captcha, intenta nuevamente."
    case "auth/invalid-phone-number":
      return "El numero de telefono no es valido."
    case "auth/missing-phone-number":
      return "El numero de telefono es un campo obligatorio."
    case "auth/quota-exceeded":
      return "Se alcanzo el limite de SMS para verficacion."
    default:
      return "Error desconocido intenta de nuevo."
  }
}
