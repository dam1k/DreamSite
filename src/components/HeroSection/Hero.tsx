import Button from "../Button/Button";
import heroImage from "../../assets/heroImage.jpg";

import "./Hero.scss";

const Hero = () => {
     const heroMainText = "we bring your vision to life";
     const sideText = 
     ["We are a web development agency based in Moldova", 
     "Create the  best possible website with our team"]
     const buttonText = "Talk to us now";

  return (
     <div className="hero lightBgColor">
     <div className="container">
    <div className="hero-flex my-4">
     <div className="hero-title">
          <h1 className="darkColor">{heroMainText}</h1>
     </div>
     <div className="hero-middle m3t">
          <p className="hero-left-text">{sideText[0]}</p>
          <div className="hero-button">
          <Button text={buttonText}/>
          </div>
          <p className="hero-right-text">{sideText[1]}</p>
     </div>
     <div className="hero-image">
          <img src={heroImage}/>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Hero