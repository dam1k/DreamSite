import "./Navbar.scss";
import "../../App.scss";
import {NavLink} from "react-router-dom"
import Logo from "../Logo/Logo";

const Navbar = () => {
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
        <NavLink to="/reviews">Reviews</NavLink>
      </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar;