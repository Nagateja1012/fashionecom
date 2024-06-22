import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Crwnlogo} from "../../assests/crown.svg"
import { Usercontext } from "../../context/user.context";
import { signoutAuthuser } from "../../utils/firebase.utils";
import Carticon from "../../components/cart-icon/cartIcon.component";
import Cartdropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import {NavigationContainer,NavLink,NavLinks,LogoContainer} from "./navigation.style"

const Navigation = () => {

    const {usercon} = useContext(Usercontext);
    const { iscartopen} = useContext(CartContext)

   

    return(
        <Fragment>
            <NavigationContainer>
            <LogoContainer to='/'>
                <Crwnlogo className="logo" />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop' > SHOP</NavLink>
                {usercon ? (<NavLink as='span' onClick={signoutAuthuser}>
              {' '}
              SIGN OUT{' '}
            </NavLink>): 
            

                (<NavLink to='/auth' > SIGN-IN</NavLink>)} 
                <Carticon />

                </NavLinks>
             {iscartopen && <Cartdropdown /> }
             </NavigationContainer>
            <Outlet />
        </Fragment>
        
    );
}

export default Navigation;