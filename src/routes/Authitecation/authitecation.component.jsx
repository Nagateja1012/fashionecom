import Signinform from "../../components/signin/signin.component";
import Signupform from "../../components/signup/signup.component";
import './authitecation.style.scss'

const Auth = () => {
    

    return(
    <div className='authentication-container'>
        <Signinform />
        
        <Signupform />
        
    </div>
        
    );
}

export default Auth;