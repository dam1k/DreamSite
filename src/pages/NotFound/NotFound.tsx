import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found container">
     <h1 className="darkColor">Oops! Page not found!</h1>
     <Link to="/"><Button text={'Go back to home'}/></Link>
     </div>
  )
}

export default NotFound