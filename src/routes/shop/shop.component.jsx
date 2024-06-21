

import './shop.style.scss'
import { Route, Routes } from "react-router-dom";
import CategoryRoute from "../categoryRoute/categoryRoute.component";
import CategoryPreviewRoute from '../categoryPreviewRoute/categoryPreviewRoute.component';



const Shop =() =>{
   
    return(
       <Routes>
        <Route index element= {<CategoryPreviewRoute />} />
        <Route path=':category' element={<CategoryRoute />} />
       </Routes>
    )
}
export default Shop;