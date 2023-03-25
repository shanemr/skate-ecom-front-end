import React from "react";
import { useState } from "react";
import '../Styles/Home.css'
import ShopCard from "./ShopCard";


function Home(){
    const[cardDetails, setCardDetails] = useState([
        {
            title: 'Decks',
            description: `Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.`,
            image: 'images/decks/decks.jpg'
        },
        {
            title: 'Trucks',
            description: `Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Non arcu risus quis varius.`,
             image: 'images/trucks/trucks.jpg'
        },
        {
            title: 'Wheels',
            description: `Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Non arcu risus quis varius.`,
            image: 'images/wheels/wheelsTwo.jpg'
        },
        {
            title: 'Bearings',
            description: `Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.`,
            image: 'images/bearings/bearingsTwo.jpg'
        }
    ])
    return(
        <div className="home-container">
            {/* <div className='intro-header'>
                <h1>Home</h1>
            </div> */}
            <div className="image-container">
                <h1 className="slogan">Ride with us</h1>
                <h1 className="slogan" style={{margin:'none', width:'20%',textAlign:'center', marginRight:'50px'}}> & </h1>
                <h1 className="slogan">skate in style</h1>
            </div>
            <h3 className='card-header'>Shop Around</h3>
            
            <div className="cards-container"> 
                {cardDetails ? 
                    cardDetails.map(card =>{
                        return(
                            <ShopCard key={card.title} detail={card}/>
                        )
                    })
                : null}
               
            </div>
        </div>
    )
}

export default Home;