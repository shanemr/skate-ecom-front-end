
import axios from "axios"

const serverUrl = process.env.REACT_APP_SERVER_URL;
console.log(serverUrl);

   const headers = {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }




export function getAllProducts(type){
    return dispatch =>{
        axios.get(serverUrl + '/api/all' + type, headers)
             .then( result =>{
                
                dispatch(getProducts(result.data))
             })
             .catch(error =>{
                console.log(error);
             })
    }
}

export function getAllProductBrandNames(){
    return dispatch =>{
        axios.get(serverUrl +'/api/allBrands', headers)
             .then( result =>{
                dispatch(getProductBrandNames(result.data))
             })
             .catch(error =>{
                console.log(error);
             })
    }
}


export function authorization(){
    return dispatch =>{
        axios.post(serverUrl + '/auth/authenticate', headers)
             .then(result => {
                    dispatch(authinticate(result.data))
                })
                .catch(error => {
                    console.log(error);
                })

    }
}





export function getProducts(products){
    return{
        type: 'GET_PRODUCTS',
        products
    }
}

export function getProductBrandNames(brands){
    return{
        type: 'GET_BRAND_NAMES',
        brands
    }
}


export function getCart(){
    return{
        type: 'GET_CART'
    }
}

export const addToCart = (product, qty = 0) =>{
    return{
        type: 'ADD_TO_CART',
        product,
        qty
               
    }
}

export const removeFromCart = (product) =>{
    return{
        type: 'REMOVE_FROM_CART',
        product
    }
}

export const removeAllFromCart = (product) =>{
    return{
        type: 'REMOVE_ALL_FROM_CART',
        product
    }
}

export const clearCart = () =>{
    return{
        type: 'CLEAR_CART'
    }
}
 export const shippingFormInfo = (data) =>{
    console.log("SHIPPING INFO ACTION CALLED", data);
    return{
        type: 'SHIPPING_FORM_DATA',
        data
    }
 }

 export const billingFormInfo = (data) =>{
    return{
        type: 'BILLING_FORM_DATA',
        data
    }
 }

 export const paymentFormInfo = (data) =>{
    return{
        type: 'PAYMENT_DATA',
        data
    }
 }

 export const authinticate = (data) =>{
    return{
        type: 'AUTH',
        data
    }
 }