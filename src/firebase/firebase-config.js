import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCzk5R3_SqY24UEafIjxlOwY7hrro2IXyo",
  authDomain: "react-curso-jm.firebaseapp.com",
  projectId: "react-curso-jm",
  storageBucket: "react-curso-jm.appspot.com",
  messagingSenderId: "927963634027",
  appId: "1:927963634027:web:9ac9ad5a1f2738c460942e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}
