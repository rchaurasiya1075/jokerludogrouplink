/* ===============================
   FIREBASE IMPORT
================================*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
collection,
query,
where,
orderBy,
limit,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* ===============================
   FIREBASE CONFIG
================================*/
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


// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


/* ===============================
   LOAD GROUPS FROM FIRESTORE
================================*/
async function loadGroups(){

const container = document.getElementById("latestGroups");
if(!container) return;

container.innerHTML = "Loading groups...";

const q = query(
collection(db, "Groups"),
where("status", "==", "approved"),
orderBy("timestamp", "desc"),
limit(6)
);

const snapshot = await getDocs(q);

container.innerHTML = "";

if(snapshot.empty){
container.innerHTML = "No groups available.";
return;
}

snapshot.forEach(doc => {
const group = doc.data();

container.innerHTML += `
<div class="card group">
<h3>${group.name}</h3>
<p>${group.description || ""}</p>
<a href="${group.link}" target="_blank" class="btn small">Join Group</a>
</div>
`;
});

}

loadGroups();
