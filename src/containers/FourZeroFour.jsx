import React from 'react';
import '../styles/containers/FourZeroFour.scss'
import ilustrarion from '../assets/static/ilustration-fzf.svg'

const FourZeroFour = () => {
    return(
        <main className="FZFmain">
            <div className="FZFmain__titleContainer">
                <h1 className="FZFmain__titleContainer--tile">
                    Oops!
                </h1>
            </div>
            <div className="FZFmain__Container">
                <figure className="FZFmain__Container--img">
                    <img src={ilustrarion} alt=""/>
                </figure>
                <h2 className="FZFmain__Container__FZF">404</h2>
                <h3 className="FZFmain__Container__CB">Come Back!</h3>
                <p className="FZFmain__Container__txt">Something went wrong homie <br/> ¡Sorry!</p>
            </div>
        </main>
    )
};
export default FourZeroFour;