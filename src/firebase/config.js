import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

    const firebaseConfig = {
      apiKey: "AIzaSyAzZipgkqmE6DpqqGV8wYz-eRepF1bIDDc",
      authDomain: "olxclone-37f48.firebaseapp.com",
      projectId: "olxclone-37f48",
      storageBucket: "olxclone-37f48.appspot.com",
      messagingSenderId: "1061305032302",
      appId: "1:1061305032302:web:1ebf7046996002a72cd07f",
      measurementId: "G-9N57BRLVTJ"
      };

      
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app); // Initialize the authentication service
      const db = getFirestore(app);
      const storage = getStorage(app);
      export  { auth,db,storage };
