import "../../App.scss";
import {motion} from "framer-motion"

const Button = ({className, text}:any) => {
  return (
    <motion.button whileTap={{scale:0.95}} className={className ? className : "defaultBtn"}>
     {text}
    </motion.button>
  )
}

export default Button