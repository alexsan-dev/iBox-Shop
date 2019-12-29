import React, { useEffect, useRef, useContext, useState } from 'react';
import firebase from '../credentials/servers';
import Dexie from 'dexie';
import 'firebase/auth';
import "firebase/firestore"

//local DB
let indexeddb = {};
let db = firebase.firestore();

export const useDB = () => {
  indexeddb = new Dexie("localDB");
  indexeddb.version(1).stores({ user: 'key, user' })
  indexeddb.open().then(() => console.log("OpenDB")).catch(err => console.log("Error during open db ", err));
}

// Intervals for states
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();
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
}

// Firestore
export const useUserSet = (id, data) => db.collection("users").doc(id).set(data);
export const useUserGet = (id, listener, err) => db.collection("users").doc(id).get().then(listener).catch(err);

// Firebase Auth
let fbprovider, gprovider;
export const useLogout = () => firebase.auth().signOut();

export const setProviders = () => {
  fbprovider = new firebase.auth.FacebookAuthProvider();
  gprovider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  fbprovider.setCustomParameters({ 'display': 'popup' });
}

export const useAuth = listen => {
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) listen(user);
      else listen(false);
    });
    return () => unsubscribe();
  }, []);
}

export const useResetPass = (email, err) => firebase.auth().sendPasswordResetEmail(email).catch(err);

export const useLogin = data => {
  if (data.type === true) firebase.auth().createUserWithEmailAndPassword(data.email, data.pass).then(res => {
    useUserSet(res.user.uid, { displayName:data.name, email:data.email,  provider:res.user.providerData[0].providerId , photoURL:"https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef"});
    res.user.updateProfile({displayName:data.name, photoURL:"https://firebasestorage.googleapis.com/v0/b/iboxshops.appspot.com/o/profile.png?alt=media&token=cd5f21df-ce9d-4ebe-9bcb-a35b391cd5ef"});
  }).catch(data.err);
  else if (data.type === false) firebase.auth().signInWithEmailAndPassword(data.email, data.pass).catch(data.err);
  else if (data.type === "fb") firebase.auth().signInWithRedirect(fbprovider).catch(data.err);
  else if (data.type === "g") firebase.auth().signInWithRedirect(gprovider).catch(data.err);
}

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

export const user = firebase.auth().currentUser;
