import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB2QCASotKaVsJ5utcqRDur6aduqZzdsnQ",
  authDomain: "todoist-3e754.firebaseapp.com",
  databaseURL: "https://todoist-3e754.firebaseio.com",
  projectId: "todoist-3e754",
  storageBucket: "todoist-3e754.appspot.com",
  messagingSenderId: "476980176367",
  appId: "1:476980176367:web:068ac3f0808f1d08d7821a"
})

export { firebaseConfig as firebase }