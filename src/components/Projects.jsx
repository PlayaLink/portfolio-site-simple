import React from "react";
import "./Projects.scss";
import meetly_marketing_site from "../img/meetly_marketing_site.png";
import data_design from "../img/data_design.svg";
import { Link } from "react-router-dom";

class Projects extends React.Component {
  render() {
    return (
      <div className={`bg-black position-fixed`}>
        <div className="row vh-100 mt-n5">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center px-md-5">
            <img
              className="img-fluid p-3"
              src={meetly_marketing_site}
              alt="Meetly"
            />
            <Link
              to="/case-study/meetly"
              id="Meetly"
              className="button download-button btn-primary"
            >
              <span>Early-stage product development</span>
            </Link>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center px-md-5">
            <img
              className="img-fluid px-3 py-4"
              src={data_design}
              alt="data-driven design"
              style={{ height: "400px" }}
            />
            <Link
              to="/case-study/data-driven-design"
              id="data-driven-design"
              className="button download-button btn-primary mt-2"
            >
              <span>Data-driven design</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
