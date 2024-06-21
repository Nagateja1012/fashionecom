import { useContext } from 'react'
import './checkout.styles.scss'
import { CartContext } from '../../context/cart.context'
import CheckoutItem from '../../components/checkoutItem/checkoutitem.component'

const Checkout = () => {
    const {cartItems, totalamount} = useContext(CartContext)
    return (
        <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartitem) => {
        
        return (
        <CheckoutItem  key={cartitem.id} cartitem={cartitem}/>
      )})}
      <div className='total'>TOTAL: ${totalamount}</div>
      </div>
    )
}

export default Checkout;