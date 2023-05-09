import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwTmYxh1lggXpcIBnzXiIc9gJU89DpKbI",
  authDomain: "b-finaldatabase.firebaseapp.com",
  databaseURL: "https://b-finaldatabase-default-rtdb.firebaseio.com",
  projectId: "b-finaldatabase",
  storageBucket: "b-finaldatabase.appspot.com",
  messagingSenderId: "457296722851",
  appId: "1:457296722851:web:d4a90344c02ff4c75af816",
  measurementId: "G-5JL096RKJQ"

}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

}

export {firebase}