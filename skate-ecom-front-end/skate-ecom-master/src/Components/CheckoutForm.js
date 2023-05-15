import React from "react";
import { useState, useEffect} from "react";
import { Button, Form, FormGroup, Input, Row, Col, Label} from 'reactstrap';
import '../Styles/CheckoutForm.css'
import '../Styles/Checkout.css'

function CheckoutForm(props){
    
    const[form, setForm] = useState({
            firstName:'',
            lastName:'',
            streetAddress:'',
            aptOrSuite:'',
            city:'',
            postCode:'',
            state: '',
            country:'',
            email:''
    });


    useEffect(() =>{
            updateProgressBar();
    },[form])

   
        
        
    const handleFormChange = (type,e) =>{
        e.preventDefault();
        switch (type) {
            case 'firstName':
                setForm({...form, firstName: e.target.value});
                break;
            case 'lastName':
                setForm({...form, lastName: e.target.value});
                break;
            case 'streetAddress':
                setForm({...form, streetAddress: e.target.value});
                break;
            case 'aptOrSuite':
                setForm({...form, aptOrSuite: e.target.value});
                break;
            case 'city':
                setForm({...form, city: e.target.value});
                break;
            case 'postCode':
                setForm({...form, postCode: e.target.value});
                break;
            case 'state':
                setForm({...form, state: e.target.value});
                break;
            case 'country':
                setForm({...form, country: e.target.value});
                break;
            case 'email':
                setForm({...form, email: e.target.value});
                break;
            default:
                break;
        }
    
    }


    const validateForm = () => {
        if(form.firstName.length >= 1 && form.lastName.length >= 1 && form.streetAddress.length >=1 
            && form.country.length >=1 && form.state.length >=1 && form.email.length >= 1 && form.city.length >= 1
            && form.postCode.length >=1){
                return true;
            }

            return false;
    }

    const updateProgressBar = () =>{
        console.log()
        console.log(validateForm());
        props.handleProgressBar(props.type, validateForm());
        
    }


    return(
        <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
            <Form className='form'>
                    <h2 style={{alignSelf:'flex-start', marginBottom:'5%'}}>{props.type} Information</h2>
                    <Row style={{textAlign:'left'}}>
                        <Col md={props.type === "Billing" ? 6 : 4}>
                            <FormGroup >
                                <Label for='fname'>First Name</Label>
                                <Input id="fname" type="text" value={form.firstName} onChange={(e) => handleFormChange('firstName', e)} placeholder="First Name"></Input>
                            </FormGroup>
                        </Col>
                        <Col md={props.type === "Billing" ? 6 : 4}>
                            <FormGroup >
                                <Label for='fname'>Last Name</Label>
                                <Input id="lname" type="text" value={form.lastName} onChange={(e) => handleFormChange('lastName',e)} placeholder="Last Name"></Input>
                            </FormGroup>
                        </Col>
                        {props.type === 'Billing' ? null : 
                        <Col md={4}>
                            <FormGroup>
                                <Label for='fname'>Email</Label>
                                <Input id="email" type="text" value={form.email} onChange={(e) => handleFormChange('email',e)} placeholder="Email"></Input>
                            </FormGroup>
                        </Col>
                        }
                    </Row>
                    <Row style={{textAlign:'left'}}>
                        <Col md={8}>
                            <FormGroup>
                                <Label for='fname'>Street Address</Label>
                                <Input id="street-address" type="text" value={form.streetAddress} onChange={(e) => handleFormChange('streetAddress',e)} placeholder='Street Address'></Input>
                            </FormGroup>  
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                                <Label for='fname'>Country</Label>
                                <Input id="country" type="text" value={form.country} onChange={(e) => handleFormChange('country',e)} placeholder='Country'></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'left'}}>
                        <Col >
                            <FormGroup>
                                <Label for='fname'>Apt/Suite{'(Optional)'}</Label>
                                <Input id="apt-num" type="number" value={form.aptOrSuite} onChange={(e) => handleFormChange('aptOrSuite',e)} placeholder="Apt/Suite/(Optional)"></Input>
                            </FormGroup>
                        </Col>
                        
                        </Row>
                    <Row style={{textAlign:'left'}}>
                    <Col md={4}>
                            <FormGroup>
                                <Label for='fname'>City</Label>
                                <Input id="city" type="text" value={form.city} onChange={(e) => handleFormChange('city',e)} placeholder='City'></Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for='fname'>State</Label>
                                <Input id="state" type="text" value={form.state} onChange={(e) => handleFormChange('state',e)} placeholder='State'></Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup >
                            <Label for='fname'>Postal Code</Label>
                            <Input id="post-code" type="text" value={form.postCode} onChange={(e) => handleFormChange('postCode',e)} placeholder='Postal Code'></Input>
                        </FormGroup>
                        </Col>
                        {props.type === "Customer" ? 
                        <Col md={4}>
                            <FormGroup style={{display:'flex', gap:'5%', alignItems:'center'}}>
                                Same as billing?
                                <Input id="billing-check" type="checkbox">Same as billing?</Input>
                            </FormGroup>
                        </Col>    
                            : null}
                    </Row>
                </Form>
        </div>
    )
}

export default CheckoutForm;