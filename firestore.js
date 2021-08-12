
import firebase from 'firebase'
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyC9EiBGhKroHoFc8TlVqk74SXouyRQntok",
    authDomain: "wily-f462b.firebaseapp.com",
    projectId: "wily-f462b",
    storageBucket: "wily-f462b.appspot.com",
    messagingSenderId: "1090151434791",
    appId: "1:1090151434791:web:722db7037ba29d43ee1c02"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();