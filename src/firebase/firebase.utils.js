import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyDYcbU_K3Nx7rTmKAvS9a65qCi_LlgAZ2c",
  authDomain: "crwn-clothing-d62ca.firebaseapp.com",
  projectId: "crwn-clothing-d62ca",
  storageBucket: "crwn-clothing-d62ca.appspot.com",
  messagingSenderId: "615270753112",
  appId: "1:615270753112:web:22d3c10f4310b38e2cfb2d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
