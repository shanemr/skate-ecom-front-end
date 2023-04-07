import React from 'react'
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../Styles/ProductCard.css'
import {addToCart} from '../Actions/Actions'
import { useDispatch } from 'react-redux';

function ProductCard({product}){
    let params = useParams()
    const dispatch = useDispatch();

    const handleAddToCart =(event) =>{
        event.preventDefault()
        dispatch(addToCart(product, product.purchaseQuantity))
    }

    console.log(product)
    return(
        <div key={product.id} className='product-card-container'>
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
            <Button 
                color='warning' 
                size='md' 
                style={{width:'100%', color:'white',marginTop:'5%'}}
                onClick={handleAddToCart}
             >Add to cart
             </Button>
        </div>
    )
}

export default ProductCard;