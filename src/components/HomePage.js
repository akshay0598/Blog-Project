import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setIsSignedIn, setUserData } from '../features/userSlice';
import '../styling/home.css';

const HomePage = () => {
    const login = (response) => {
        console.log(response);
         dispatch(setIsSignedIn(true));
        dispatch(setUserData(response.profileObj));

    }

    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();
    return (
    <div className="home__page" style = {{display :isSignedIn ? "none" : ""}} >
    {!isSignedIn && (<div className="login__message"> 
    <h2>Welcome</h2>
    <h1>A reader's favourite place!!</h1>
    <p> 
        We provide high quality online resource for reading blogs.Just sign 
        up and start reading some quality blogs.
    </p>
    <GoogleLogin
    clientId="69823375945-v7r5dr13sq3ufob6fe5ccecl73lg97v9.apps.googleusercontent.com" 
    render = {(renderProps) => (
        <button onClick = {renderProps.onClick}
        disabled = {renderProps.disabled}
        className ="login__button">
            Login with Google
        </button>
    )}
    onSuccess={login}
    onFailure={login}
    isSignedIn={true}
    cookiePolicy = {"single_host_origin"}
    />
    </div>)  }
    </div>
    );
}

export default HomePage;
