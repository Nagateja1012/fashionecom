import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedlistner, createuserdoc } from "../utils/firebase.utils";


export const Usercontext = createContext({
    setusercon: () => null,
    usercon : null,
});




export const Userprovider = ({children}) =>{

const [usercon, setusercon] = useState(null);
const value = {usercon, setusercon};

useEffect(()=>{

    const unsubscribe = onAuthStateChangedlistner((user)=>{
        if(user){
            createuserdoc(user);
        }
        setusercon(user);
    });
    return unsubscribe
},[])

return (
    <Usercontext.Provider value = {value} >{children}</Usercontext.Provider>
)
};