import React from "react";
import './Tech.css'

function Tech(){
    return(
        <div className="Tech" id="Tech">
            <h1>Technologiák</h1>
            <div className="details">Az alábbi Technologiákban vagyok jártas alap, vagy haladó szinten:</div>
            <div className="cards">

                <div className="card">
                    <img src="dotnet.png" alt="" />
                    WPF
                </div> 

                <div className="card">
                    <img src="logo512.png" alt="" />
                    React
                </div>
                

                 <div className="card">
                    <img src="dotnet.png" alt="" />
                    ASP.NET
                </div>
            </div>
        </div>
    )
}

export default Tech