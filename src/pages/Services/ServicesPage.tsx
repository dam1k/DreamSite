import Services from "../../components/Services/Services";
import Service from "../../components/Services/Service";
import "./ServicesPage.scss";
import { services } from "../../data/data";
import Contact from "../../components/Contact/Contact";
import AnimatedPage from "../../components/AnimatedPage";

const ServicesPage = () => {

  const pageTitle = 'These are our services.';
  return (
    <AnimatedPage>
    <div className="services-page">
      <h1 className="page-title darkColor lightBgColor m2t">{pageTitle}</h1>
      <div className="services darkBgColor">
      <div className="container">
        <div className="services-flex">
          <div className="services-heading">
          <h1 className="services-title">Services</h1>
          <p className="text-left">Explore our portfolio to see our best work</p>
          </div>

          <div className="services-list">
            {services.map(service => <Service dropdown={false} key={service.id} service={service} navigate={false}/>)}
          </div>
        </div>
      </div>
    </div>
    <Contact showImg={true}/>
    </div>
    </AnimatedPage>
  )
}

export default ServicesPage