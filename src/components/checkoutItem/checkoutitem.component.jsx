
import { useContext } from 'react';
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from './checkoutitem.styles'
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartitem}) =>{

    const { imageUrl, name, price, quantity} = cartitem
    const { removeProduct, additemtocart, reduceitemquantity } = useContext(CartContext)
    const removeItemHandler = () => removeProduct(cartitem);
    const addproducthandler = () => additemtocart(cartitem);
    const reduceitemquantityhandler = () => reduceitemquantity(cartitem);

    return(
        <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow  onClick= {reduceitemquantityhandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addproducthandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={removeItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
    )

}

export default CheckoutItem;