import React from 'react'
import "../Styles/Checkout.css"
import { Button, Form, FormGroup, Input, Row, Col, Progress, Spinner, Label } from 'reactstrap';
import CheckoutForm from './CheckoutForm';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ItemSummary from './ItemSummary';
import PaymentForm from './PaymentForm';

function Checkout(){

    const cartItems = useSelector((state) => state.CartReducer.cartItems);
    const total = useSelector((state) => state.CartReducer.total);
    const[checkoutTotal,setCheckoutTotal] = useState(0);
    const[shipBillSame, setShipBillSame] = useState(false);
    const[shippingCost, setShippingCost] = useState(0)
    const[taxes, setTaxes] = useState(0);

    let formTypes = ['Customer', 'Billing', 'ShippingType', 'Payment']
    const [formType, setFormtype] = useState(formTypes[0]);

    const[checkoutProgress, setCheckoutProgress] = useState({
        shipping:2,
        billing: 0,
        payment: 0,
        review: 0
    });


    const updateShippingCost = (e) =>{
        setShippingCost(Number(e.target.value));
    }

    
    const handleCheckBillSame = (val) =>{
        setShipBillSame(val);
    }


    const updateTotalAtCheckout = () =>{
        setCheckoutTotal(total + shippingCost + taxes);
    }

    useEffect(() =>{
        setTaxes(total * 0.0825)
    },[cartItems])

    useEffect(() =>{
        updateTotalAtCheckout();
    },[total,taxes,shippingCost])


    
    const handleProgressBar = (progressType, isVal) =>{
            switch (progressType){
                case 'Customer':
                    if(checkoutProgress.shipping < 25 && isVal){
                        setCheckoutProgress({...checkoutProgress, shipping: checkoutProgress.shipping + 23});
                    }
                    if(checkoutProgress.shipping === 25 && !isVal){
                        setCheckoutProgress({...checkoutProgress, shipping: 2});
                    }
                    break;
                default:
                    break;    
            }
    }

    
   
    

    return(
        <div className='checkout-container'>
            
            <div className='form-container' style={{backgroundColor:''}}>
                <div className="progress-container">
                    <div className='progress-steps'>
                        <h5 style={{alignSelf:'flex-start', marginLeft:'5%'}}>1. Customer</h5>
                        <h5 style={{alignSelf:'center', marginLeft:'5%'}}>2. Billing</h5>
                        <h5 style={{alignSelf:'flex-end', marginLeft:'5%'}}>3. Shipping</h5>
                        <h5 style={{alignSelf:'flex-end', marginLeft:'5%'}}>4. Payment</h5>
                    </div>
                    <Progress multi  style={{width:'90%'}}>
                        <Progress bar value={checkoutProgress.shipping} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                        <Progress bar color="success" value={checkoutProgress.billing} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                        <Progress bar color="info" value={checkoutProgress.payment} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                        <Progress bar color="info" value={checkoutProgress.review} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                    </Progress>
                </div>
                <div className='form-group'>
                    <CheckoutForm type={"Customer"} handleCheckBillSame={handleCheckBillSame} handleProgressBar={handleProgressBar} />
                    <CheckoutForm type={"Billing"} isSameAsShipping={shipBillSame} handleProgressBar={handleProgressBar} />
                    <div id='shipping-info-container'>
                        <h2>Shipping</h2>
                        <Form>
                            <FormGroup>
                                <Input id='reg-shipping' type='radio' value={0.00} name='shipping' style={{marginRight:'2%'}} onChange={updateShippingCost}></Input>
                                <Label for='reg-shipping'>Regular Shipping: 3 - 5 business days - <span style={{fontWeight:'bold'}}>{'(Free)'}</span></Label>
                            </FormGroup>
                            <FormGroup>
                                <Input id='express-shipping'type='radio' value={12.00}name='shipping' style={{marginRight:'2%'}} onChange={updateShippingCost}></Input>
                                <Label for='express-shipping'>Express Shipping: 1 - 2 business days - <span style={{fontWeight:'bold'}}>{'($12.00)'}</span></Label>
                            </FormGroup>
                            <FormGroup>
                                <Input id='overnight-shipping' type='radio' value={25.00}name='shipping' style={{marginRight:'2%'}} onChange={updateShippingCost}></Input>
                                <Label for='overnight-shipping'>Overnight Shipping: 1 business day - <span style={{fontWeight:'bold'}}>{'($25.00)'}</span></Label>
                            </FormGroup>
                        </Form>
                    </div>
                    <PaymentForm></PaymentForm>
                </div>
            </div>
            <div className='summary-container'>
                <div className='summary-details'>
                    <h3>Order Summary</h3>
                    <p>Shipping and Taxes</p>
                    <ul id='checkout-list'>
                        <li className='checkout-list-items'>Shipping - ${shippingCost.toFixed(2)}</li>
                        <li className='checkout-list-items'>Taxes - ${taxes.toFixed(2)}</li>
                        <li className='checkout-list-items'>Discount - $5.00 with code SKATE</li>
                    </ul>  
                    <h5>Total: {checkoutTotal.toFixed(2)}</h5>
                </div>
                
                <div className='product-list'>
                    <h3>Cart Summary</h3>
                    <div className='scroll-list'>
                        {cartItems.length >= 1 ? 
                            cartItems.map(p =>{
                                return(
                                    <ItemSummary item={p}/>
                                )
                            })
                        : null}  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
