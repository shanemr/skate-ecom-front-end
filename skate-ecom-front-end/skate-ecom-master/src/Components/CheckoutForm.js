import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Row, Col} from 'reactstrap';
import '../Styles/CheckoutForm.css'
import '../Styles/Checkout.css'

function CheckoutForm(props){
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[streetAddress, setStreetAddress] = useState('');
    const[aptOrSuite, setaptOrSuite] = useState('');
    const[city, setCity] = useState('');
    const[postCode, setPostCode] = useState('');
    const[state, setState] = useState('');
    const[country, setCountry] = useState('');


    const handleFormData = () =>{
        setFirstName('');
        setLastName('');
        setStreetAddress('');
        setaptOrSuite('');
        setCity('');
        setCountry('');
        setPostCode('');
        setState('');
        props.handleContinueClick();
    }
        
        


    const handleFormChange = (type,e) =>{
        e.preventDefault();
        switch (type) {
            case 'firstName':
                setFirstName(e.target.value);
                break;
            case 'lastName':
                setLastName(e.target.value);
                break;
            case 'streetAddress':
                setStreetAddress(e.target.value);
                break;
            case 'aptOrSuite':
                setaptOrSuite(e.target.value);
                break;
            case 'city':
                setCity(e.target.value);
                break;
            case 'postCode':
                setPostCode(e.target.value);
                break;
            case 'state':
                setState(e.target.value);
                break;
            case 'country':
                setCountry(e.target.value);
                break;
            default:
                break;
        }
    }


    return(
        <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
            <Form className='form'>
                    <h5 style={{alignSelf:'flex-start', marginLeft:'5%', marginBottom:'5%'}}>{props.type} Information</h5>
                    <Row>
                        <FormGroup>
                            <Input type="text" value={country} onChange={(e) => handleFormChange('country',e)} placeholder='Country'></Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup >
                                <Input type="text" value={firstName} onChange={(e) => handleFormChange('firstName', e)} placeholder="First Name"></Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup >
                                <Input type="text" value={lastName} onChange={(e) => handleFormChange('lastName',e)} placeholder="Last Name"></Input>
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                            <FormGroup>
                                <Input type="text" value={streetAddress} onChange={(e) => handleFormChange('streetAddress',e)} placeholder='Street Address'></Input>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup>
                                <Input type="number" value={aptOrSuite} onChange={(e) => handleFormChange('aptOrSuite',e)} placeholder="Apt/Suite/(Optional)"></Input>
                            </FormGroup>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input type="text" value={city} onChange={(e) => handleFormChange('city',e)} placeholder='City'></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input type="text" value={state} onChange={(e) => handleFormChange('state',e)} placeholder='State'></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row md={2}>
                        <FormGroup>
                            <Input type="text" value={postCode} onChange={(e) => handleFormChange('postCode',e)} placeholder='Postal Code'></Input>
                        </FormGroup>
                    </Row>
                    {props.type === 'Review' ? 
                    <Row>
                        <FormGroup>
                            <Button onClick={handleFormData}>Continue</Button>
                        </FormGroup>
                    </Row>
                    : null}
                    
                </Form>
        </div>
    )
}

export default CheckoutForm;