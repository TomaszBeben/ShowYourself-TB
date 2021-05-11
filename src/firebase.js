import firebase from 'firebase'
import 'firebase/auth'
import { firebaseApi } from '../ignore/indywidualFirebaseApi'

const firebaseApp = firebase.initializeApp(
  firebaseApi
  // apiKey: "AIzaSyBO9uASvkUUEg4fCFLZ2DgF5MY34cP9yHk",
  // authDomain: "showyourself-tb.firebaseapp.com",
  // projectId: "showyourself-tb",
  // storageBucket: "showyourself-tb.appspot.com",
  // messagingSenderId: "437706410699",
  // appId: "1:437706410699:web:a0a60d06e7c957e3ee294e"
)

export const auth = firebaseApp.auth()
export default firebaseApp
