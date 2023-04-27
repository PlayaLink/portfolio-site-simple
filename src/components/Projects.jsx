import React from "react";
import "./Projects.scss";
import salamander from "../img/salamander.png";
import sad_worker from "../img/sad_worker.png";
import { Link } from "react-router-dom";
import { isMobile } from '../utils';

class Projects extends React.Component {
  render() {
    return (
      <div className={`bg-black ${isMobile() ? "d-flex flex-fill w-100 h-100" : "bg-black w-100 flex-fill h-100 d-flex align-items-center justify-content-center"}`} style={{paddingTop : "5rem"}}>
        <div className="row no-gutters">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center px-md-5 mt-5 mt-md-0 pt-3 pt-md-0">
            <img
              className="img-fluid m-3 img-rounded"
              src={salamander}
              alt="Surrealist salamander"
            />
            <Link
              to="/case-study/meetly"
              id="Meetly"
              className="button btn-gray text-center mx-4 mt-2 mt-md-4"
            >
              <span className="text-nowrap"><span className="d-none d-lg-inline">Early-stage </span>product development</span>
            </Link>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center px-md-5 mb-5 mb-md-0 mt-5 mt-md-0 pt-5 pt-md-0">
            <img
              className="img-fluid m-3 img-rounded"
              src={sad_worker}
              alt="Futuristic construction worker"
            />
            <Link
              to="/case-study/design-system"
              id="design-system"
              className="button btn-gray text-center mt-2 mt-md-4"
            >
              <span>Design systems</span>
            </Link>
          </div>
          {/*<div className="col-md-6 d-flex flex-column justify-content-center align-items-center px-md-5 mb-5 mb-md-0 mt-5 mt-md-0 pt-5 pt-md-0">*/}
            {/*<img*/}
              {/*className="img-fluid p-3"*/}
              {/*src={data_design}*/}
              {/*alt="data-driven design"*/}
            {/*/>*/}
            {/*<Link*/}
              {/*to="/case-study/data-driven-design"*/}
              {/*id="data-driven-design"*/}
              {/*className="button btn-gray text-center mt-2 mt-md-4"*/}
            {/*>*/}
              {/*<span>Data-driven design</span>*/}
            {/*</Link>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default Projects;
