import React from 'react';
import './UpperBar.scss';
import Logo from '../images/logo_red.png';

function UpperBar() {
    return (
        <div className='upper-bar flex-container-upper-bar'>
            <img alt="logo" src={Logo}/>
            <div className='flex-container-upper-bar'>
            <button>Login</button>
            <button>Register</button>
            </div>
        </div>
    );
}

export default UpperBar;
