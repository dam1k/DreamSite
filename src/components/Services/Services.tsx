import "./Services.scss";
import Service from "./Service";

const data = [
{
  text: "UI/UX Design",
  id: 1
},
{
  text: "Development",
  id: 2
},
{
  text: "Graphic Design",
  id: 3
}
]


const Services = () => {
  return (
    <div className="services darkBgColor">
      <div className="container">
        <div className="services-flex">
          <div className="services-heading">
          <h1 className="services-title">Services</h1>
          <p className="text-left">Explore our portfolio to see our best work</p>
          </div>

          <div className="services-list">
            {data.map(service => <Service key={service.id} service={service}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;