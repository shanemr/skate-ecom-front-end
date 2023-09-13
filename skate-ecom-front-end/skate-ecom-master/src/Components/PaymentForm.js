import React from "react";
import { useState } from "react";
import PurchasedItem from './PurchasedItem';
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import '../Styles/PaymentForm.css';
import { useDispatch, useSelector } from "react-redux";
import { submitOrder } from "../Actions/Actions";


function PaymentForm({progressTotal, checkoutTotal, cartItems}){
    const email = useSelector(state => state.AuthReducer.user.email);
    const dispatch = useDispatch();
    const convertToPurchasedItem = (p) =>{
        const {purchaseQuantity, ...newProduct} = p;
        const qty = p['purchaseQuantity'];
        let purchasedItem = PurchasedItem();
        purchasedItem.qty = qty;
        purchasedItem.product = newProduct;
        return purchasedItem;
    }

    const [payment, setPayment] = useState({
        card: '',
        paymentDate: null,
        amount: checkoutTotal.toFixed(2)
    });
    
    const[order, setOrder] = useState({
        userProfileDTO: {},
        price: checkoutTotal,
        date: null,
        purchasedItem: cartItems.map( i => convertToPurchasedItem(i)),
        payment: payment
    });

    const addPaymentToOrder = (p) =>{
        setOrder({...order, payment: p})
    }

    const handleCardUpdate = (e) =>{
        setPayment({...payment, card: e.target.value});
        addPaymentToOrder(payment);
    }

    
    const handlePaymentSubmit = (e) =>{
        e.preventDefault();
        
        console.log("ORDER PLACED", order);
        console.log("Payment", payment);
        dispatch(submitOrder(order, email));
        
    }

    
    
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
                    <Input id='card-number' placeholder="1234 1234 1234 1234" onChange={(e) => handleCardUpdate(e)} value={payment.card}></Input>
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
                        <Button disabled={!progressTotal} id='pay-button' color='warning' onClick={handlePaymentSubmit} style={{width:'30%', fontWeight:'bold', padding:'2%', color:'white'}}>Place Order</Button>
                    </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default PaymentForm;