import Firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAmL2V4oUiX_P7PrjK3a6t485riLdphroY',
  authDomain: 'transporters8.firebaseapp.com',
  projectId: 'transporters8',
  storageBucket: 'transporters8.appspot.com',
  messagingSenderId: '884952037159',
  appId: '1:884952037159:web:9163ef4ac6d5e18f2e5b02',
  measurementId: 'G-2GQLMHL9YQ',
}

let app = null
if (!Firebase.apps.length) {
  app = Firebase.initializeApp(firebaseConfig)
}

export default Firebase
