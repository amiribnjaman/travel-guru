import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwejha0IviBBySLOuJRI4Cn-5RRxTJRGw",
  authDomain: "travel-guru-b2787.firebaseapp.com",
  projectId: "travel-guru-b2787",
  storageBucket: "travel-guru-b2787.appspot.com",
  messagingSenderId: "919897853836",
  appId: "1:919897853836:web:ca0de4bf79464088d510a9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;