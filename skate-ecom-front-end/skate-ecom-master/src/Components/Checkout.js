import React from 'react'
import "../Styles/Checkout.css"
import { Button, Form, FormGroup, Input, Row, Col, Progress, Spinner } from 'reactstrap';
import CheckoutForm from './CheckoutForm';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ItemSummary from './ItemSummary';

function Checkout(){

    const cartItems = useSelector((state) => state.CartReducer.cartItems);
    const total = useSelector((state) => state.CartReducer.total);
    let formTypes = ['Shipping', 'Billing', 'Payment', 'Review']
    const [formType, setFormtype] = useState(formTypes[0]);

    const[checkoutProgress, setCheckoutProgress] = useState({
        shipping:2,
        billing: 0,
        payment: 0,
        review: 0
    });


    
    const handleContinueClick = (num) =>{
        console.log(num)
        switch (formType) {
            case 'Shipping':
                setCheckoutProgress({...checkoutProgress, shipping: 25});
                break;
            case 'Billing':
                setCheckoutProgress({...checkoutProgress, billing: 25});
                break;
            case 'Payment':
                setCheckoutProgress({...checkoutProgress, payment: 25});
                break;
            case 'Review':
                setCheckoutProgress({...checkoutProgress, review: 25});
                break;
            default:
                break;
        }
        setFormtype(formTypes[formTypes.findIndex((t) => t === formType) + 1])
    }

    const handleBackClick = () =>{
        switch (formType) {
            case 'Shipping':
                setCheckoutProgress({...checkoutProgress, shipping: 25});
                break;
            case 'Billing':
                setCheckoutProgress({...checkoutProgress, shipping: 25});
                break;
            case 'Payment':
                setCheckoutProgress({...checkoutProgress, shipping: 25});
                break;
            case 'Review':
                setCheckoutProgress({...checkoutProgress, shipping: 25});
                break;
            default:
                break;
        }
        setFormtype(formTypes[formTypes.findIndex((t) => t === formType) + 1])
    }

    
   

    return(
        <div className='checkout-container'>
            
            <div className='form-container' style={{backgroundColor:''}}>
                <div className='progress-steps'>
                    <h5 style={{alignSelf:'flex-start', marginLeft:'5%'}}>1. Shipping</h5>
                    <h5 style={{alignSelf:'center', marginLeft:'5%'}}>2. Billing</h5>
                    <h5 style={{alignSelf:'flex-end', marginLeft:'5%'}}>3. Payment</h5>
                    <h5 style={{alignSelf:'flex-end', marginLeft:'5%'}}>4. Review</h5>
                </div>
                <Progress multi  style={{width:'90%'}}>
                    <Progress bar value={checkoutProgress.shipping} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                    <Progress bar color="success" value={checkoutProgress.billing} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                    <Progress bar color="info" value={checkoutProgress.payment} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                    <Progress bar color="info" value={checkoutProgress.review} style={{textAlign:'center', fontWeight:'bold'}}></Progress>
                </Progress>
                <div className='form-group'>
                    <CheckoutForm type={"Shipping"} handleContinueClick={() => handleContinueClick(1)}/>
                    <CheckoutForm type={"Billing"} handleContinueClick={() => handleContinueClick(2)}/>
                </div>
            </div>
            <div className='summary-container'>
                <div className='summary-details'>
                    <h3>OrderSummary</h3>
                    <p>Total: {total.toFixed(2)}</p>
                    <p>Shipping and taxes</p>
                </div>
                <div className='product-list'>
                    <span>Items</span>
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
