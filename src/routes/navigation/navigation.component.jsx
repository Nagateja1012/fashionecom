import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Crwnlogo} from "../../assests/crown.svg"
import './navigation.style.scss'
import { Usercontext } from "../../context/user.context";
import { signoutAuthuser } from "../../utils/firebase.utils";


const Navigation = () => {

    const {usercon, setusercon} = useContext(Usercontext);

    const signOutHandler = async () => {
        await signoutAuthuser();
        setusercon(null);
    }

    return(
        <Fragment>
            <div className="navigation">
            <Link className='logo-container'  to='/'>
                <Crwnlogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link to='/shop' className="nav-link"> SHOP</Link>
                {usercon ? (<span className='nav-link' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </span>): 
            

                (<Link to='/auth' className="nav-link"> SIGN-IN</Link>)} 

            </div>
            </div>
            <Outlet />
        </Fragment>
        
    );
}

export default Navigation;