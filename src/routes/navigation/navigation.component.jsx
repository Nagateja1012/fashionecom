import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Crwnlogo} from "../../assests/crown.svg"
import './navigation.style.scss'


const Navigation = () => {

    return(
        <Fragment>
            <div className="navigation">
            <Link className='logo-container'  to='/'>
                <Crwnlogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link to='/shop'>
                    SHOP
                </Link>
            </div>
            </div>
            <Outlet />
        </Fragment>
        
    );
}

export default Navigation;