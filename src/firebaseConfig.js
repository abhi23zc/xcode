// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoBkTFj2EDu2xtsrFEVVv8atiS8KsYifI",
  authDomain: "znote-cbae4.firebaseapp.com",
  projectId: "znote-cbae4",
  storageBucket: "znote-cbae4.appspot.com",
  messagingSenderId: "3449843500",
  appId: "1:3449843500:web:2f92aaf564b169c064c689"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
