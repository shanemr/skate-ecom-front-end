import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sort from './Sort';
import ProductCard from './ProductCard';
import Product from './Product';
import { useParams } from 'react-router-dom';
import '../Styles/Products.css'

function ProductPage({cartProducts,addProducts}){
    const [products, setProducts] = useState();
    const[prods, setProds] = useState();
    const[filterType, setFilterType] = useState();
    let params = useParams()


    useEffect(() =>{
        window.scrollTo(0, 0);
        axios.get('http://localhost:8765/all' + params.type)
             .then( result =>{
                setProds(result.data);
                setProducts(result.data);
             })
             .catch(error =>{
                console.log(error);
             })
    },[params.type])


    const convertToProduct = (p) =>{
        let prods = Product();
        prods.brandId = p.brandId;
        prods.brandName = p.brandName;
        prods.imageUrl = p.imageUrl;
        prods.size = p.size;
        prods.price = p.price;
        prods.color = p.color;
        prods.quantity = p.quantity;
        prods.truckType = p.truckType;
        prods.purchaseQuantity = 1;
        return prods;
    }

    
    const setFilter = (category, value) => (event)=>{
        event.preventDefault();
        if(category === 'brand'){
            setFilterType('Brand - ' + value.p)
            setProds(products.filter(p => p.brandName === value.p));
        } else if(category === 'size'){
            setFilterType('Size - ' + value.p)
            setProds(products.filter(p => p.size === value.p));
        } else if(category === 'color'){
            setFilterType('Color - ' + value.p)
            setProds(products.filter(p => p.color === value.p));
        } else{
            setFilterType()
            setProds(products);
        }
    }
    
    return(
        <div className='products-page-container'>
            <div className='sort-container'>
                <Sort products={products} 
                      type={params.type} 
                      setFilter={setFilter} 
                      filterType={filterType}/>
            </div>
            <div className='products-container'>
                <h1 className='product-type-header'>Skateboard {params.type}</h1>
                <p>Search Results: {prods ? prods.length : null}</p>
                <div className={params.type.toLowerCase() + '-products'}>
                    {prods ? 
                        prods.map( p =>{
                            let cartProds = convertToProduct(p)
                            return(
                                <ProductCard key={cartProds.brandId} 
                                        product={cartProds} 
                                        addProducts={addProducts}
                                        cartProducts={cartProducts}
                                    />
                            )
                        })
                    : null}
                </div>
            </div>
        </div>
    )
}

export default ProductPage;