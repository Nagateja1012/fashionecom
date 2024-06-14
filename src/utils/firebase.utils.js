import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCoiXgW2Ic2HuSeMgq-cbnGb7cX8BmavPc",
    authDomain: "crwn-clothing-88c86.firebaseapp.com",
    projectId: "crwn-clothing-88c86",
    storageBucket: "crwn-clothing-88c86.appspot.com",
    messagingSenderId: "339283618637",
    appId: "1:339283618637:web:01c175807e5369f1ce2504"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt : 'select_account',
  });

  export const auth = getAuth();
  export const googlesigninwithpop = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createuserdoc = async (authuser, additionalinfo = {}) => {
    if(!authuser) return
    const docuser = doc(db, 'users', authuser.uid);
    const snapshot = await getDoc(docuser);

    if(!snapshot.exists()){
        const {displayName, email} = authuser;
        const createAt =new Date();

        try{
            await setDoc(docuser, { displayName, email, createAt, ...additionalinfo});
        }catch (e){
            console.log('error creating doc', e.message);
        }
    }

    

  }

  export const createAuthuserandpassword = async (email, password) =>{
       if(!email || !password) return;
       
       return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signinAuthuserandpassword = async (email, password) =>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth,email,password);
}