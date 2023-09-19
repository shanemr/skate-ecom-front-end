
const  CheckoutFormReducer = (formState={shipping : {}, billing: {}, payment: {}},action) =>{
    switch (action.type) {
        
        case 'SHIPPING_FORM_DATA':
            let newShipping = {...formState, shipping: action.data}
            return newShipping;
        case 'BILLING_FROM_DATA':
            let newBilling = {...formState, billing: action.data}
            return newBilling;
        case 'PAYMENT_DATA':
            let newPayment = {...formState, payment: action.data}
            return newPayment;
        default:
           return formState;
    }

}


export default CheckoutFormReducer;