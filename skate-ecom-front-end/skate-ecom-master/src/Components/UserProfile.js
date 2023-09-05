import React from "react";

import '../Styles/UserProfile.css'
import { useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () =>{
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const token = useSelector((state) => state.AuthReducer.user.token);
    const isLoggedIn = useSelector((state) => state.AuthReducer.user.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() =>{
        if(isLoggedIn){
            axios.get(serverUrl + '/profile', {Authorization: `Bearer ${token}`})
            .then( r => console.log(r))
            .catch(e => console.log(e))
        } else{
            navigate('/login');
        }
        
    })



    return(
        
        <div id='main-container'>
            <div id = 'side-nav-list'>NAV</div>
            <div id='current-active-content'>BODY</div>
        </div>
            
        
    )
}

export default UserProfile;