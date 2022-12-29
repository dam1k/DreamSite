import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import "../../App.scss";
import {NavLink} from "react-router-dom"
import Logo from "../Logo/Logo";
import {RxHamburgerMenu} from "react-icons/rx";
import {TfiClose} from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname])
  
  return (
    <nav>
    <div className="container">
    <div className="navbar darkBgColor">
      <div className="links">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
      </div>
      <Logo/>
      <div className="links">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <div className="hamburger-menu" onClick={() => setIsOpen(true)}>{<RxHamburgerMenu color="#CFF5E7"/>}</div>
      <div className={`mobile-links ${isOpen && 'open'}`}>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <div className="times" onClick={() => setIsOpen(false)}>{<TfiClose color="#CFF5E7"/>}</div>
      </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar;