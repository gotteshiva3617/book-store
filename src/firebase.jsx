import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import 'firebase/auth'
import {getAuth,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider,EmailAuthCredential} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlCjFy_Jzq9khLFDN9JJIkF_tJ9SOKbxc",
  authDomain: "book-store-dc042.firebaseapp.com",
  projectId: "book-store-dc042",
  storageBucket: "book-store-dc042.appspot.com",
  messagingSenderId: "849589003964",
  appId: "1:849589003964:web:f994d5b71a33a66f63d2b9",
  measurementId: "G-VP4TWJ6YR0"
}


const app = firebase.initializeApp(firebaseConfig)

export const myDatabase = firebase.firestore()

//connect to Authentication
// GoogleAuthProvider
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()

export const gitHubProvider = new GithubAuthProvider()

export const facebookProvider = new FacebookAuthProvider()

export const emailProvider = new EmailAuthCredential()


// if(!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig)
// }
// const app = firebase.initializeApp(firebaseConfig)

// export const myDatabase = firebase.firestore()

// export const auth = getAuth(app)

// export const googleProvider = new GoogleAuthProvider()



// export { firestore }

//https://book-store-dc042.firebaseapp.com/__/auth/handler

//https://book-store-dc042.firebaseapp.com/__/auth/handler