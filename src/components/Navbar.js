import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, selectUserData, setBlogData, setIsSignedIn, setUserData } from '../features/userSlice';
import { GoogleLogout } from 'react-google-login';
import { Avatar } from '@material-ui/core';
import '../styling/navbar.css';
const Navbar = () => {
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);
    const [inputValue,setInputValue] = useState("tech");
    const dispatch = useDispatch();
    const logout = (response) => {
        dispatch(setIsSignedIn(false));
   dispatch(setUserData(null));
    }
    const handleClick = (e) => {
   e.preventDefault();
   dispatch(setBlogData(inputValue));
    }
    return (
        <div className="navbar">
            <h1 className="navbar__header">
            BlogMania
            </h1>
            {isSignedIn  && (<div className ="blog__search"><input type="text" 
            placeholder="Search for a blog" 
            className="search"
            value={inputValue} 
            onChange ={(e) =>setInputValue(e.target.value) }
            />
            <button type ="submit" onClick={handleClick} className="submit">
                Search
            </button>
            </div>
        )}
        {isSignedIn ? (<div className="navbar__user__data">
          <Avatar src={userData?.imageUrl} alt={userData?.name}/>
          <h1 classname="signedIn">{userData?.givenName}</h1>
          <GoogleLogout clientId="69823375945-v7r5dr13sq3ufob6fe5ccecl73lg97v9.apps.googleusercontent.com" 
           render = {(renderProps) => (
            <button onClick = {renderProps.onClick}
            disabled = {renderProps.disabled}
            className ="logout__button">
                Logout
            </button>
        )}
       onLogoutSuccess={logout}
        />
          
          
        </div> 
    ):""}
        </div>
    );
};

export default Navbar;