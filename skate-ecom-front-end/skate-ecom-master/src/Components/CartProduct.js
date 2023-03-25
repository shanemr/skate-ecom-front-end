import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { addToCart, removeAllFromCart, removeFromCart} from "../Actions/Actions";

import '../Styles/CartProduct.css'

function CartProduct({product}){
    const dispatch = useDispatch()

    const handleIncrease = (event) =>{
        event.preventDefault()
        dispatch(addToCart(product))
        
    }

    const handleDecrease = (event) =>{
        event.preventDefault()
        dispatch(removeFromCart(product))
        
    }

    function removeAllProductFromCart(event){
        event.preventDefault();
        dispatch(removeAllFromCart(product))
    }


    return(
        <div className='cart-product-container' key={product.brandId}>
            <div className="button-img-container">
                <Button color='danger' onClick={handleDecrease}>-</Button>
                <img className='product-image' src={product.imageUrl} alt='d'/>
                <Button color='success' onClick={handleIncrease}>+</Button>
            </div>
            <span>Qty: {product.purchaseQuantity}</span>
            <div className="product-description-container">
                
                <p>{product.brandName + " - $"+product.price}</p>
            </div>
            <Button className='remove-product'color='none' onClick={removeAllProductFromCart}>X</Button>
        </div>
    )
}

export default CartProduct;