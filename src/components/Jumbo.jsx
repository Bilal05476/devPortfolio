import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./css/jumbotron.css";

const Jumbo = () => {
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-jumbotron" id="top">
      <Helmet>
        <title>Bilal Ahmed | Portfolio</title>
      </Helmet>
      <p
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="welcome"
      >
        Welcome To My Portfolio!
      </p>
      <strong
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="slogan"
      >
        Provide Digital Solution for your Business
      </strong>
      <p
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="description"
      >
        A Self thought <span>FREELANCE Website Developer</span>.
      </p>
      <a
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2500"
        href="#contact"
      >
        <button className="jumbo-button">Contact Now</button>
      </a>
      <div className="social-icons-section mt-md-4">
        <a
          className="social-link"
          target="blank"
          href="https://github.com/Bilal05476"
        >
          <i title="GitHub" className="fab fa-github"></i>
        </a>
        <a
          className="social-link"
          target="blank"
          href="https://www.instagram.com/bilal_ahmed_05/"
        >
          <i title="Instagram" className="fab fa-instagram"></i>
        </a>
        <a
          className="social-link"
          target="blank"
          href="https://www.linkedin.com/in/bilal-ahmed-b75125184"
        >
          <i title="LinkedIn" className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="social-link"
          target="blank"
          href="https://www.facebook.com/profile.php?id=100007545697355"
        >
          <i title="Facebook" className="fab fa-facebook"></i>
        </a>
        <a
          className="social-link"
          target="blank"
          href="mailto:bilalahmed6551@gmail.com"
        >
          <i title="Email" className="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Jumbo;
