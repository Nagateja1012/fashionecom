import { useContext } from 'react'
import Button from '../button/button.component'
import {CartDropdown, EmptyMessage, CartItems} from './cart-dropdown.style'
import { CartContext } from '../../context/cart.context'
import CartItem from '../cart-items/cart-items.component'
import { useNavigate } from 'react-router-dom'

const Cartdropdown = () =>{
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate();
    const gotohandler =() => {
        navigate('/checkout')
    }
return (
    <CartDropdown>
        <CartItems>
        {cartItems.length ? (cartItems.map((cartItem) => (<CartItem key={cartItem.id} cartItem={cartItem} />))): (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }
        </CartItems>
        <Button onClick={gotohandler} >Checkout</Button>
    </CartDropdown>
)

}

export default Cartdropdown;