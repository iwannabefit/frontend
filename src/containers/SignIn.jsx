import React from 'react';
import '../styles/containers/SignIn.scss'
import googleIcon from '../assets/static/googleIcon.png'
import twitterIcon from '../assets/static/twitterIcon.png'

const SignIn = () => {
    return(
        <main className="main-signIn">
            <div className="signIn">
                <p className="signIn--title">
                    Sign In
                </p>
                <form className="signIn__formContainer">
                <input
                        type="text"
                        className="signIn__formContainer--inputs"
                        name="email"
                        placeholder="Your email"
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        className="signIn__formContainer--inputs"
                        name="password"
                        placeholder="Your password"
                    />
                     <button type="submit" className="signIn__formContainer--btn">
                        Sign In
                    </button>
                    <div className="signIn__formContainer__SM">
                        <a href="#" className="signIn__formContainer__SM__twitter">
                            <figure className="signIn__formContainer__SM__twitter--icon">
                                <img src={twitterIcon} alt=""/>
                            </figure>
                            <p>Sign in with twitter </p>
                        </a>
                        <a href="#" className="signIn__formContainer__SM__google">
                            <figure className="signIn__formContainer__SM__google--icon">
                                <img src={googleIcon} alt=""/>
                            </figure>
                            <p>Sign in with Google </p>
                        </a>

                    </div>
                </form>
                <div className="signIn__Login">
                    <p className="signIn__Login--p">
                        I have an account
                    </p>
                    <a href="#" className="signIn__Login--a">
                        Sign In
                    </a>
                </div>
            </div>
        </main>

    )
}

export default SignIn