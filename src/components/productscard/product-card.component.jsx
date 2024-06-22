import { useContext } from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {Footer,Name,Price, ProductCartContainer} from './product-card.style'
import { CartContext } from "../../context/cart.context";

const ProductCard = ({product}) =>{
    const {name, price, imageUrl} = product;
    const { additemtocart } = useContext(CartContext)
    const addproduct = () => additemtocart(product)
    return(
        
            <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addproduct} >Add to card</Button>
    </ProductCartContainer>
      
    )

}
export default ProductCard;