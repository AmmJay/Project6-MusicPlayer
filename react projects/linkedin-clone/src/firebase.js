import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZU9TQoSXvzlwnIjbfxejAfBvjQ_r5vy8",
    authDomain: "linkedin-clone-mjay.firebaseapp.com",
    projectId: "linkedin-clone-mjay",
    storageBucket: "linkedin-clone-mjay.appspot.com",
    messagingSenderId: "804703654903",
    appId: "1:804703654903:web:76da8fc74d980c653754f2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };