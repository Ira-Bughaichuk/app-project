import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoyY7uARoFGczkzi1CyRJpcBWUwJevhsI",
  authDomain: "newmobile-app.firebaseapp.com",
  projectId: "newmobile-app",
  storageBucket: "newmobile-app.appspot.com",
  messagingSenderId: "210701285737",
  appId: "1:210701285737:web:d9544856aac0129d01a5f8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


