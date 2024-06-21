import {  createContext, useState } from "react";
import shopdata from '../shop_data.json'




export const Productcontext = createContext({
    products : [],
})

export const Productcontextprovider = ({children}) =>{
    const [products , setproducts] = useState(shopdata)
    const value = {products}

    return(
        <Productcontext.Provider value= {value} >{children}</Productcontext.Provider> 
    )
}