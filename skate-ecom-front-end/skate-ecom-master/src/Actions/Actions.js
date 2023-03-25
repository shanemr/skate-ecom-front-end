
import axios from "axios"


export function getAllProducts(type){
    return dispatch =>{
        axios.get('http://localhost:8765/all' + type)
             .then( result =>{
                //console.log(result.data)
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
                console.log(result.data)
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

export const addToCart = (product) =>{
    return{
        type: 'ADD_TO_CART',
        product       
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