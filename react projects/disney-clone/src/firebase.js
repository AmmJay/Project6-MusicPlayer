import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB3xwk7EPbgwtFWh16LGYiyL5_7D4cBkrg",
    authDomain: "disneyplus-clone-d2fb3.firebaseapp.com",
    projectId: "disneyplus-clone-d2fb3",
    storageBucket: "disneyplus-clone-d2fb3.appspot.com",
    messagingSenderId: "469278108178",
    appId: "1:469278108178:web:da801a75faa9568c3c06cb",
    measurementId: "G-GXY09YDEHK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export {db};
  