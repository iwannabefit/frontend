import React from "react";
import '../styles/componentes/footer.scss'
import logo from '../assets/static/logo.png'


const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer__container">
            <figure className="footer__container--logo">
                <img src={logo} alt="logo"/>
            </figure>
            <div className="footer__container--PM">
                <p>Platzi Master</p>
                <p>2021</p>
            </div>
            <div className="footer__container--Team">
                <p>With love by</p>
                <p>Israel's team</p>
            </div>

        </div>
    </footer>
    )
}
export default Footer;
