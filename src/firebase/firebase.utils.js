import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAo78OvSocLaf3eADj-5t4cSNzAa1rUpps",
    authDomain: "ecommerceclothes-4ca4e.firebaseapp.com",
    databaseURL: "https://ecommerceclothes-4ca4e.firebaseio.com",
    projectId: "ecommerceclothes-4ca4e",
    storageBucket: "ecommerceclothes-4ca4e.appspot.com",
    messagingSenderId: "601231516774",
    appId: "1:601231516774:web:4fe5b96980c7171c71f9a7",
    measurementId: "G-7GXCWRLNPW"
  };


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
