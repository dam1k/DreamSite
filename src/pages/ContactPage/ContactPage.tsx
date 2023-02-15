import Contact from "../../components/Contact/Contact"
import AnimatedPage from "../../components/AnimatedPage"

const ContactPage = () => {
  return (
    <AnimatedPage>
    <div className="contact-page">
       <Contact showImg={false}/>
    </div>
    </AnimatedPage>

  )
}

export default ContactPage