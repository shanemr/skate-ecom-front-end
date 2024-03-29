import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Sort from './Sort';
import ProductCard from './ProductCard';
import Product from './Product';
import PopUp from './PopUp';
import { useParams } from 'react-router-dom';
import '../Styles/Products.css'


function ProductPage({cartProducts,addProducts}){
    const [products, setProducts] = useState();
    const[prods, setProds] = useState();
    const[filterType, setFilterType] = useState();
    const[popup, setPopUp] = useState(false);
    const[productInfo, setProductInfo] = useState();
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    
    let params = useParams()


    useEffect(() =>{
        window.scrollTo(0, 0);
        axios.get(serverUrl + '/api/all/category',
            { params:{category: params.type } 
        })
             .then( result =>{
                setProds(result.data);
                setProducts(result.data);
             })
             .catch(error =>{
                console.log(error);
             })
    },[params.type])


    useEffect(() =>{
        setFilterType();
    },[params, products])


    useEffect(() =>{
        window.scrollTo(0, 0);
    },[popup])

    
    const handlePopUp = (isOpen) =>{
        setPopUp(isOpen);
        
    }

    const getProductInfo = (product = new Product()) =>{
        setProductInfo(product);
    }


    
    const convertToProduct = (p) =>{
        p.purchaseQuantity = 1;
        return p;
    }

    
    const setFilter = (category, value) =>{
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
            { popup ? 
                    <PopUp status={popup} handlePopUp={handlePopUp}  product={productInfo} ></PopUp>   
                    : null
                }
                
            <div className={popup ? 'popup-open' : 'products-container'}>
           
                <h1 className='product-type-header'>Skateboard {params.type}</h1>
                <p>Search Results: {prods ? prods.length : null}</p>
                <div className={params.type.toLowerCase() + '-products'}>
                    {prods ? 
                        prods.map( p =>{
                            let cartProds = convertToProduct(p)
                            return(
                                <ProductCard key={cartProds.description} 
                                        product={cartProds} 
                                        addProducts={addProducts}
                                        cartProducts={cartProducts}
                                        handlePopUp={handlePopUp}
                                        getProductInfo={getProductInfo}
                                        
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