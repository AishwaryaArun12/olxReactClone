import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyCsfa6HdCspWn6G4NV2so4sSGFGael9J0A",
        authDomain: "olxreact-4404d.firebaseapp.com",
        projectId: "olxreact-4404d",
        storageBucket: "olxreact-4404d.appspot.com",
        messagingSenderId: "912631879896",
        appId: "1:912631879896:web:255727fc5fab23cbe49fad",
        measurementId: "G-V27PZY3EM2"
      };

      
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);