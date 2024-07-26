import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpk9xzp8SuvvckfzL6LDQ9-cpGj49xd5U",
  authDomain: "mini-blog-c48a8.firebaseapp.com",
  projectId: "mini-blog-c48a8",
  storageBucket: "mini-blog-c48a8.appspot.com",
  messagingSenderId: "218877636693",
  appId: "1:218877636693:web:25c4df6867f0aca68e64dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();


export {db};