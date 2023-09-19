import React, { useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SuccessPopUp from "./SuccessPopUp";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Signup.css";


function SignUp(){
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const[toggle, setToggle] = useState(false);
    const[userForm, setUserForm] = useState({
        email: '',
        password:'',
        role: null
    });

    const[userDetailsForm, setUserDetailsForm] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNum: ''
    });

    const handleFormChange = (section, e)=>{
        switch (section){
            case 'email':
                setUserForm({...userForm, email: e.target.value});
                setUserDetailsForm({...userDetailsForm, email: e.target.value});
                break;
            case 'password':
                setUserForm({...userForm, password: e.target.value});
                break;
            case 'firstName':
                setUserDetailsForm({...userDetailsForm, firstName: e.target.value});
                break;
            case 'lastName':
                setUserDetailsForm({...userDetailsForm, lastName: e.target.value});
                break;
            case 'phone':
                setUserDetailsForm({...userDetailsForm, phoneNum: e.target.value});
                break;
            default:
                break;
        }
    }

    const submitForm = (e)=>{
        e.preventDefault();
        axios.post(serverUrl + "/new-user/registration", {userDTO: userForm, userProfileDTO: userDetailsForm})
        .then( result =>{
            console.log(result);
            setToggle(!toggle);
        })
        .catch(error =>{
            console.log(error);
        })
    }

   const formValidation = () =>{
    
   } 

    


    return(
        <div id="main-sign-up-container">
            <div id='sign-up-form-container'>
                <Form id='sign-up-form'>
                    <h3 style={{marginBottom:'5%'}}>Sign Up</h3>
                    <FormGroup id='fn-form-group' className='form-groups'>
                        <Input id='firstName'  value={userDetailsForm.firstName} onChange={(e) => handleFormChange('firstName', e)} placeholder="First name"></Input>
                    </FormGroup>
                    <FormGroup id='ln-form-group' className='form-groups'>                       
                        <Input id='lastName'  value={userDetailsForm.lastName} onChange={(e) => handleFormChange('lastName', e)} placeholder="Last name"></Input>
                    </FormGroup>
                    <FormGroup id='email-form-group' className='form-groups'>                        
                        <Input id='email' type='email' value={userForm.email} onChange={(e) => handleFormChange('email', e)} placeholder="Email"></Input>
                    </FormGroup>
                    <FormGroup id='pw-form-group' className='form-groups'>                       
                        <Input id='pw' type='password' value={userForm.password} onChange={(e) => handleFormChange('password', e)} placeholder="Password"></Input>
                    </FormGroup>
                    <FormGroup id='btn-form-group' className='form-groups'>
                        <Button style={{backgroundColor:'black'}} id='login-btn' disabled={false} onClick={e => submitForm(e)}>Create Account</Button>
                    </FormGroup>
                    <span>Already have an account? <Link to='/login'>sign in</Link></span>
                </Form>
            </div>
            <div className='sign-up-details-container'>
                <div className='sign-up-bck-image-container'>
                <h3>Never miss out on the latest deals</h3>
                <br/>
                <h3>Sign up and recieve emails</h3>
                </div>
               
            </div>
            <SuccessPopUp message={"Registration Successful! Close pop up and login"} isOpen={toggle} navigation={'/login'}/>
            
        </div>
    )
}


export default SignUp;