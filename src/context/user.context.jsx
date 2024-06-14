import { createContext, useState } from "react";


export const Usercontext = createContext({
    setusercon: () => null,
    usercon : null,
});

export const Userprovider = ({children}) =>{
const [usercon, setusercon] = useState(null);
const value = {usercon, setusercon};

return (
    <Usercontext.Provider value = {value} >{children}</Usercontext.Provider>
)
};