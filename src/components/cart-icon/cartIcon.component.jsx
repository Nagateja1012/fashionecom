import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/carticon.svg'
import { CartContext } from '../../context/cart.context';
import {CartIconContainer, ItemCount} from './cartIcon.styles'


const Carticon = () =>{
    const {iscartopen, setisopen, cartitemcount} = useContext(CartContext)

    const toggleiscartopen =() => setisopen(!iscartopen)
return(
    <CartIconContainer onClick={toggleiscartopen}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartitemcount}</ItemCount>
    </CartIconContainer>
)
}

export default Carticon;