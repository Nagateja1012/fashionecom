import { useContext, useState } from "react";
import {  createuserdoc, googlesigninwithpop, signinAuthuserandpassword } from "../../utils/firebase.utils";
import Form from "../form/form.component";
import Button from "../button/button.component";
import './signin.style.scss';
import { Usercontext } from "../../context/user.context";


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
    const { setusercon } = useContext(Usercontext);
    const submithandler = async (event) =>{

        event.preventDefault();


        try{
           const {user} = await signinAuthuserandpassword(email, password);
           setusercon(user)
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
        const {user} = await googlesigninwithpop();
        createuserdoc(user);
    }


    return(
        <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
            <form  onSubmit={submithandler}>
           

            <Form type = 'email' name="email" value={email} onChange={onchangehandler} label='Email' required />

            <Form type= 'password' name="password" value={password} onChange={onchangehandler} label ='Password' required/>

            <div className='buttons-container'>
            <Button type = 'submit' >Sign In</Button>
            <Button type = 'button' buttonType='google' onClick={loggoogle}>sign in with google </Button> 
            </div>

            

            </form>
        </div>
    );






};
export default Signinform