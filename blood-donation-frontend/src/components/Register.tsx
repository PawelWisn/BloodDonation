import React from "react";
import {useHistory} from "react-router-dom";
import './Common.scss';
import './Register.scss';
import Logo from "../images/logo_white.png";
import ManyRadiobuttons from "./ManyRadiobuttons";

function Register() {
    const history = useHistory();

    function handleOnClick(url: string) {
        history.push(url);
    }

    return (
        <div className='reg-container'>
            <div className='reg-logo'>
                <img alt="logo" src={Logo} onClick={() => handleOnClick('/')}/>
            </div>

            <div className='reg-content-container'>
                <form>
                    <div className='entry-item'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='text'/>
                    </div>
                    <div className='entry-item'>
                        <ManyRadiobuttons name={'sex'} labels={['Male', 'Female']} values={['1', '0']}
                                          ids={['sexm', 'sexf']}/>
                    </div>
                    <div className='entry-item'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password'/>
                    </div>
                    <div className='entry-item'>
                        <label htmlFor='confpassword'>Confirm Password</label>
                        <input id='confpassword' type='password'/>
                    </div>
                    <div className='submit-button'>
                        <input type='submit' value='Register' onClick={() => {
                            handleOnClick('/')
                        }}/>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;
