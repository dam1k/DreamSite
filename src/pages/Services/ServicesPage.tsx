import Services from "../../components/Services/Services";
import Service from "../../components/Services/Service";
import "./ServicesPage.scss";
import { services } from "../../data/projects";
import Contact from "../../components/Contact/Contact";

const ServicesPage = () => {

  const pageTitle = 'These are our services.';
  return (
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
            {services.map(service => <Service dropdown={false} key={service.id} service={service}/>)}
          </div>
        </div>
      </div>
      <Contact showImg={true}/>
    </div>
    </div>
  )
}

export default ServicesPage