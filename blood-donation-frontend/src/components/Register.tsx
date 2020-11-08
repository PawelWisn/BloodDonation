import React from "react";
import {useHistory} from "react-router-dom";
import './Common.scss';
import './Login.scss';
import './Register.scss';
import Logo from "../images/logo_white.png";

function Register() {

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
                        <input type='text'/>
                    </div>
                    <div className='entry-item sex-radio'>
                        <span><input type='radio' id='female' name='female' value='Female'/>Female</span>

                        <span><input type='radio' id='male' name='male' value='Male' checked/>Male</span>
                    </div>
                    <div className='entry-item'>
                        <label htmlFor='password'>Password</label>
                        <input type='password'/>
                    </div>
                    <div className='submit-button'>
                        <input type='submit' value='Login' onClick={() => {
                            handleOnClick('/')
                        }}/>
                    </div>

                </form>
            </div>
            <div className='login-content-container'>
                <p>New to BloodDonation? <span onClick={()=>{handleOnClick('/register')}}>Create an account</span></p>
            </div>
        </div>
    );
}

export default Register;
