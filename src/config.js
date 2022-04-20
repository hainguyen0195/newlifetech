import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChKE1uFGrPYBpyHvIVyFg5TOrE2EeBXRc",
    authDomain: "lifetechweb-f5db6.firebaseapp.com",
    databaseURL: "https://lifetechweb-f5db6-default-rtdb.firebaseio.com",
    projectId: "lifetechweb-f5db6",
    storageBucket: "lifetechweb-f5db6.appspot.com",
    messagingSenderId: "469487391047",
    appId: "1:469487391047:web:21d0d11af63f0d57e97c62",
    measurementId: "G-24CP08NP29"
})
var db= firebaseApp.firestore();

//const auth  = firebase.auth()
// const db = firebase.firestore()
const storage = firebase.storage()

export {db,storage};