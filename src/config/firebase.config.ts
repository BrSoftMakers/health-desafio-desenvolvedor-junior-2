import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCIJc1f_-Kuix0oj0-gZDAvz6pqIyvUhXI',
  authDomain: 'pettest-fbf71.firebaseapp.com',
  projectId: 'pettest-fbf71',
  storageBucket: 'pettest-fbf71.appspot.com',
  messagingSenderId: '117266355612',
  appId: '1:117266355612:web:248974e6a435dbe985e459'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});
