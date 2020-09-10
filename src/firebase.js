import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZ_PXuBjZE5zNrxDIlWcYpWW7xoyCQxus",
    authDomain: "facebook-messenger-clone-2fbaf.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-2fbaf.firebaseio.com",
    projectId: "facebook-messenger-clone-2fbaf",
    storageBucket: "facebook-messenger-clone-2fbaf.appspot.com",
    messagingSenderId: "695111150055",
    appId: "1:695111150055:web:d48e7ae99a34dabb463542"
});

const db = firebaseApp.firestore();

export default db;


