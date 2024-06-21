import {  createContext, useEffect, useState } from "react";
import shopdata from '../shop_data.js'
import { getCollectionsAndDocuments } from "../utils/firebase.utils.js";




export const CategoriesContext = createContext({
  categoriesMap : {},
})
 

export const CategoriesProvider = ({children}) =>{

    const [categoriesMap , setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
          const categoryMap = await getCollectionsAndDocuments();
          setCategoriesMap(categoryMap)
        };
    
        getCategoriesMap();
      }, []);


    const value = {categoriesMap}

    return(
        <CategoriesContext.Provider value= {value} >{children}</CategoriesContext.Provider> 
    )
}