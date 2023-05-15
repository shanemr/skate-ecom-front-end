
import axios from "axios"


export function getAllProducts(type){
    return dispatch =>{
        axios.get('http://localhost:8765/all' + type)
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
        axios.get('http://localhost:8765/allBrands')
             .then( result =>{
                dispatch(getProductBrandNames(result.data))
             })
             .catch(error =>{
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
 export const shippingFromInfo = (data) =>{
    return{
        type: 'SHIPPING_FORM_DATA',
        data
    }
 }

 export const billingFromInfo = (data) =>{
    return{
        type: 'BILLING_FORM_DATA',
        data
    }
 }

 export const paymentFromInfo = (data) =>{
    return{
        type: 'PAYMENT_DATA',
        data
    }
 }