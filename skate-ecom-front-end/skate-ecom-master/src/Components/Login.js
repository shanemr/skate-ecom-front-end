import React from 'react'
import {Form, FormGroup, Input, Button, Label} from 'reactstrap'
import {useState} from 'react'
import '../Styles/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateSuccess, authenticateFailure} from '../Actions/Actions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [invalidLogin, setinvalidLogin] = useState();
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const[userData, setUser] = useState({
        email: '',
        password: ''
    })


    const[disabled, setDisabled] = useState(false)


    const handleNameChange = (e) =>{
        setUser({...userData, email: e.target.value})
    }

    const handlePwChange = (e) =>{
        setUser({...userData, password: e.target.value})
    }

      function handleLogin(e){
        axios.post(serverUrl + '/auth/authenticate', userData)
             .then(result => {
                     dispatch(authenticateSuccess(result.data))
                     setErrorMessage();
                     navigate("/profile");
                })
                .catch(error => {
                     dispatch(authenticateFailure(error.data))
                     setErrorMessage(error);
                })
    }

    

    
    

    return(
        <div id='login-container'>
            <Form id='login-form'>
                <h3 style={{marginBottom:'5%'}}>LOGIN</h3>
                { errorMessage ? <span style={{color:'red'}}>Invalid Email and/or Password</span> : null}
                <FormGroup id='un-form-group' className='form-groups'>
                    <Label for='userName' style={{fontWeight:'bold'}}>Email</Label>
                    <Input id='userName' type='text' value={userData.email} onChange={handleNameChange}></Input>
                </FormGroup>
                <FormGroup id='pw-form-group' className='form-groups'>
                    <Label for='pw' style={{fontWeight:'bold'}}>Password</Label>
                    <Input id='pw' type='password' value={userData.password} onChange={handlePwChange}></Input>
                </FormGroup>
                <FormGroup id='btn-form-group' className='form-groups'>
                    <Button color='primary' id='login-btn' disabled={!userData.email || !userData.password} onClick={handleLogin}>LOGIN</Button>
                </FormGroup>
                <span>New User? Create Account!</span>
            </Form>

        </div>
    )
}

export default Login;