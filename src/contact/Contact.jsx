import react, { useState } from "react";
import './Contact.css'
import { FaDiscord , FaInstagram,FaFacebook} from "react-icons/fa";

function Contact(){
    const[email,setEmail] = useState("")
    const[message,setMessage] = useState("")
   
    
    const url = '' 
    const sendDiscordMessage = async (e) => {
  e.preventDefault();

  const payload = {
    content: `📧 Email: ${email}\n💬 Üzenet: ${message}`,
    username: "Űrlap",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      
      alert("Üzenet sikeresen elküldve!");
      setEmail("");
      setMessage("");
    } else {
      console.error("Hiba a küldés során:", await response.text());
      
    }
  } catch (error) {
  
    alert("Hálózati hiba történt.");
  }
};

    return(

        <div className="Contact" id="Contact">
            <h1>Elérhetőség</h1>
            <div className="details">Itt találhatóak az elérhetőségeim, valamint egy űrlap ahol üzenetet lehet számomra küldeni.</div>

                <form  className='form'onSubmit={sendDiscordMessage}>
                  
                    <div className="label">E-mail:</div>
                    <input type="email" placeholder="e-mail" className="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <div className="label">Üzenet</div>
                    <textarea  id="" placeholder="üzenet" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type="submit" className="button">Submit</button>
                </form>
     
            <div className="contacts">
                <a className="contactItem" href="https://discordapp.com/users/234639136085114880" target="_blank"><FaDiscord className="icon"/> robika</a>
                <a className="contactItem" href="https://www.facebook.com/zsolt.zanati.9" target="_blank"><FaFacebook className="icon"/> Zsolt Zanati</a>
                <a className="contactItem" href="https://www.instagram.com/zsoltzanatirobika/" target="_blank"><FaInstagram className="icon"/> zsoltzanatirobika</a>
            </div>
        </div>
    )
}

export default Contact