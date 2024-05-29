import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import 'firebase/auth'
import {getAuth,GithubAuthProvider,GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAlCjFy_Jzq9khLFDN9JJIkF_tJ9SOKbxc",
    authDomain: "book-store-dc042.firebaseapp.com",
    projectId: "book-store-dc042",
    storageBucket: "book-store-dc042.appspot.com",
    messagingSenderId: "849589003964",
    appId: "1:849589003964:web:0dabe1d5626e1a6d63d2b9",
    measurementId: "G-GWCXTJFDD3"
  };

const app = firebase.initializeApp(firebaseConfig)

export const myDatabase = firebase.firestore()

export const auth = getAuth(app)

export const gitHubProvider = new GithubAuthProvider()
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()