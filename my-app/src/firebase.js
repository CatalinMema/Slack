import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDLsUa3e2USyNhO811d8H4mGN9WJmr-W5c",
    authDomain: "slack-2ffe2.firebaseapp.com",
    projectId: "slack-2ffe2",
    storageBucket: "slack-2ffe2.appspot.com",
    messagingSenderId: "903392191891",
    appId: "1:903392191891:web:0dca748cc2094da73c7466"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth , provider};