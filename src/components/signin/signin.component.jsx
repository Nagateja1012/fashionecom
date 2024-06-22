import {  useState } from "react";
import {   googlesigninwithpop, signinAuthuserandpassword } from "../../utils/firebase.utils";
import Form from "../form/form.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContainer, ButtonsContainer} from './signin.style'



const defaultformvalues = {
 
    email:'',
    password:'',
    
};


const Signinform = () =>{

    const [formvalues, setformvalues] = useState(defaultformvalues);
    const { email, password} = formvalues;

    const resetform = () => {
        setformvalues(defaultformvalues);
    }
    
    const submithandler = async (event) =>{

        event.preventDefault();


        try{
            await signinAuthuserandpassword(email, password);
           
            resetform();
        }
        catch (e) {
            if(e.code === 'auth/invalid-credential'){
                alert('Invalid user / password')
            }else{
                console.log(e)
            }

        }
    }

    const onchangehandler = (event) =>{
        const {name, value} = event.target;
        setformvalues({...formvalues, [name] : value});
    }
    const loggoogle = async () => {
        await googlesigninwithpop();
        
    }


    return(
        <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
            <form  onSubmit={submithandler}>
           

            <Form type = 'email' name="email" value={email} onChange={onchangehandler} label='Email' required />

            <Form type= 'password' name="password" value={password} onChange={onchangehandler} label ='Password' required/>

            <ButtonsContainer>
            <Button type = 'submit' >Sign In</Button>
            <Button type = 'button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={loggoogle}>sign in with google </Button> 
            </ButtonsContainer>

            

            </form>
        </SignInContainer>
    );






};
export default Signinform