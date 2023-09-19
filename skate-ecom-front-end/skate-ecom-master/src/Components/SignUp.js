import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Signup.css";


function SignUp(){
    const[userForm, setForm] = useState({
        email: '',
        password:'',
        role:''
    });

    const[userDetailsForm, setUserDetailsForm] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNum: ''
    });

    const handleFormChange = (section, e)=>{
        switch (section){

        }
    }


    return(
        <div id="main-sign-up-container">
            <div id='sign-up-form-container'>
                <Form id='sign-up-form'>
                    <h3 style={{marginBottom:'5%'}}>Sign Up</h3>
                    <FormGroup id='fn-form-group' className='form-groups'>
                        <Input id='firstName'  value={userDetailsForm.firstName} onChange={handleFormChange} placeholder="First name"></Input>
                    </FormGroup>
                    <FormGroup id='ln-form-group' className='form-groups'>                       
                        <Input id='lastName'  value={userDetailsForm.firstName} onChange={handleFormChange} placeholder="Last name"></Input>
                    </FormGroup>
                    <FormGroup id='email-form-group' className='form-groups'>                        
                        <Input id='email' type='email' value={userForm.email} onChange={handleFormChange} placeholder="Email"></Input>
                    </FormGroup>
                    <FormGroup id='pw-form-group' className='form-groups'>                       
                        <Input id='pw' type='password' value={userForm.password} onChange={handleFormChange} placeholder="Password"></Input>
                    </FormGroup>
                    <FormGroup id='btn-form-group' className='form-groups'>
                        <Button style={{backgroundColor:'black'}} id='login-btn' disabled={false}>Create Account</Button>
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
        </div>
    )
}


export default SignUp;