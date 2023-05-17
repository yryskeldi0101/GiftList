// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyC-EdhCIvVGTHRtxlsBq6F07zLqmuAos5w',
   authDomain: 'giftlist-733f3.firebaseapp.com',
   projectId: 'giftlist-733f3',
   storageBucket: 'giftlist-733f3.appspot.com',
   messagingSenderId: '210527508847',
   appId: '1:210527508847:web:8f8aa02a5f3d7deba3b09a',
   measurementId: 'G-MEP77BHBQT',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
