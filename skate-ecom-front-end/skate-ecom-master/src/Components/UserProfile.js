import React from "react";

import '../Styles/UserProfile.css'
import { useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UserProfile = () =>{
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const token = useSelector((state) => state.AuthReducer.token);
    const isLoggedIn = useSelector((state) => state.AuthReducer.token);

    useEffect(() =>{
        axios.get(serverUrl + '/profile', token)
            .then( r => console.log(r))
            .catch(e => console.log(e))
    })



    return(
        
        <div id='main-container'>
            <div id = 'side-nav-list'>NAV</div>
            <div id='current-active-content'>BODY</div>
        </div>
            
        
    )
}

export default UserProfile;