
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAky52Kc1mpbwr3ERdiKHXDg-aUfCYqwfI",
    authDomain: "disneyplus-clone-4bb0d.firebaseapp.com",
    projectId: "disneyplus-clone-4bb0d",
    storageBucket: "disneyplus-clone-4bb0d.appspot.com",
    messagingSenderId: "490710236165",
    appId: "1:490710236165:web:ae20af4162c61d70ca306c",
    measurementId: "G-E5WH0FPD9M"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 const auth = getAuth();
 const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
  // const storage = firebase.storage();
  
  export { auth, provider };
  export default db;