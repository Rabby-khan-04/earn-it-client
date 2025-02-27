// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRflXhF6b-wxN7W5mxtIj7wCPaQ7I38Vk",
  authDomain: "earn-it-c1c6b.firebaseapp.com",
  projectId: "earn-it-c1c6b",
  storageBucket: "earn-it-c1c6b.firebasestorage.app",
  messagingSenderId: "886114960467",
  appId: "1:886114960467:web:8625d38f9bce142cdbb2a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
