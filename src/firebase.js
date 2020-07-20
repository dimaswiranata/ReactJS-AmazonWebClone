import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBEWG6fUrsDXCuZgsQ6IQw1SCmfRBl9ZdI",
  authDomain: "webclone-27722.firebaseapp.com",
  databaseURL: "https://webclone-27722.firebaseio.com",
  projectId: "webclone-27722",
  storageBucket: "webclone-27722.appspot.com",
  messagingSenderId: "1081446217231",
  appId: "1:1081446217231:web:edc358fbe6801c10ab557a",
  measurementId: "G-8N1SJM3F5F",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
  db,
  auth
};