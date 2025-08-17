import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWlsN0YY_XM97th5n-8FpVSfGB7ZCTkPA",
  authDomain: "deakin-questions.firebaseapp.com",
  projectId: "deakin-questions",
  storageBucket: "deakin-questions.firebasestorage.app",
  messagingSenderId: "778538878591",
  appId: "1:778538878591:web:da0426c700ec14e0ea614a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage so we can use them in components
export const db = getFirestore(app);
export const storage = getStorage(app);
