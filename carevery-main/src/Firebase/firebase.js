import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAnxs47z783pt-VmI-MWQl6XCVeKy1lMnM",
  authDomain: "carguardian-dd131.firebaseapp.com",
  projectId: "carguardian-dd131",
  storageBucket: "carguardian-dd131.firebasestorage.app",
  messagingSenderId: "600909202605",
  appId: "1:600909202605:web:ee3c992f6019419a0ef224",
  measurementId: "G-HMDW7E50EC"
};


const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;