import React from "react";
import {useHistory} from "react-router-dom";
import './Common.scss';
import './Login.scss';
import Logo from "../images/logo_white.png";

function Login() {

    const history = useHistory();

    function handleOnClick(url: string) {
        history.push(url);
    }

    return (
        <div className='login-container'>
            <div className='sign-logo'>
                <img alt="logo" src={Logo} onClick={() => handleOnClick('/')}/>
            </div>

            <div className='login-content-container'>
                <form>
                    <div className='entry-item'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='text'/>
                    </div>
                    <div className='entry-item'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password'/>
                    </div>
                    <div className='submit-button'>
                        <input type='submit' value='Login' onClick={() => {
                            handleOnClick('/')
                        }}/>
                    </div>

                </form>
            </div>
            <div className='login-content-container'>
                <p>New to BloodDonation? <span onClick={() => {
                    handleOnClick('/register')
                }}>Create an account</span></p>
            </div>
        </div>
    );
}

export default Login;
