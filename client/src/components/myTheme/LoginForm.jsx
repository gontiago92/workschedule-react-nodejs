import React, {useRef, useState, useContext} from 'react'
import { Redirect } from 'react-router';
import AuthContext from '../contexts/AuthContext'

function UserForm() {
    const form = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const {user, updateUser, isLoggedIn, setIsLoggedIn, setError } = useContext(AuthContext);

    const sessionStorage = window.sessionStorage;

    if(isLoggedIn)
        return <Redirect to="/" />

    /**
     * Custom Authentication Error 
     * @param {String} message 
     * @param {String} code 
     * @returns ErrorObject
     */
    let AuthException = (message, code) => {
        const error = new Error(message);
        error.code = code
        return error
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('')
    };

    const subscribeUser = user => {
        //setAlert(user.success)
        updateUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        clearErrors();

        let formData = new FormData(form.current);

        try {
            const response = await fetch('http://127.0.0.1:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    username: formData.get('email'),
                    password: formData.get('password')
                }),
            })
    
            const responseStatus = await response.ok

            const data = await response.json()
    
            console.log(responseStatus)
            if(data.error) {
                throw AuthException(data.error, data.code)
            } else {
                if (responseStatus) {
                    console.log('logged in')
                    setIsLoggedIn(true)
                }
            }
    
        } catch(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            switch(errorCode) {
                case "auth/empty-fields":
                    setEmailError(errorMessage);
                    setPasswordError(errorMessage);
                    break;
                case "auth/user-not-found":
                    setEmailError(errorMessage);
                    console.log(errorMessage);
                    break;
                case "auth/wrong-password":
                    setPasswordError(errorMessage);
                    console.log(errorMessage);
                    break;
            }
        }

        
    };

    return (
        <form id="login-form" className="authentication-form" ref={form} onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                {emailError && <p className="errorMessage">{emailError}</p> }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                {passwordError && <p className="errorMessage">{passwordError}</p> }
            </div>
            <div className="form-group">
                <div>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
            </div>
            <div className="form-group">
                <button>Sign in</button>
            </div>
        </form>
    )
}

export default UserForm