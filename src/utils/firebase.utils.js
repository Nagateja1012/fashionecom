import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup , createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc, writeBatch, collection, query, getDocs} from "firebase/firestore"




const {REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MESSAGING_SENDER_ID, REACT_APP_APP_ID} =process.env

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID
}

console.log(firebaseConfig)
  
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

  export const addcollectionsAndDocuments = async (collectionKey,
    objectsToAdd) =>{
      const batch = writeBatch(db)
      const collectionRef = collection(db, collectionKey)
      objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef, object)
      });

      await batch.commit();

  }

  export const getCollectionsAndDocuments = async () =>{
    const collectionRef = collection(db, 'collections')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
    return categoryMap
  }

  export const createAuthuserandpassword = async (email, password) =>{
       if(!email || !password) return;
       
       return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signinAuthuserandpassword = async (email, password) =>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signoutAuthuser = async () => await signOut(auth);

export const onAuthStateChangedlistner =  (callback) => onAuthStateChanged(auth, callback);  