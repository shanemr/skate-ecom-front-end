import React from 'react'
import "../Styles/Checkout.css"
import {Form, FormGroup, Input,Progress, Label, Button } from 'reactstrap';
import CheckoutForm from './CheckoutForm';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ItemSummary from './ItemSummary';
import PaymentForm from './PaymentForm';
import { useNavigate } from 'react-router-dom';



function Checkout(){
   
    const cartItems = useSelector((state) => state.CartReducer.cartItems);
    const total = useSelector((state) => state.CartReducer.total);
    const formData = useSelector((formState) => formState.CheckoutFormReducer.shipping);
    const navigate = useNavigate();
    const[checkoutTotal,setCheckoutTotal] = useState(0);
    const[shipBillSame, setShipBillSame] = useState(false);
    const[shippingCost, setShippingCost] = useState(0)
    const[taxes, setTaxes] = useState(0);
    const[nextForm, setNextForm] = useState('Customer');
    const[checkoutProgress, setCheckoutProgress] = useState({
        customer:2,
        billing: 0,
        payment: 0,
        shipping: 0,
        progressTotal: function(){
            let total = this.customer + this.billing + this.payment + this.shipping;
            return total;
        }
    });
    
    


    const handleNextForm = (formType, e) =>{
        switch (formType) {
            case 'Customer':
                    if(shipBillSame){
                        setCheckoutProgress({...checkoutProgress, billing: 25});
                        setNextForm('Shipping')
                    } else{
                        setNextForm('Billing');
                    }
                break;
            case 'Billing':
                setNextForm('Shipping');
                break;
            case 'Shipping':
                setNextForm('Payment')
                break;
            default:
                break;
        }
    }

    const handleBackForm = (fromType) =>{
        let forms = ['Customer','Billing','Shipping','Payment']
        switch (fromType) {
            case 'Customer':
                    setNextForm('Customer'); 
                    break;
            case 'Billing':
                    setNextForm('Customer');
                    break;
            case 'Shipping':
                    setNextForm('Billing');
                    break;
            case 'Payment':
                    setNextForm('Shipping');
                    break;
            default:
                break;
        }
    }

  

    const updateShippingCost = (e) =>{
        setShippingCost(Number(e.target.value));
        handleProgressBar("Shipping");
    }

    
    const handleCheckBillSame = (e) =>{
        setShipBillSame(!shipBillSame);    
    }
        

    const updateTotalAtCheckout = () =>{
        setCheckoutTotal(total + shippingCost + taxes);
    }

    useEffect(() =>{
        setTaxes(total * 0.0825);
        if(cartItems.length <= 0){
            navigate('/');
        }
    },[cartItems])

    useEffect(() =>{
        updateTotalAtCheckout();
    },[total,taxes,shippingCost])


    
    const handleProgressBar = (progressType, isVal) =>{
            switch (progressType){
                case 'Customer':
                    if(checkoutProgress.customer < 25 && isVal){
                        setCheckoutProgress({...checkoutProgress, customer: checkoutProgress.customer + 23});
                    }
                    if(checkoutProgress.customer === 25 && !isVal){
                        setCheckoutProgress({...checkoutProgress, customer: 2});
                    }
                    break;
                case 'Billing':
                    if(checkoutProgress.billing < 25 && isVal){
                            setCheckoutProgress({...checkoutProgress, billing: checkoutProgress.billing + 25});
                    }
                    if(checkoutProgress.billing === 25 && !isVal){
                        setCheckoutProgress({...checkoutProgress, billing: 0});
                    } break;
                case 'Shipping':
                    if(checkoutProgress.shipping < 25){
                        setCheckoutProgress({...checkoutProgress, shipping: checkoutProgress.shipping + 25});
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
                        <Progress bar value={checkoutProgress.customer} style={{textAlign:'center', fontWeight:'bold', width:'10%'}}></Progress>
                        <Progress bar value={checkoutProgress.billing} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                        <Progress bar value={checkoutProgress.shipping} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                        <Progress bar value={checkoutProgress.payment} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                    </Progress>
                </div>
                <div className='form-group'>
                    {nextForm === 'Customer' ? <CheckoutForm type={"Customer"}  shipBillSame={shipBillSame} handleNextForm={handleNextForm} handleCheckBillSame={handleCheckBillSame} handleProgressBar={handleProgressBar} />
                    : nextForm === 'Billing' ? <CheckoutForm type={"Billing"} formData={shipBillSame ? formData : null} handleNextForm={handleNextForm} handleProgressBar={handleProgressBar} />
                    : nextForm === 'Shipping' ?  <div id='shipping-info-container'>
                    <h2>Shipping</h2>
                    <Form >
                        <FormGroup>
                            <Input id='reg-shipping' type='radio' value={0.00} name='shipping' style={{marginRight:'2%'}} onChange={updateShippingCost}></Input>
                            <Label for='reg-shipping'>Regular Shipping: 3 - 5 business days - <span style={{fontWeight:'bold'}}>{'(Free)'}</span></Label>
                        </FormGroup>
                        <FormGroup>
                            <Input id='express-shipping'type='radio' value={12.00}name='shipping' style={{marginRight:'2%'}} onChange={updateShippingCost}></Input>
                            <Label for='express-shipping'>Express Shipping: 1 - 2 business days - <span style={{fontWeight:'bold'}}>{'($12.00)'}</span></Label>
                        </FormGroup>
                        <FormGroup>
                            <Input  id='overnight-shipping' type='radio' value={25.00}name='shipping' style={{marginRight:'2%'}} onChange={updateShippingCost}></Input>
                            <Label for='overnight-shipping'>Overnight Shipping: 1 business day - <span style={{fontWeight:'bold'}}>{'($25.00)'}</span></Label>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={e => handleNextForm("Shipping", e)}>Next</Button>
                        </FormGroup>
                    </Form>
                </div>
                    : nextForm === 'Payment' ?  <PaymentForm progressTotal={checkoutProgress} cartItems={cartItems} checkoutTotal={checkoutTotal}></PaymentForm>
                    : null}  
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
                                    <ItemSummary key={p.description} item={p}/>
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
