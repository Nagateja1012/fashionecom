
import { useContext } from 'react';
import './checkoutitem.styles.scss';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartitem}) =>{

    const { imageUrl, name, price, quantity} = cartitem
    const { removeProduct, additemtocart, reduceitemquantity } = useContext(CartContext)
    const removeItemHandler = () => removeProduct(cartitem);
    const addproducthandler = () => additemtocart(cartitem);
    const reduceitemquantityhandler = () => reduceitemquantity(cartitem);

    return(
        <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow'  onClick= {reduceitemquantityhandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addproducthandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
    )

}

export default CheckoutItem;