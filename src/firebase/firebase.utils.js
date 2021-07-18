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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // snapshot represents that data, not the doc in the db
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user`, error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
