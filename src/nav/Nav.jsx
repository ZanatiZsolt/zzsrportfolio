import React from "react";
import './Nav.css';

function Nav() {
    return (
        <div className="Nav" id="Nav">
            <div className="items">
                <div className="brand" href="#">R</div>
                <a className="item" href="#About">Rólam</a>
                <a className="item" href="#Tech">Technológiák</a>
                <a className="item" href="#Works">Munkáim</a>
                 <a className="item" href="#Contact">Elérhetőség</a>
            </div>
            <div className="line" />
        </div>
    );
}

export default Nav;
