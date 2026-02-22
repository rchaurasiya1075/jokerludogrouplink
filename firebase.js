import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMhdxU4pDqby11Ymixup2aCoEY5eZ3e7M",
  authDomain: "jokerludogroup-a8c97.firebaseapp.com",
  projectId: "jokerludogroup-a8c97",
  storageBucket: "jokerludogroup-a8c97.appspot.com",
  messagingSenderId: "1083106195650",
  appId: "1:1083106195650:web:fae27e9bb0798e96f4235b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
