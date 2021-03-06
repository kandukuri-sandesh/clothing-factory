import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
    apiKey: "AIzaSyBd7rGS_lRt7D4hH0vMBZ46L4rSnCm-Mmk",
    authDomain: "crwn-db-6.firebaseapp.com",
    projectId: "crwn-db-6",
    storageBucket: "crwn-db-6.appspot.com",
    messagingSenderId: "460430388995",
    appId: "1:460430388995:web:3b9db53cf5dac02c354336",
    measurementId: "G-QHVT5B4SJF"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   

   if(!snapShot.exists){
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
      }
       catch(error){
         console.log('error creating user',error.message)
       }
     }
      return userRef
   }

  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt :'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;