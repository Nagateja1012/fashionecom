import { useState } from "react";
import { createAuthuserandpassword, createuserdoc } from "../../utils/firebase.utils";
import Form from "../form/form.component";
import Button from "../button/button.component";
import './signup.style.scss'


const defaultformvalues = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
};

const Signupform = () =>{

    const [formvalues, setformvalues] = useState(defaultformvalues);
    const {displayName, email, password, confirmPassword} = formvalues;

    const resetform = () => {
        setformvalues(defaultformvalues);
    }

    const submithandler = async (event) =>{

        event.preventDefault();

        if(password != confirmPassword){
            alert('passwords do not match');
            return
        }

        try{
            const {user} = await createAuthuserandpassword(email, password);

            await createuserdoc(user,{displayName});
            resetform();
        }
        catch (e) {
            if(e.code === 'auth/email-already-in-use' ){
                alert('cannot create user, email already in use');
            }else {
                console.log('error creating doc', e.message)
            }

        }
    }

    const onchangehandler = (event) =>{
        const {name, value} = event.target;
        setformvalues({...formvalues, [name] : value});
    }


    return(
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
            <form  onSubmit={submithandler}>
            <Form type= 'text' name="displayName" value={displayName} onChange={onchangehandler} label= 'Name'  required/>

            <Form type = 'email' name="email" value={email} onChange={onchangehandler} label='Email' required/>

            <Form type= 'password' name="password" value={password} onChange={onchangehandler} label ='Password' required/>

            <Form type = 'password' name="confirmPassword" value={confirmPassword} onChange={onchangehandler} label = 'Confirm Password' required />

            <Button type = 'submit' >Sign Up</Button>

            </form>
        </div>
    );






};
export default Signupform