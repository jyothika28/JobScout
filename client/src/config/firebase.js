import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider,OAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC56k_eax9nm7FPKXTFGYDa2lAmvQ-2ORU",
    authDomain: "jobscout-721c5.firebaseapp.com",
    projectId: "jobscout-721c5",
    storageBucket: "jobscout-721c5.firebasestorage.app",
    messagingSenderId: "601074199132",
    appId: "1:601074199132:web:4e97e28b383a1558909499",
    measurementId: "G-13TTQP5Z7J"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const microsoftProvider = new OAuthProvider('microsoft.com').setCustomParameters({
   prompt: 'consent' // Get Consent from user to access their basic info (optional - Reommended only during SignUp)
  })
export { auth, signInWithRedirect,googleProvider,microsoftProvider };
