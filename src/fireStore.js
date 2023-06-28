import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyALzypfXqeWqRJbhQzBYAgww6QUK-FCqf4",
  authDomain: "clone-b8e70.firebaseapp.com",
  projectId: "clone-b8e70",
  storageBucket: "clone-b8e70.appspot.com",
  messagingSenderId: "876053738395",
  appId: "1:876053738395:web:ed2a9e4fe73005580be73e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
