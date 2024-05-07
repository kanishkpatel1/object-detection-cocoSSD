// FirebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDK4U3msdqBDV0Qmu9djxsf2_59__T2m1M",
    authDomain: "object-detection-6575d.firebaseapp.com",
    projectId: "object-detection-6575d",
    storageBucket: "object-detection-6575d.appspot.com",
    messagingSenderId: "216765022457",
    appId: "1:216765022457:web:f5696e531c3b9b7f772228",
    measurementId: "G-BQD2M3RWFD"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();
  
  export { firebaseApp, auth, googleProvider };
