import { initializeApp } from "firebase/app";
import { Firestore, getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcWDxXv03Y8ejzd48iz42FK6SeCRu1LDw",
  authDomain: "pritanorka.firebaseapp.com",
  projectId: "pritanorka",
  storageBucket: "pritanorka.appspot.com",
  messagingSenderId: "986722691576",
  appId: "1:986722691576:web:94ed3e8abfebfd9cca4e0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);