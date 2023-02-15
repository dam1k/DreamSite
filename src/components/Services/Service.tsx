import {motion, AnimatePresence} from "framer-motion";
import { useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {BsArrowRightCircle} from "react-icons/bs";
import loader from "../../assets/loader.gif"
import Icons from "../../icons/icons";
import "./Service.scss";

const Service = ({service, dropdown, navigate}:any) => {
  const serviceRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  // const [pulsing, setPulsing] = useState<Boolean>(false);
  // const [imageLoading, setImageLoading] = useState(false)
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
}, []);


  return (
    <div ref={serviceRef} className={`service lightBtBorder 
    ${isVisible ? 'service-visible' : 'hidden'}`
    }
    onClick={() => setIsOpen(prev => !prev)}
    >
      <div className="service-row">
     <div className={`service-heading m1t ${isOpen ? "lightColor" : ''}`}>
     <span className="service-id">0{service.id}</span>
     <h1 className="service-title">{service.text}</h1>
     </div>

     {dropdown ? <button className={`arrow-btn ${isOpen ? "rotate-btn" : ''}`}
      >
        <BsArrowRightCircle color="#CFF5E7"/>
        </button> : ''}
        </div>

        <AnimatePresence>
        {isOpen && <motion.div
        onClick={() => setIsOpen(prev => !prev)}
        initial={{opacity:0, y:'20px'}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y: '20px'}}
        transition={{duration:0.75}}
         className='service-img'>

       <img onClick={() => {
          if(navigate) navigateTo("/services")
          }} 
          src={service.image} loading="lazy" alt={`service-${service.text}`}/>
        </motion.div>}
        </AnimatePresence>
        {!dropdown && <p className="service-desc lightColor">{service.description}</p>}
     </div>
  )
}

export default Service

{/* <AnimatePresence>
        {isOpen && <div
         className= {`${pulsing ? "pulse" : ""} loadable service-img`}
        style={{ width: "100%", background: "#ccc" }}>

       <motion.img onClick={() => {
          if(navigate) navigateTo("/services")
          }} 
          initial={{ height: "0", opacity: 0 }}
          // style={{ height: imageLoading ? "6rem" : "auto" }}
          animate={{
            height: imageLoading ? "0" : "auto",
            opacity: imageLoading ? 0 : 1
          }}
          transition={
            ({ height: { delay: 0, duration: 0.4 } })
          }
          onLoad={ImageLoaded}
          width="100%"
          src={service.image} loading="lazy" alt={`service-${service.text}`}/>

        </div>}
        </AnimatePresence> */}