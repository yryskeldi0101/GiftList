import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// Конфигурация Firebase
const firebaseConfig = {
   apiKey: 'AIzaSyB8TDrFqN_XSfFqTUeZW4xyWy85TLZL9no',
   authDomain: 'giftlist-b8-d3a98.firebaseapp.com',
   projectId: 'giftlist-b8-d3a98',
   storageBucket: 'giftlist-b8-d3a98.appspot.com',
   messagingSenderId: '915811469069',
   appId: '1:915811469069:web:4024e316992f6649139244',
   measurementId: 'G-DDMS5YKTBX',
}

// Инициализация Firebase
firebase.initializeApp(firebaseConfig)

// Получение провайдера аутентификации Google
const googleProvider = new firebase.auth.GoogleAuthProvider()

// Экспорт необходимых объектов
export { firebase, googleProvider }
