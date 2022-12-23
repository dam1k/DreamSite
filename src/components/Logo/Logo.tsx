import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
     <NavLink to={'/'}>
     <div className="logo">
     <img src={logo}/>
     </div>
     </NavLink>
  )
}

export default Logo