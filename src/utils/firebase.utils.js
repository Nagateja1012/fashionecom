import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: `${process.env.apiKey}`,
  authDomain: `${process.env.authDomain}`,
  projectId: `${process.env.projectId}`,
  storageBucket: `${process.env.storageBucket}`,
  messagingSenderId: `${process.env.messagingSenderId}`,
  appId: `${process.env.appId}`,
  } ;
  
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