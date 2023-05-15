import React from "react";
import '../Styles/ItemSummary.css'


function ItemSummary({item}){
    return (
        <div id='item-container' key={item.brandId}>
        <div id="img-container">
            <img id='item-image' src={item.imageUrl} alt='d'/>
            <span>{item.brandName}</span>
        </div>
        <span>Qty: {item.purchaseQuantity}</span>
        <div id="item-description-container">
            <span>${item.price}</span>
        </div>
    </div>
    )
}

export default ItemSummary;