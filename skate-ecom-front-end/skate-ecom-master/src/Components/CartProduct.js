import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { addToCart, removeAllFromCart, removeFromCart} from "../Actions/Actions";

import '../Styles/CartProduct.css'

function CartProduct({product}){
    const dispatch = useDispatch();
    const[quantity, setQuantity] = useState(product.purchaseQuantity);

    
   const handleIncrease = (event) =>{
        event.preventDefault()
        dispatch(addToCart(product, 1))
        
    }

    const handleDecrease = (event) =>{
        event.preventDefault()
        dispatch(removeFromCart(product))
        
    }

    function removeAllProductFromCart(event){
        event.preventDefault();
        dispatch(removeAllFromCart(product))
    }

    const handleProductAmountChange = (e) =>{
        e.preventDefault();
        if(e.target.value > product.purchaseQuantity){
            handleIncrease(e);
            setQuantity(product.purchaseQuantity + 1);
        } else{
            handleDecrease(e);
            setQuantity(product.purchaseQuantity - 1);
        }
    }

    
    return(
        <tr className='cart-product-container' >
            <td className='product-container'>
                
                    <img className='product-image' src={product.imageUrl} alt='product'/>
                    { product.truckType ? <span >{product.brandName + ' - '  + product.truckType}</span>: null}
                    { product.bearingsType ? <span>{product.brandName + ' - '  + product.bearingsType}</span>: null}
                    { product.description === "Wheels" ? <span>{product.brandName + ' - ' + product.size + '"'}</span>: null}
                    { product.color ? <span>{product.brandName + ' - '  + product.size + '"'}</span>: null}
                
            </td>
            <td>
                <p className='product-price'>{"$"+product.price}</p>
            </td>
            <td>
                <Input type='number' className='quantity-dropdown' value={product.purchaseQuantity} onChange={handleProductAmountChange}/>
            </td>
            <td>
                <p className='product-price'>{'$' + product.price * product.purchaseQuantity}</p>
            </td>
            <td>
                <Button className='remove-product'color='danger' onClick={removeAllProductFromCart}>Remove</Button>
            </td>
            
        </tr>
    )
}

export default CartProduct;