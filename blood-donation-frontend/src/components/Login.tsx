import React from "react";
import {useHistory} from "react-router-dom";
import './Common.scss';
import './Login.scss';
import Logo from "../images/logo_white.png";
import {useMutation} from "urql";
import {storeToken} from "./utils";

const UserLoginMutation = `
  mutation Login($email:String!,$password:String!) {
    tokenAuth(email:$email, password:$password) {
        token
    }
  }
`;

function Login() {
    const [loginUserResult, LoginUserCall] = useMutation(UserLoginMutation);
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
                        <input type='submit' value='Login' onClick={(e) => {
                            e.preventDefault();
                            LoginUserCall(collectDataForRequest()).then(r => {
                                if(r.error || !r['data']['tokenAuth']){
                                    alert("Incorrect username or password")
                                }
                                else{
                                    alert(r['data']['tokenAuth']['token'])
                                    storeToken(r['data']['tokenAuth']['token']);
                                    history.push('/');
                                }
                            })
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

    function collectDataForRequest() {
        let loginObj: any = document.getElementById('email');
        let email: string = loginObj ? loginObj['value'] : '';
        let passwordObj: any = document.getElementById('password');
        let password: string = passwordObj ? passwordObj['value'] : '';

        let output = {
            "email": email,
            "password": password,
        };

        let validationResult = validateRequestData(output);
        if (validationResult['ok']) {
            console.log('ok')
            return output;
        }
        alert(validationResult['error']);
    }

    function validateRequestData(collection: any) {
        if (!collection['email'].match(/.+?@.+?\..+/)) {
            return {'ok': false, 'error': "Please provide a valid email address"}
        }
        if (collection['password'].length === 0) {
            return {'ok': false, 'error': "Please type in your password"}
        }
        return {'ok': true}
    }
}

export default Login;
