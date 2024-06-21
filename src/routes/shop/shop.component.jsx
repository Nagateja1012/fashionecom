
import { useContext } from "react";
import { Productcontext } from "../../context/product.context";
import ProductCard from "../../components/productscard/product-card.component";
import './shop.style.scss'



const Shop =() =>{
    const {products} = useContext(Productcontext)
    return(
        <div className='products-container'>
            {products.map((product)=>{
                return(
                <ProductCard key={product.id}  product = {product} />  )
            })}
        </div>
    )
}
export default Shop;