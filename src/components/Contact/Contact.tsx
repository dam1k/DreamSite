// import {useState} from "react";
import "./Contact.scss";
import pastelBackground from "../../assets/heroImage.jpg";

const Contact = () => {
  return (
    <div className="contact lightBgColor">
     <img src={pastelBackground}/>
     <div className="container">
          <div className="contact-flex">
               <div className="blue-separator"/>
               <h1 className="darkColor">Contact Us</h1>

               <form action='https://formsubmit.co/9b86b07264e533be1ccb454283825c02' method="POST">
                    <input className="name lightColor" type="text" name="name" required placeholder="Name"/>
                    <input className="email lightColor" type="email" name="email" required placeholder="Email"/>
                    <input type="text lightColor" className="phone" name="phone" required placeholder="Phone"/>
                    <button className="defaultBtn m2t" type="submit">Send</button>
                    <input type="hidden" name="_next" value={window.location.href}/>
                    <input type="hidden" name="_subject" value="Mesaj nou!"/>
                    <input type="hidden" name="_captcha" value="false"/>
               </form>
          </div>

     </div>
     </div>
  )
}

export default Contact