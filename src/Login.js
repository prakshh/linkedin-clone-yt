import React from 'react'
import './Login.css'

function Login() {
    const loginToApp = () => {

    };
    const register = () => {

    };
    return (
        <div className='login'>
            <img src="./assets/images/linkedin-form-logo.jpg" alt="" />
            <form>
                <input placeholder="full name (required if registering)" type="text" />
                <input placeholder="Profile pic URL (optional)" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type='submit' onClick={loginToApp}>Sign in</button>
            </form>
                <p>Not a member? 
                    <span className='login__register' onClick={register}> Register Now</span>
                </p>
            {/* </form> */}
        </div>
    )
}

export default Login
