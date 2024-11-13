import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBgdO8fkPCtzMFDo_x9YvHvQHrhRioykKE",
  authDomain: "almfors.firebaseapp.com",
  projectId: "almfors",
  storageBucket: "almfors.firebasestorage.app",
  messagingSenderId: "312583721006",
  appId: "1:312583721006:web:fc7e3f895866cd35a60fbf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);