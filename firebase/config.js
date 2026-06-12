import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey : "AIzaSyCS0wBha7xC3F0OckdRDnJw348FqynPAHs" , 
  authDomain : "learniverse-8c29a.firebaseapp.com" , 
  projectId : "learniverse-8c29a" , 
  storageBucket : "learniverse-8c29a.firebasestorage.app" , 
  messagingSenderId : "399430548762" , 
  appId : "1:399430548762:web:4f41fa41b7e0882fd280a3" , 
  measurementId : "G-GS3MW6558Z" 
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);