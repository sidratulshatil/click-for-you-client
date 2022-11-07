// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWSugj3Rsx2iNYx3bbvKX2SsP4RR6rjeU",
    authDomain: "click-for-you.firebaseapp.com",
    projectId: "click-for-you",
    storageBucket: "click-for-you.appspot.com",
    messagingSenderId: "930967296656",
    appId: "1:930967296656:web:0f9b712d3e5377ff0a9615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app