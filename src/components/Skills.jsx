import "./css/skills.css";

const Skills = () => {
  return (
    <div className="skills" id="my-skills">
      <div className="header spc">
        <h3>My Skills</h3>
        <small>
          I love what I do and I do what my clients love {"&"} work with great
          clients all over the world to create thoughtful and purposeful
          websites. I don't just create websites, I create websites that SELL.
        </small>
      </div>
      <div className="skills-section row">
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-html5"></i>
          <h6 className="skill-name">Html5</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-css3-alt"></i>
          <h6 className="skill-name">Css3</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-bootstrap"></i>
          <h6 className="skill-name">Bootstrap</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-js"></i>
          <h6 className="skill-name">JavaScript</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-react"></i>
          <h6 className="skill-name">ReactJs</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-node-js"></i>
          <h6 className="skill-name">NodeJs</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-envira"></i>
          <h6 className="skill-name">MongoDB</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fas fa-server"></i>
          <h6 className="skill-name">Firebase</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-neos"></i>
          <h6 className="skill-name">Netlify</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <i className="skill-icon fab fa-python"></i>
          <h6 className="skill-name">Python</h6>
        </div>
      </div>
    </div>
  );
};

export default Skills;
