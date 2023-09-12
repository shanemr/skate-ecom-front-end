import React from "react";
import { useState } from "react";
import '../Styles/UserProfile.css'
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BsFillPersonFill,BsFillCartFill,BsMailbox2, BsFillBellFill} from "react-icons/bs"
import {MdLocalShipping} from "react-icons/md"
import {BiSolidPackage,BiLogOut} from "react-icons/bi"
import { logout } from "../Actions/Actions";

const UserProfile = () =>{
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const token = useSelector((state) => state.AuthReducer.user.token);
    const isLoggedIn = useSelector((state) => state.AuthReducer.user.isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[activeContent, setActiveContent] = useState('account');
    const[userProfileInfo, setUserProfileInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: [{}],
        phoneNum: '',
        orders: [{}]
    });


    var handleActiveContent = function(content){
        switch(content){
            case 'account':
                setActiveContent('account');
                break;
            case 'orders':
                setActiveContent('orders');
                break;
            case 'returns':
                    setActiveContent('returns');
                    break;
            case 'address':
                setActiveContent('address');
                break;
            case 'email':
                setActiveContent('email');
                break;
            case 'alerts':
                setActiveContent('alerts');
                break;
            default:
                break;
        }
    }

    const handleLogout = () =>{
        dispatch(logout());
        navigate('/');
    }

    useEffect(() =>{
        if(isLoggedIn){
        axios.request({
            headers: {
              Authorization: `Bearer ${token}`
            },
            method: "GET",
            url: serverUrl + '/profile'
          })
          .then( user => setUserProfileInfo({...userProfileInfo, 
            firstName: user.data.firstName,
            lastName: user.data.lastName,
            email: user.data.email,
            address: user.data.shipAddress,
            phoneNum: user.data.phoneNum,
            orders: user.data.orders

            }))
        .catch(error => console.log(error))
        } else{
            navigate('/login');
        }
        console.log(userProfileInfo);
    },[])



    return(
        
        <div id='main-container'  style={{textAlign:'center'}}>
            <h3>Welcome, {userProfileInfo.firstName}</h3>
            <div id='nav-content-container'>
            
            <div id = 'side-nav-list'>
                <ul id='nav-list'>
                    <li className='side-nav-list-item'  onClick={() => handleActiveContent('account')}><BsFillPersonFill size={28} className="side-nav-list-item-icon"/>Account Details</li>
                    <li className='side-nav-list-item' onClick={() => handleActiveContent('orders')}><BsFillCartFill size={28} className="side-nav-list-item-icon"/>Orders</li>
                    <li className='side-nav-list-item' onClick={() => handleActiveContent('returns')}><MdLocalShipping size={28} className="side-nav-list-item-icon"/>Returns</li>
                    <li className='side-nav-list-item' onClick={() => handleActiveContent('address')}><BiSolidPackage size={28} className="side-nav-list-item-icon"/>Delivery Address</li>
                    <li className='side-nav-list-item' onClick={() => handleActiveContent('email')}><BsMailbox2 size={28} className="side-nav-list-item-icon"/>Email Preferences</li>
                    <li className='side-nav-list-item' onClick={() => handleActiveContent('alerts')}><BsFillBellFill size={28} className="side-nav-list-item-icon"/>My Alerts</li>
                    <li className='side-nav-list-item' onClick={handleLogout}><BiLogOut size={28} className="side-nav-list-item-icon"/>Logout</li>
                </ul>

            
            </div>
            <div id='current-active-content'>
                {activeContent === 'account' ? 
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h4>Shane Ray</h4>
                    <ul id='account-details'>
                        <li>{userProfileInfo.email}</li>
                        <li>{userProfileInfo.firstName} {userProfileInfo.lastName}</li>
                        <li>{userProfileInfo.address[0].streetAddress}</li>
                        <li>{userProfileInfo.address[0].city}, {userProfileInfo.address[0].state} {userProfileInfo.address[0].zipCode}</li>
                    </ul>
                    {console.log(userProfileInfo)}
                </div>: 
                activeContent === 'orders' ? 
                <div>
                    <h4>No Orders</h4>
                </div>:
                activeContent === 'returns' ? 
                <div>
                    <h4>No Returns</h4>
                </div>:
                activeContent === 'address' ? 
                <div>
                    <h4>Address</h4>
                </div>:
                activeContent === 'email' ? 
                <div>
                    <h4>email</h4>
                </div>:
                activeContent === 'alerts' ? 
                <div>
                    <h4>No Alerts</h4>
                </div> :
                null}
            </div>
            </div>
            
        </div>
            
        
    )
}

export default UserProfile;