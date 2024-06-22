import { useContext } from 'react'
import {CheckoutHeader, Checkoutcontainer, HeaderBlock, Total} from './checkout.styles'
import { CartContext } from '../../context/cart.context'
import CheckoutItem from '../../components/checkoutItem/checkoutitem.component'

const Checkout = () => {
    const {cartItems, totalamount} = useContext(CartContext)
    return (
        <Checkoutcontainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartitem) => {
        
        return (
        <CheckoutItem  key={cartitem.id} cartitem={cartitem}/>
      )})}
      <Total>TOTAL: ${totalamount}</Total>
      </Checkoutcontainer>
    )
}

export default Checkout;