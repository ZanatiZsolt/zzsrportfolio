import React from "react";
import './Nav.css';

function Nav() {
    return (
        <div className="Nav" id="Nav">
            <div className="items">
                <div className="brand" href="#">R</div>
                <a className="item" href="#Root">Rólam</a>
                <a className="item" href="#Tech">Technológiák</a>
                <a className="item" href="#Works">Munkáim</a>
            </div>
            <div className="line" />
        </div>
    );
}

export default Nav;
