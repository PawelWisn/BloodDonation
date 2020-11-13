import React from "react";
import {Redirect, useHistory} from "react-router-dom";
import './Common.scss';
import './Register.scss';
import Logo from "../images/logo_white.png";
import ManyRadiobuttons from "./ManyRadiobuttons";
import {useMutation} from "urql";

const UserRegisterMutation = `
  mutation CreateUser($email:String!,$password:String!, $isMale:Boolean) {
    createUser(email:$email, password:$password, isMale:$isMale) {
        user{
            email
            dateJoined
        }
    }
  }
`;


function Register() {
    const [registerUserResult, registerUserCall] = useMutation(UserRegisterMutation);
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
                    <div className='entry-item'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='text'/>
                    </div>
                    <div className='entry-item' id='male-female-div'>
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
                        <input type='submit' value='Register' onClick={(e) => {
                            e.preventDefault();
                            registerUserCall(collectDataForRequest()).then(r => {
                                if(r.error || !r['data']['createUser']){
                                    alert("This email has been taken. Please pick a different one")
                                }
                                else{
                                    history.push('/login');
                                }
                            })
                        }}/>
                    </div>

            </div>
        </div>
    );

    function collectDataForRequest() {
        let emailObj: any = document.getElementById('email');
        let email: string = emailObj ? emailObj['value'] : '';
        let passwordObj: any = document.getElementById('password');
        let password: string = passwordObj ? passwordObj['value'] : '';
        let confPasswordObj: any = document.getElementById('confpassword');
        let confPassword: string = confPasswordObj ? confPasswordObj['value'] : '';

        let sex: string = '';
        let sexObj = document.getElementById('male-female-div');
        if (sexObj) {
            let pickedObj = sexObj.getElementsByClassName('color-primary');
            if (pickedObj.length===1) {
                let donated = pickedObj[0].getElementsByTagName('input');
                if (donated) {
                    sex = donated[0].value;
                }
            }
        }

        let output = {
            "email": email,
            "password": password,
            "isMale": sex === '1'
        };

        let validationResult = validateRequestData({
            "email": email,
            "password": password,
            "confPassword": confPassword,
            "sex": sex
        });

        if (validationResult['ok']) {
            return output;
        }
        alert(validationResult['error']);
    }

    function validateRequestData(collection: any) {
        if (!collection['email'].match(/.+?@.+?\..+/)) {
            return {'ok': false, 'error': "Please provide a valid email address"}
        }
        if (collection['sex'] === '') {
            return {'ok': false, 'error': "Please select whether you are male or female"}
        }
        if (collection['password'].length === 0) {
            return {'ok': false, 'error': "Please type in a password"}
        }
        if (collection['confPassword'].length === 0) {
            return {'ok': false, 'error': "Please confirm your password"}
        }
        if (collection['confPassword'] !== collection['password']) {
            return {'ok': false, 'error': "Passwords are not identical"}
        }
        return {'ok': true}
    }
}

export default Register;
