import React from "react"
import '../styles/componentes/header.scss'
import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/userIcon.png';


const Header = () => {
    return(
      <header className="headers">
        <div className="header-container">
            <figure className="header_logo">
                <img src={logo} alt="logo"/>
            </figure>
            
            <figure className="header_userIcon">
                <img src={userIcon} alt="usericon"/>
            </figure>
        </div>
      </header>
    )
}

export default Header