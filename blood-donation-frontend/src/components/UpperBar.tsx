import React from 'react';
import './UpperBar.scss';
import Logo from '../images/logo_red.png';
import {useHistory} from "react-router-dom";

function UpperBar() {

    const history = useHistory();

    function buttonOnclick(url: string) {
        history.push(url);
    }

    return (
        <div className='upper-bar flex-container-upper-bar' >
            <img alt="logo" src={Logo} onClick={() => buttonOnclick('/')}/>
            <div className='flex-container-upper-bar'>
                <button onClick={() => buttonOnclick('/login')}>Login</button>
                <button onClick={() => buttonOnclick('/register')}>Register</button>
            </div>
        </div>
    );
}

export default UpperBar;
