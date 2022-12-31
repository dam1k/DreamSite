import {motion, AnimatePresence} from "framer-motion";
import { useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {BsArrowRightCircle} from "react-icons/bs";
import Icons from "../../icons/icons";
import "./Service.scss";
import { services } from "../../data/data";

const Service = ({service, dropdown, navigate}:any) => {
  const serviceRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.isIntersecting) {
        setIsVisible(true);
      } 
  })
  observer.observe(serviceRef.current!);
  }, []);

useEffect(() => {
if(!dropdown) {
  setIsOpen(true);
}
}, [])

  return (
    <div ref={serviceRef} className={`service lightBtBorder 
    ${isVisible ? 'service-visible' : 'hidden'}`}>
      <div className="service-row">
     <div className={`service-heading m1t ${isOpen ? "lightColor" : ''}`}>
     <span className="service-id">0{service.id}</span>
     <h1 className="service-title">{service.text}</h1>
     </div>

     {dropdown ? <button className={`arrow-btn ${isOpen ? "rotate-btn" : ''}`}
      onClick={() => setIsOpen(prev => !prev)}>
        <BsArrowRightCircle color="#CFF5E7"/>
        </button> : ''}
        </div>

        <AnimatePresence>
        {isOpen && <motion.div
        initial={{opacity:0, y:'-20px'}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y: '-20px'}}
        transition={{duration:0.5}}
         className='service-img'>
          <img onClick={() => {
            if(navigate) navigateTo("/services")
           }} 
           src={service.image} loading="lazy"/> 
        </motion.div>}
        </AnimatePresence>
        {!dropdown && <p className="service-desc lightColor">{service.description}</p>}
     </div>
  )
}

export default Service