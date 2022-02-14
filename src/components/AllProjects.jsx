import "./css/portfolio.css";
import portfolioProjects from "./portfolioProjects";
import { Helmet } from "react-helmet";
import {useEffect} from "react";

const AllProjects = () => {
  const quarterOne = portfolioProjects.slice(0, 3);
  const quarterTwo = portfolioProjects.slice(3, 6);
  const quarterThree = portfolioProjects.slice(6, 9);

  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-project" id="my-portfolio">
      <Helmet>
        <title>Bilal Ahmed | All Projects</title>
      </Helmet>
      <div className="header spc">
        <h3>Portfolio</h3>
        <small>
          Here is my some best Portfolio Projects! Using different techs like
          ReactJs, NextJs, Firebase etc..
        </small>
      </div>
      <div className="portfolio-section">
        {quarterOne.map((pro, ind) => (
          <div className="portfolio-card" data-aos="fade-in" key={ind}>
            <div className="portfolio-image">
              <img src={pro.projectImg} width="100%" alt="portfolio-screen" />
            </div>
            <div className="portfolio-content">
              <h4 className="portfolio-heading">{pro.projectName}</h4>
              <p className="portfolio-desc">{pro.projectDesc}</p>
              <div className="project-addons">
                <small>
                  Purpose:
                  <strong> {pro.projectPurpose}</strong>
                </small>
                <br />
                <small className="text-left">
                  Features:
                  {pro.projectFeatures.map((item, ind) => (
                    <li style={{ listStyle: "none" }} key={ind}>
                      <i className="far fa-check"></i> {item}
                    </li>
                  ))}
                </small>
                <br />
                <small className="text-left">
                  Not Include (Under Dev):
                  {pro.projectFeaturesWill.map((item, ind) => (
                    <li style={{ listStyle: "none" }} key={ind}>
                      <i className="far fa-times text-danger"></i> {item}
                    </li>
                  ))}
                </small>
                <br />
                <br />
                <a
                  title="Visit Project"
                  className="project-visit"
                  href={pro.projectVisit}
                  target="blank"
                >
                  <i className="far fa-globe"></i> Try
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-section">
        {quarterTwo.map((pro, ind) => (
          <div className="portfolio-card" data-aos="fade-in" key={ind}>
            <div className="portfolio-image">
              <img src={pro.projectImg} width="100%" alt="portfolio-screen" />
            </div>
            <div className="portfolio-content">
              <h4 className="portfolio-heading">{pro.projectName}</h4>
              <p className="portfolio-desc">{pro.projectDesc}</p>
              <div className="project-addons">
                <small>
                  Purpose:
                  <strong> {pro.projectPurpose}</strong>
                </small>
                <br />
                <small className="text-left">
                  Features:
                  {pro.projectFeatures.map((item, ind) => (
                    <li style={{ listStyle: "none" }} key={ind}>
                      <i className="far fa-check"></i> {item}
                    </li>
                  ))}
                </small>
                <br />
                <small className="text-left">
                  Not Include (Under Dev):
                  {pro.projectFeaturesWill.map((item, ind) => (
                    <li style={{ listStyle: "none" }} key={ind}>
                      <i className="far fa-times text-danger"></i> {item}
                    </li>
                  ))}
                </small>
                <br />
                <br />
                <a
                  title="Visit Project"
                  className="project-visit"
                  href={pro.projectVisit}
                  target="blank"
                >
                  <i className="far fa-globe"></i> Try
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-section">
        {quarterThree.map((pro, ind) => (
          <div className="portfolio-card" data-aos="fade-in" key={ind}>
            <div className="portfolio-image">
              <img src={pro.projectImg} width="100%" alt="portfolio-screen" />
            </div>
            <div className="portfolio-content">
              <h4 className="portfolio-heading">{pro.projectName}</h4>
              <p className="portfolio-desc">{pro.projectDesc}</p>
              <div className="project-addons">
                <small>
                  Purpose:
                  <strong> {pro.projectPurpose}</strong>
                </small>
                <br />
                <small className="text-left">
                  Features:
                  {pro.projectFeatures.map((item, ind) => (
                    <li style={{ listStyle: "none" }} key={ind}>
                      <i className="far fa-check"></i> {item}
                    </li>
                  ))}
                </small>
                <br />
                <small className="text-left">
                  Not Include (Under Dev):
                  {pro.projectFeaturesWill.map((item, ind) => (
                    <li style={{ listStyle: "none" }} key={ind}>
                      <i className="far fa-times text-danger"></i> {item}
                    </li>
                  ))}
                </small>
                <br />
                <br />
                <a
                  title="Visit Project"
                  className="project-visit"
                  href={pro.projectVisit}
                  target="blank"
                >
                  <i className="far fa-globe"></i> Try
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
