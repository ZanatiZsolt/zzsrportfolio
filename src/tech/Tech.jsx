import React from "react";
import './Tech.css'
import wpf from './dotnet.png'
import reactl from "./logo512.png";

function Tech(){
    return(
        <div className="Tech" id="Tech">
            <h1>Technologiák</h1>
            <div className="details">Az alábbi Technologiákban vagyok jártas alap, vagy haladó szinten:</div>
            <div className="cards">

                <div className="card">
                    <img src={wpf} alt="" />
                    WPF
                </div> 

                <div className="card">
                    <img src={reactl} alt="" />
                    React
                </div>
                

                 <div className="card">
                    <img src={wpf} alt="" />
                    ASP.NET
                </div>
            </div>
        </div>
    )
}

export default Tech