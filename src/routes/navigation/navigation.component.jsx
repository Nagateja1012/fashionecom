import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Crwnlogo} from "../../assests/crown.svg"
import './navigation.style.scss'
import { Usercontext } from "../../context/user.context";
import { signoutAuthuser } from "../../utils/firebase.utils";
import Carticon from "../../components/cart-icon/cartIcon.component";
import Cartdropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";


const Navigation = () => {

    const {usercon} = useContext(Usercontext);
    const { iscartopen} = useContext(CartContext)

   

    return(
        <Fragment>
            <div className="navigation">
            <Link className='logo-container'  to='/'>
                <Crwnlogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link to='/shop' className="nav-link"> SHOP</Link>
                {usercon ? (<span className='nav-link' onClick={signoutAuthuser}>
              {' '}
              SIGN OUT{' '}
            </span>): 
            

                (<Link to='/auth' className="nav-link"> SIGN-IN</Link>)} 
                <Carticon />

            </div>
             {iscartopen && <Cartdropdown /> }
            </div>
            <Outlet />
        </Fragment>
        
    );
}

export default Navigation;