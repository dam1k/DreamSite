import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import MessageIcon from "../../assets/MessageIcon.svg";
import Logo from "../Logo/Logo";

const Footer = () => {
     const footerText = "Excited to work with us? Send us a message!";
  return (
    <div className="footer">
     <div className="container">
          <div className="footer-flex">
               <div className="work m3b">
                    <h1>{footerText}</h1>
                    <span className="icon"><img src={MessageIcon}/></span>
               </div>
               <div className="separator"/>
               <div className="footer-navbar m3t">
               <div className="navbar darkBgColor">
                    <Logo/>
      <div className="links">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
      </div>
     
      <div className="links">
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