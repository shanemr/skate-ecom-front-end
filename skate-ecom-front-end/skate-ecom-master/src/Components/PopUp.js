import React from "react";
import "../Styles/PopUp.css"
import { useNavigate } from "react-router-dom";


import { Button } from "reactstrap";

function PopUp({status,product,handlePopUp}){

    const nav = useNavigate();

    const handleViewCart = () =>{
        nav("/Cart")
    }

    return(
        <div className="popup-container">
            {status ? 
            <div className="popup-body">
                <h3>Success!</h3>
                <div></div>
                <img src={product.imageUrl} alt={product.brandName} className="product-image-popup"/>
                <span>{product.brandName} - {product.size ? product.size + "\"" 
                                            : product.truckType ?  product.truckType 
                                            : product.bearingsType ? product.bearingsType
                                            : null}</span>
                
                <span style={{fontWeight:'bold'}}>${product.price.toFixed(2)}</span> 
                <p>The item has been added to your cart!</p>
                <div className="buttons">
                    <Button onClick={handleViewCart} color='warning' style={{color:'white', fontWeight:'bold'}}>View Cart</Button>
                    <Button onClick={() => handlePopUp(false)} color='warning' style={{color:'white', fontWeight:'bold'}}>Close</Button>
                </div>
            </div>
            : null}
        </div>
    )
}

export default PopUp;
