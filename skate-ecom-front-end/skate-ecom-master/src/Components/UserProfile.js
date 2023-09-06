import React from "react";
import { useState } from "react";
import '../Styles/UserProfile.css'
import { useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BsFillPersonFill,BsFillCartFill,BsMailbox2, BsFillBellFill} from "react-icons/bs"
import {MdLocalShipping} from "react-icons/md"
import {BiSolidPackage,BiLogOut} from "react-icons/bi"

const UserProfile = () =>{
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const token = useSelector((state) => state.AuthReducer.user.token);
    const isLoggedIn = useSelector((state) => state.AuthReducer.user.isLoggedIn);
    const navigate = useNavigate();
    const[userProfileInfo, setUserProfileInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNum: ''
    });

    useEffect(() =>{
        if(isLoggedIn){
            axios.get(serverUrl + '/profile', {Authorization: `Bearer ${token}`})
            .then( r => console.log(r))
            .catch(e => console.log(e))
        } else{
            navigate('/profile');
        }
        
    })



    return(
        
        <div id='main-container'>
            <h3>Welcome</h3>
            <div id='nav-content-container'>
            <div id = 'side-nav-list'>
                <ul id='nav-list'>
                    <li className='side-nav-list-item'><BsFillPersonFill size={28} className="side-nav-list-item-icon"/>Account Details</li>
                    <li className='side-nav-list-item'><BsFillCartFill size={28} className="side-nav-list-item-icon"/>Orders</li>
                    <li className='side-nav-list-item'><MdLocalShipping size={28} className="side-nav-list-item-icon"/>Returns</li>
                    <li className='side-nav-list-item'><BiSolidPackage size={28} className="side-nav-list-item-icon"/>Delivery Address</li>
                    <li className='side-nav-list-item'><BsMailbox2 size={28} className="side-nav-list-item-icon"/>Email Preferences</li>
                    <li className='side-nav-list-item'><BsFillBellFill size={28} className="side-nav-list-item-icon"/>My Alerts</li>
                    <li className='side-nav-list-item'><BiLogOut size={28} className="side-nav-list-item-icon"/>Logout</li>
                </ul>

            
            </div>
            <div id='current-active-content'>BODY</div>
            </div>
            
        </div>
            
        
    )
}

export default UserProfile;