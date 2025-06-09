import React from "react";
import './Works.css'
import bmzs from './BMZS2.png'


function Works(){
    return(
        <div className="Works" id="Works">
            <h1>Munkáim</h1>
            <div className="details">Az oldal ezen részén a már elkészült projektjeim, vagy projektek amikben részt vettem láthatók <br /> Nagyon szeretek új dolgokon dolgozni, ezért remélhetően gyorsan fog gyarapodni fog ez a lista <br />A github oldalak a kártyára való kattintással érhetőek el.</div>

            <div className="workGrid">
                <a className="gridItem" href="https://github.com/M4TT41/BMZSBarberShop">
                    <img src={bmzs} alt="" />
                    A technikusi mestermunkánk, egy fodrász weboldal.
                </a>
                <a className="gridItem">
                    Számológép játékokhoz.
                </a>
              
            </div>
        </div>
    )
}

export default Works