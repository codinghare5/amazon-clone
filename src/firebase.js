import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBRB42s2_VZz9jK0HOuzYeHET85Te4Ph00",
    authDomain: "clone-b2c1c.firebaseapp.com",
    databaseURL: "https://clone-b2c1c.firebaseio.com",
    projectId: "clone-b2c1c",
    storageBucket: "clone-b2c1c.appspot.com",
    messagingSenderId: "758129069271",
    appId: "1:758129069271:web:566989e0fc5e1424277492"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
