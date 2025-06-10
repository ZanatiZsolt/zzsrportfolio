
import './About.css'
import pfp from './pfp.jpg'

function About(){
    return(
        <div className="About" id="About">
            <img className="pfp" src={pfp} alt="" />
            <div className="details main">
                Sziasztok! Zanati Zsolt "Robika" vagyok, frissen végzett szoftverfejlesztő. <br/>
                Ezen az oldalon szeretném megosztani az elkészült és a jövőben elkészülendő munkáimat!
            </div>
        </div>
    )
}

export default About