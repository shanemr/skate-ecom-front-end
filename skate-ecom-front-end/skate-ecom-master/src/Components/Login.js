import React from 'react'
import {Form, FormGroup, Input, Button, Label} from 'reactstrap'
import {useState} from 'react'
import '../Styles/Login.css'




function Login(){

    const[user, setUser] = useState({
        userName: '',
        pw: ''
    })

    const[disabled, setDisabled] = useState(true)


    const handleNameChange = (e) =>{
        setUser({...user, userName: e.target.value})
    }

    const handlePwChange = (e) =>{
        setUser({...user, pw: e.target.value})
    }


    return(
        <div id='login-container'>
            <Form id='login-form'>
                <h3 style={{marginBottom:'5%'}}>LOGIN</h3>
                <FormGroup id='un-form-group' className='form-groups'>
                    <Label for='userName' style={{fontWeight:'bold'}}>User Name</Label>
                    <Input id='userName' type='text' value={user.userName} onChange={handleNameChange}></Input>
                </FormGroup>
                <FormGroup id='pw-form-group' className='form-groups'>
                    <Label for='pw' style={{fontWeight:'bold'}}>Password</Label>
                    <Input id='pw' type='password' value={user.pw} onChange={handlePwChange}></Input>
                </FormGroup>
                <FormGroup id='btn-form-group' className='form-groups'>
                    <Button color='primary' id='login-btn' disabled={disabled}>LOGIN</Button>
                </FormGroup>
                <span>New User? Create Account!</span>
            </Form>

        </div>
    )
}

export default Login;