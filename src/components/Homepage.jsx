import React from "react";
import "./About.scss";
import { DirectLink } from "react-scroll";
import glowing_shadow_portrait from "../img/glowing_shadow_portrait.png";
import { isMobile } from "../utils";

const BIG_TEXT_STYLE = { lineHeight: "1rem"}
class Bio extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className={`about bg-black ${isMobile() ? "" : "position-fixed"}`}>
        <div className={`row d-flex align-items-center justify-content-around vh-100`}>
          <div className="col-md-7">
            <img src={glowing_shadow_portrait} style={{maxWidth: "100%"}} />
          </div>
          <div className="col-md-5">
            <div className="my-auto text-light px-5 mr-md-5 bg-black">
              <h1 className="text-primary text-uppercase mb-md-1">
                  Product designer <span className="text-gray">{" "}+</span>
                </h1>{" "}
              <h1 className="text-primary text-uppercase mb-md-3">
                  Journalism Survivor
                </h1>{" "}
              <h3 >Information architecture, systems design, research and Javascript</h3>
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
