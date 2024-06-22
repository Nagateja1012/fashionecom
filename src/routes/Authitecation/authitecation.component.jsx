import Signinform from "../../components/signin/signin.component";
import Signupform from "../../components/signup/signup.component";
import {Authentication} from './authitecation.style'

const Auth = () => {
    

    return(
    <Authentication>
        <Signinform />
        
        <Signupform />
        
    </Authentication>
        
    );
}

export default Auth;