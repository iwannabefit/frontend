import React from 'react';
import '../styles/containers/Login.scss'
import googleIcon from '../assets/static/googleIcon.png'
import twitterIcon from '../assets/static/twitterIcon.png'


const Login = () => {
    return(
        <main className="main-login">
            <div className="login">
                
                <p className="login__container">
                    Login
                </p>
                <form className="login__container__from">
                    <input
                        type="text"
                        className="login__container__form--input"
                        name="email"
                        placeholder="Your email"
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        className="login__container__form--input"
                        name="password"
                        placeholder="Your password"
                    />
                    <button type="submit" className="login__container__form--btn">
                        Login
                    </button>
                    <div className="login__container__RF">
                        <div className="login__container__RF--remember-me">
                            <input type="checkbox" name="" id=""/>
                            <label>Remember me</label>
                        </div>
                        <div className="login__container__RF--ForgotPass">
                            <a href="#">Forgot Password</a>
                        </div>
                    </div>
                    <div className="login__container_login-SM">

                        <a href="#" className="login__container_login-SM__Twiiter">
                            <figure className="login__container_login-SM__Twiiter--icon">
                                <img src={twitterIcon} alt="Twiiter"/>
                            </figure>
                            <p> Login with twitter. </p>
                        </a>
                        
                        <a href="#"  className="login__container_login-SM__google">
                            <figure className="login__container_login-SM__google--icon">
                                <img src={googleIcon} alt="Google-Icon"/>
                            </figure>
                            <p> Login with google </p>
                        </a>
                    </div>
                </form>
                <div className="login__container__register">
                    <p className="login__container__register-p">
                        You dont have any account. 
                    </p>
                    <a href="#">Register</a>
                </div>
            </div>

        </main>
    )
}

export default Login