import React from "react";
import "./About.scss";
import { DirectLink } from "react-scroll";
import glowing_shadow_portrait from "../img/glowing_shadow_portrait.png";
import { isMobile } from "../utils";

const BIG_TEXT_STYLE = { lineHeight: "1rem" };
class Bio extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className={`bg-black flex-fill w-100 h-100 ${isMobile() ? "vh-100" : "position-fixed"}`} style={{paddingTop : "5rem"}}>
        <div
          className={`row d-flex align-items-center justify-content-around flex-fill w-100 h-100 horizontal-container-large ${isMobile() ? "pt-5" : ""}`}
        >
          <div className="col-md-7">
            <img src={glowing_shadow_portrait} style={{ maxWidth: "100%" }} />
          </div>
          <div className="col-md-5">
            <div className="my-auto text-light px-4 mr-md-5 bg-black">
              <h1 className="text-primary mb-0">
                <span className="text-nowrap page-header">Product designer</span> <span className="text-white">{" "}+</span>
              </h1>{" "}
              <h1 className="text-primary mb-0 mb-md-3 text-nowrap page-header">Journalism survivor</h1>{" "}
              <h3 className="mt-3">
                <div className="mb-2">
                  <span>Research | </span>
                  <span className="text-nowrap">Systems design |{" "}</span>
                </div>
                <div>
                  <span className="">Information architecture |{" "}</span>
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
    );
  }
}

export default Bio;
