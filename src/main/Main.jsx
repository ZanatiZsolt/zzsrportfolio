import React from "react";
import './Main.css'
import pfp from './pfp.jpg'

function Main(){
    return(
        <div className="Main" id="Main">
            <h1>Welcome!</h1>  
            <img className="pfp" src={pfp} alt="" />
            <div className="details">
                Sziasztok! Zanati Zsolt "Robika" vagyok, frissen végzett szoftverfejlesztő. <br/>
                Ezen az oldalon szeretném megosztani az elkészült és a jövőben elkészülendő munkáimat!
            </div>
        </div>
    )
}

export default Main