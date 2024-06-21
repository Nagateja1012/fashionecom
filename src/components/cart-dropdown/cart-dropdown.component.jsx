import { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.style.scss'
import { CartContext } from '../../context/cart.context'
import CartItem from '../cart-items/cart-items.component'

const Cartdropdown = () =>{
    const { cartItems } = useContext(CartContext)
return (
    <div className="cart-dropdown-container">
        <div className="cart-items" >
        {cartItems.length ? (cartItems.map((cartItem) => (<CartItem key={cartItem.id} cartItem={cartItem} />))): (<span className='empty-message'>Your cart is empty</span>)
        }
        </div>
        <Button>GO TO Checkout</Button>
    </div>
)

}

export default Cartdropdown;