import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAbFhzscxcmUoZ9HnEawJLa0JiCmFayg60",
    authDomain: "knight-c719f.firebaseapp.com",
    projectId: "knight-c719f",
    storageBucket: "knight-c719f.firebasestorage.app",
    messagingSenderId: "605627921243",
    appId: "1:605627921243:web:3a1d1e618c51d5d6bea07e"
};

const app = initializeApp(firebaseConfig);

// On exporte la base de données et l'authentification pour les rendre utilisables ailleurs
export const db = getFirestore(app);
export const auth = getAuth(app);