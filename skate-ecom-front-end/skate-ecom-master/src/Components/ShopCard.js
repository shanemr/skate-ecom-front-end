import React from "react";
import { Link } from "react-router-dom";
import '../Styles/ShopCard.css'


function ShopCard({detail}){
   
    return(
        <div className='shop-card-container'>
            <div className='card-title'>
                <h3>{detail.title}</h3>
            </div>
            <div className="card-image-description">
            <img src={detail.image} alt={detail.title}/>
                <p>{detail.description}</p>
                
            </div>
            <div>
                <Link to={'products/' + detail.title} style={{color:'black'}}>Shop now</Link>
            </div>
        </div>
    )
}

export default ShopCard;