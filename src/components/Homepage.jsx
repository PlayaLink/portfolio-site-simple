import React from "react";
import "./Homepage.scss";
import { DirectLink } from "react-scroll";
import glowing_shadow_portrait from "../img/glowing_shadow_portrait.png";
import { isMobile } from "../utils";
import salamander from '../img/salamander.png';
import { Link } from 'react-router-dom';
import sad_worker from '../img/sad_worker.png';

const BIG_TEXT_STYLE = { lineHeight: "1rem" };
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="bg-black scroll-container">
        <div className={`flex-fill vh-100 scroll-section`} style={{ paddingTop: "5rem" }}>
          <div
            className={`row d-flex align-items-center justify-content-around flex-fill w-100 h-100 horizontal-container-large ${
              isMobile() ? "pt-5" : ""
            }`}
          >
            <div className="col-md-7">
              <img src={glowing_shadow_portrait} style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-md-5">
              <div className="my-auto text-light px-4 mr-md-5 bg-black">
                <h1 className="mb-0">
                  <span className="text-nowrap page-header">
                    Product designer
                  </span>{" "}
                  <span className="text-white"> +</span>
                </h1>{" "}
                <h1 className="mb-0 mb-md-3 page-header">
                  Journalism survivor
                </h1>{" "}
                <h3 className="mt-3 text-gray">
                  <div className="mb-2">
                    <span>Interaction design | </span>
                    <span className="text-nowrap">Systems design | </span>
                  </div>
                  <div>
                    <span className="">Information architecture | </span>
                    <span className="">Javascript </span>
                  </div>
                </h3>
                {/*<h5 className="mt-4 mb-3">*/}
                {/*<span className="text-gray" style={BIG_TEXT}>*/}
                {/*My product experience*/}
                {/*</span>{" "}*/}
                {/*blurs the lines between research, design and frontend*/}
                {/*development, having spent the last 4 years at small, early stage*/}
                {/*startups.*/}
                {/*</h5>*/}
                {/*<h5 className="mt-4 mb-3">*/}
                {/*<span className="text-gray" style={BIG_TEXT}>*/}
                {/*I am a translator*/}
                {/*</span>{" "}*/}
                {/*of user needs into product ideas, of ideas into designs, and of*/}
                {/*designs into code.*/}
                {/*</h5>*/}
                <p />
              </div>
            </div>
          </div>
        </div>
        {/*PROJECTS*/}
        <div className="row no-gutters scroll-section">
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

export default HomePage;
