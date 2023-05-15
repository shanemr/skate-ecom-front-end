import React from "react";

const  CheckoutFormReducer = (state={shipping : {}, billing: {}, payment: {}},action) =>{

    switch (action.type) {
        case 'SHIPPING_FORM_DATA':
            let newShipping = {...state, shipping: action.data}
            return newShipping;
        case 'BILLING_FROM_DATA':
            let newBilling = {...state, billing: action.data}
            return newBilling;
        case 'PAYMENT_DATA':
            let newPayment = {...state, payment: action.data}
            return newPayment;
        default:
           return state;
    }

}


export default CheckoutFormReducer;