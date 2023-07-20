
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBlSmmJuyzgVemTD65mphw3pArN-rnFSso",
    authDomain: "movie-ticket-8782a.firebaseapp.com",
    projectId: "movie-ticket-8782a",
    storageBucket: "movie-ticket-8782a.appspot.com",
    messagingSenderId: "577475221889",
    appId: "1:577475221889:web:94c097e87493c7b9aeb080",
    measurementId: "G-PR3DFNQGZJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); //Now we can use authentication service

