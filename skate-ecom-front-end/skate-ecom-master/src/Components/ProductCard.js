import React from 'react'
import { useParams } from 'react-router-dom';
import '../Styles/ProductCard.css'

function ProductCard({product, handlePopUp, getProductInfo}){
    let params = useParams()

    const handleView =(event) =>{
        event.preventDefault();
       
        handlePopUp(true);
        getProductInfo(product);
    }

   

   
    return(
        <div key={product.id} className='product-card-container product' onClick={handleView}>
            <div className='product-image-container'>
                <img src={product.imageUrl} alt={product.brandName}  className={params.type.toLocaleLowerCase() + '-product-image'}/>
            </div>
            <div>
                <span>{product.brandName} - {product.size ? product.size + "\"" 
                                            : product.truckType ?  product.truckType 
                                            : product.bearingsType ? product.bearingsType
                                            : null}</span>
                <br/>
                <span style={{fontWeight:'bold'}}>${product.price.toFixed(2)}</span> 
            </div>
        </div>
        
    )
}

export default ProductCard;