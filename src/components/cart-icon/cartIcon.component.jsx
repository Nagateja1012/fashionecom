import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/carticon.svg'
import { CartContext } from '../../context/cart.context';
import './cartIcon.styles.scss'


const Carticon = () =>{
    const {iscartopen, setisopen, cartitemcount} = useContext(CartContext)

    const toggleiscartopen =() => setisopen(!iscartopen)
return(
    <div className="cart-icon-container" onClick={toggleiscartopen}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartitemcount}</span>
    </div>
)
}

export default Carticon;