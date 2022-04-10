import React, { useRef } from 'react'
import { Redirect } from 'react-router-dom'
import logo from '../../public/assets/images/logo512.png'
import Button from '../components/myTheme/Button'
import CheckBox from '../components/myTheme/CheckBox'
import Input from '../components/myTheme/Input'

function Login({user}) {

    const form = useRef(null)

    if(user)
        return <Redirect to="/profile" />

    const onSubmit = e => {e.preventDefault()}

    return (
        <section id="login" className="d-flex flex-col justify-center align-center">
            <img style={{width: '100px'}} src={logo} alt="Logo" className="logo" />
            <h1>SIGN IN</h1>
            <form id="login-form" className="authentication-form" ref={form} onSubmit={onSubmit}>

                <Input label="Email" name="email" placeholder="Enter text here" />

                <Input label="Password" type="password" name="password" placeholder="Enter text here" />

                <div className="form-group">
                    <CheckBox label="Remember me" name="remember" />
                </div>

                <Button onClick={(e) => onSubmit(e)}><i className="fa fa-user"></i>Sign In</Button>

            </form>
        </section>
    )
}

export default Login
