import "./css/services.css";
import service from "./serviceData.json";

const Services = () => {
  return (
    <div className="services" id="my-services">
      <div className="header spc">
        <h3>Services</h3>
        <small>
          Business Planning, Strategy, and Execution. A problem-solving
          philosophy that leads to products people actually want to use.
        </small>
      </div>
      <div className="services-section">
        {service.map((item, ind) => (
          <div
            className="service-card"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={ind}
          >
            <div className="icon">
              <i className={item.serviceIcon}></i>
            </div>
            <h4 className="services-heading">{item.serviceName}</h4>
            <i className="services-tagline">{item.serviceTagLine}</i>
            <p className="service-desc">{item.serviceDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
