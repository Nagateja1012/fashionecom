import { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.style.scss'
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
    <div className="cart-dropdown-container">
        <div className="cart-items" >
        {cartItems.length ? (cartItems.map((cartItem) => (<CartItem key={cartItem.id} cartItem={cartItem} />))): (<span className='empty-message'>Your cart is empty</span>)
        }
        </div>
        <Button onClick={gotohandler} >Checkout</Button>
    </div>
)

}

export default Cartdropdown;