import "./Services.scss";
import Service from "./Service";
import { services } from "../../data/projects";

const Services = () => {
  return (
    <div className="services darkBgColor" id="services">
      <div className="container">
        <div className="services-flex">
          <div className="services-heading">
          <h1 className="services-title">Services</h1>
          <p className="text-left">Explore our portfolio to see our best work</p>
          </div>

          <div className="services-list">
            {services.map(service => <Service dropdown={true} key={service.id} service={service}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;