import "./About.scss";
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import { NavLink } from "react-router-dom";

const About = () => {
  const pageText = 'We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.'
  const socialData = {
    email: {
      name:'dream.site.md1@gmail.com',
      link: ''
    },
    facebook: {
      name:'DreamSite',
      link: 'https://www.facebook.com/profile.php?id=100088812571928'
    },
    instagram: {
      name:'@dream.site.md1',
      link: 'https://www.instagram.com/dream.site.md1/'}
  }
  return (
    <div className="about">
      <div className="container">
      <h1 className="about-title page-title darkColor">About Us.</h1>
      <div className="about-text">
        <h1>{pageText}</h1>
        </div>
      </div>
      <div className="about-social darkBgColor lightColor">
        <div className='container about-flex'>
        
        <NavLink to={socialData.facebook.link}>
        <div className="social">
          <div className='icon'>
            <AiFillFacebook/>
          </div>
          <p>{socialData.facebook.name}</p>
        </div>
        </NavLink>
         
        <div className="social">
          <div className='icon'>
            <MdEmail/>
          </div>
          <p>{socialData.email.name}</p>
        </div>

       <NavLink to={socialData.instagram.link}> 
        <div className="social">
          <div className='icon'>
            <AiFillInstagram/>
          </div>
          <p>{socialData.instagram.name}</p>
        </div>
        </NavLink>
        </div>
      </div>
    

      <div className="founders darkColor">
        <h3>Founders:</h3>
        <h3>Damian Bostan</h3>
        <h3>Barbuta Felix</h3>
      </div>
      </div>
  )
}

export default About