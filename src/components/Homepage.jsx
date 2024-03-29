import React from "react";
import "./Homepage.scss";
import { DirectLink } from "react-scroll";
import glowing_shadow_portrait from "../img/glowing_shadow_portrait.png";
import { isMobile } from "../utils";
import salamander from '../img/salamander.png';
import { Link } from 'react-router-dom';
import sad_worker from '../img/sad_worker.png';
import survivor from '../img/survivor.png';

const BIG_TEXT_STYLE = { lineHeight: "1rem" };
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const topSpacing = isMobile ? "1rem" : "3.5rem";
    return (
      <div className="bg-black scroll-container">
        <div className={`flex-fill vh-100 scroll-section`} >
          <div style={{ height: topSpacing }}/>

          <div
            className={`row d-flex align-items-center justify-content-around flex-fill w-100 mx-0 ${
              isMobile() ? "pt-4 mt-5" : "h-100"
            }`}
          >
            <div className={`col-md-7 d-flex justify-content-center`}>
              <img src={survivor} style={{ maxWidth: "100%" }} className="img-rounded" />
            </div>
            <div className={`col-md-5 ${isMobile() ? "mt-4" : ""}`}>
              <div className="text-light mr-md-5">
                <h1 className="mb-1">
                  <span className="text-nowrap page-header">
                    Product designer
                  </span>{" "}
                </h1>{" "}
                <h3 className="mb-1 page-header">
                  Journalism survivor
                </h3>{" "}
                <h3 className="mb-1  page-header">
                  Language lover
                </h3>{" "}
                {/*<h3 className="mt-3 text-gray">*/}
                  {/*<div className="mb-2">*/}
                    {/*<span>Interaction design | </span>*/}
                    {/*<span className="text-nowrap">Systems design | </span>*/}
                  {/*</div>*/}
                  {/*<div>*/}
                    {/*<span className="">Information architecture | </span>*/}
                    {/*<span className="">Javascript </span>*/}
                  {/*</div>*/}
                {/*</h3>*/}
              </div>
            </div>
          </div>
          {/*<div className="arrow bounce"/>*/}
        </div>
        {/*PROJECTS*/}
        <div className={`row no-gutters my-4 ${isMobile() ? "pt-5 mt-3" : "scroll-section"}`} style={{paddingTop: "5rem"}}>
          <div className={`col-md-6 d-flex flex-column justify-content-center align-items-center ${isMobile() ? "scroll-section p-4" : ""}`}>
            <img
              className="img-fluid m-3 img-rounded"
              style={{maxWidth: "90%"}}
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
          <div className={`col-md-6 d-flex flex-column justify-content-center align-items-center ${isMobile() ? "scroll-section p-4" : ""}`}>
            <img
              className="img-fluid m-3 img-rounded"
              style={{maxWidth: "90%"}}
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

export default HomePage;
