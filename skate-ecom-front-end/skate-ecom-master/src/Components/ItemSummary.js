import React from "react";
import '../Styles/ItemSummary.css'


function ItemSummary({item}){
    return (
        <div className='cart-product-container' key={item.brandId}>
        <div className="button-img-container">
            <img className='product-image' src={item.imageUrl} alt='d'/>
            <span>{item.brandName}</span>
        </div>
        <span>Qty: {item.purchaseQuantity}</span>
        <div className="product-description-container">
            <span>${item.price}</span>
        </div>
    </div>
    )
}

export default ItemSummary;