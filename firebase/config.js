import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD86rAYQ1BXM_I41E1PVo9VwOTWdcUxRhs",
  authDomain: "vecchio-coder-nextjs.firebaseapp.com",
  projectId: "vecchio-coder-nextjs",
  storageBucket: "vecchio-coder-nextjs.appspot.com",
  messagingSenderId: "507404261795",
  appId: "1:507404261795:web:2b35d5fe6c3e2a1c82e216",
};

const app = initializeApp(firebaseConfig);

const FirestoreDatabase = getFirestore(app);
const auth = getAuth(app);

const storage = getStorage(app)

export { FirestoreDatabase, auth, storage };
