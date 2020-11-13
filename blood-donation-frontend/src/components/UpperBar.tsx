import React, {useState} from 'react';
import './UpperBar.scss';
import Logo from '../images/logo_red.png';
import {useHistory} from "react-router-dom";
import {getToken, deleteToken} from "./utils";

type propsType={
    redirectHomeOnLogout? : boolean
}

function UpperBar(props: propsType) {
    const [isAuth, setIsAuth] = useState(getToken() != null);
    const history = useHistory();
    const {redirectHomeOnLogout = false} = props;
    return (
        <div className='upper-bar flex-container-upper-bar'>
            <img alt="logo" src={Logo} onClick={() => history.push('/')}/>
            <LoginRegLogoutButtons/>
        </div>
    );


    function LoginRegLogoutButtons() {
        if (isAuth) {
            return <LoggedIn/>
        }
        return <NotLoggedIn/>
    }

    function NotLoggedIn() {
        const history = useHistory();
        return (
            <div className='flex-container-upper-bar'>
                <button onClick={() => history.push('/login')}>Login</button>
                <button onClick={() => history.push('/register')}>Register</button>
            </div>
        );
    }


    function LoggedIn() {
        const history = useHistory();
        return (
            <div className='flex-container-upper-bar'>
                <button onClick={() => {
                    deleteToken();
                    setIsAuth(false)
                    if (redirectHomeOnLogout) {
                        history.push('/');
                    }
                }}>Logout
                </button>
            </div>
        );
    }
}


export default UpperBar;
