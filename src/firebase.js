import firebase from 'firebase'
import 'firebase/auth'
import { firebaseApi } from './ignore/firebaseAPI'

const firebaseApp = firebase.initializeApp(
  firebaseApi
)

export const auth = firebaseApp.auth()
export default firebaseApp
