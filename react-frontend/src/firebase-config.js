import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAll0T-vTbug0eW_SWH20KtYiCIqXYFcrI",
  authDomain: "emedicalapp-ff3be.firebaseapp.com",
  projectId: "emedicalapp-ff3be",
  storageBucket: "emedicalapp-ff3be.appspot.com",
  messagingSenderId: "837318081990",
  appId: "1:837318081990:web:96ee712d1694f46f9b46c7",
  measurementId: "G-NPDTE0STVT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
