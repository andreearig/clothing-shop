import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDIXRHx_jGGGQmD9fuSIxorPaazb2eRf84",
  authDomain: "crwn-db-b5c1d.firebaseapp.com",
  projectId: "crwn-db-b5c1d",
  storageBucket: "crwn-db-b5c1d.appspot.com",
  messagingSenderId: "247045489019",
  appId: "1:247045489019:web:602991522b2b9b0663bdde",
  measurementId: "G-7GELFP0FKH",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;