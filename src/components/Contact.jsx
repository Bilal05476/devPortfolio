import "./css/contact.css";

const Contact = () => {
  return (
    <div className="contact-set" id="contact">
      <div className="header">
        <h3>Contact Me & Subscribe</h3>
        <small>
          Contact now for any query related to my services, I am happy to
          respond to you back, <br /> Make sure to subscribe as well for future
          events and amazing stuff!
        </small>
      </div>
      <div className="row">
        <form
          className="contact-section col-md-8 col-12"
          data-aos="fade-in"
          name="contactForm"
          method="POST"
          action="/success/"
        >
          <div className="row">
            <input type="hidden" name="form-name" value="contactForm" />
            <div className="left-section col-md-4 col-12">
              <input name="name" id="name" type="text" placeholder="Your Name *" required />
              <input
              name="email"
                id="email"
                type="email"
                placeholder="Your Email *"
                required
              />
              <input
              name="phone"
                id="phone"
                type="text"
                placeholder="Your Phone *"
                required
              />
            </div>
            <div className="right-section col-md-7 col-12">
              <textarea
              name="message"
                id="message"
                rows="9"
                // cols="20"
                placeholder="Your Message *"
                required
              ></textarea>
            </div>
            {/* <br /> */}
            <div className="contact-button mx-auto">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </div>
        </form>
        <div className="col-md-4 subscribe" data-aos="fade-in">
          <form name="subscribeForm" method="POST" action="/success/">
            <input type="hidden" name="form-name" value="subscribeForm" />
            <input
              id="email"
              type="email"
              placeholder="Your Email *"
              name="email"
              required
            />
            <div className="contact-button">
              <button type="submit">SUBSCRIBE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
