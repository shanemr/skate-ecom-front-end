import React from "react";
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import '../Styles/PaymentForm.css';


function PaymentForm(){
    return(
        <div className="payment-form-container">
            <h2 style={{alignSelf:'flex-start'}}>Payment Information</h2>
            <Form>
                <Row>
                    <Col md={4}>
                    <FormGroup >
                        <Label for='credit-card'>Credit Card</Label>
                        <Input id='credit-card' name='card-type' type='radio' value={'credit-card'} style={{marginLeft:'5%'}}/>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label for='debit-card'>Debit Card</Label>
                            <Input id='debit-card'  name='card-type' type='radio' value={'debit-card'} style={{marginLeft:'5%'}}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for='full-name'>Enter Full Name {'(as on card)'}</Label>
                        <Input id='full-name' type='text' placeholder="Full Name"></Input>
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for='card-number'>Card Number</Label>
                    <Input id='card-number' placeholder="1234 1234 1234 1234"></Input>
                </FormGroup>
                <Row>
                    <Col>
                    <FormGroup>
                        <Label for='full-name'>Expiration Date</Label>
                        <Input id='experation' placeholder="MM/YY"></Input>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for='cvc'>CVC</Label>
                        <Input id='cvc' placeholder="CVC"></Input>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormGroup>
                        <Button id='pay-button' color='warning' style={{width:'30%', fontWeight:'bold', padding:'2%', color:'white'}}>Place Order</Button>
                    </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default PaymentForm;