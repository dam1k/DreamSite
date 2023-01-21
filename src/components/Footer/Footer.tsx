import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import MessageIcon from "../../assets/MessageIcon.svg";
import Logo from "../Logo/Logo";

const Footer = () => {
     const footerText = {
          firstP: "Excited to work with us?",
          secondP: "Send us a message!"
     } 

  return (
    <div className="footer">
     <div className="container">
          <div className="footer-flex">
               <div className="work m3b">
                    <div className="footer-text">
                    <h1>{footerText.firstP}</h1>
                    <h1>{footerText.secondP}</h1>
                    </div>
                    <span className="icon"><img src={MessageIcon} alt=''/></span>
               </div>
               <div className="separator"/>
               <div className="footer-navbar m3t">
               <div className="navbar darkBgColor">
                    <Logo/>

      <div className="links">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      </div>
               </div>
          </div>
     </div>
     </div>
  )
}

export default Footer