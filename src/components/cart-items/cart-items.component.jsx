import {CartItemCon, ItemDetails} from './cart-items.styles'


const CartItem = ({cartItem}) =>{
    const {imageUrl, price, name, quantity} = cartItem

    return (
        <CartItemCon>
        <img src={imageUrl} alt= {`${name}`}></img>
        <ItemDetails>
            <span >{name}</span>
            <span > {quantity} x ${ price}</span>
        </ItemDetails>

        </CartItemCon>
    )
}

export default CartItem;
