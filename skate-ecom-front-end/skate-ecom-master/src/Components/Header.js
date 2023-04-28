import React from 'react'
import { Outlet , Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';
import DropDown from './DropDown';
import '../Styles/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductBrandNames } from '../Actions/Actions';

function Header(){
    const[search, setSearch]= useState('')
    const dispatch = useDispatch()
   
    
    let products = useSelector(state => state.ProductReducer.brands);
    
    useEffect(() =>{
        dispatch(getAllProductBrandNames())
        
    },[])

    let skateCategories = ['SkateBoard Completes','SkateBoard Decks', 'Trucks', 'Wheels', 'Bearings', 'Hardware']

    let clothingCategories = ['Shirts', 'Hoodies', 'Pants', 'Shorts']

    let shoesCategories = ['Sneakers', 'Boots', "Sandals", "Slip-Ons"]

    let accesories = ['Hats', 'Beanies', 'Socks']
   
    return(
        <div>
            <p className='header-tag'>~ Free shipping on orders over $100.00! ~</p>
            <div className='header-bar'>
                {products ?
                    <ul className='header-bar-list-left'>
                        <Link to='/' style={{textDecoration:'none'}}>
                            <h1 className='logo'><span style={{borderBottom:'2px solid gold', paddingBottom:'2%'}}>Skate-Ecom</span> :|:</h1>
                            {/* <h1 className='logo'>Skate-Ecom <span style={{color:'gold'}}>:</span>|<span style={{color:'gold'}}>:</span></h1> */}
                        </Link>                    
                        <li className='header-bar-item'>
                            <DropDown type={'Skate'} items={skateCategories}/>
                        </li>
                        <li className='header-bar-item'>
                            <DropDown type={'Clothing'} items={clothingCategories}/>
                        </li>
                        <li className='header-bar-item'>
                            <DropDown type={'Shoes'} items={shoesCategories}/>
                        </li>
                        <li className='header-bar-item'>
                            <DropDown type={'Accesories'} items={accesories}/>
                        </li>
                        <li className='header-bar-item search-box'>
                            <Input type='search'  placeholder='search...'>

                            </Input>
                        </li>
                    </ul>
                : null}
                <ul className='header-bar-list-right'>
                    <li className='header-bar-item'>
                        <Link to='/cart' className='login-cart'>Cart</Link>
                    </li>
                    <li className='header-bar-item'>
                        <Link  className='login-cart'>Login</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet/>
            </div>
            <div className='footer'>
                <ul className='footer-list'>
                    <li className='footer-list-header'>Get Help</li>
                    <li className='footer-item'>Customer Service</li>
                    <li className='footer-item'>Order Status</li>
                    <li className='footer-item'>Subscrition</li>
                </ul>
                <ul className='footer-list'>
                    <li className='footer-list-header'>About Us</li>
                    <li className='footer-item'>Contact Us</li>
                    <li className='footer-item'>Our Story</li>
                    <li className='footer-item'>News Letter</li>
                </ul>
                <div className='subscribe-container'>
                    <div className='subscribe-text'>
                        <p>Subscribe to our news letter</p>
                    </div>
                    <div className='subscribe'>
                        <Input type='email' placeholder='Enter email...'></Input>
                        <Button color='warning'>Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;