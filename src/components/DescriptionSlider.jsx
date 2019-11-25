import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React, { Component } from "react";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import "./DescriptionSlider.scss";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return <Handle value={value} {...restProps} />;
};

const desc1 = () => (
  <div className="description">{/*<p className="description-line"> </p>*/}</div>
);
const desc2 = () => (
  <div className="description">
    <p className="description-line">
      I used to write stories for newspaper readers.
    </p>
    {/*<p>Now I build things for Internet users.</p>*/}
    {/*<p>I'm a creative who knows how to code.</p>*/}
    {/*<p>An empathetic translator.</p>*/}
    {/*<p>Curious about the world and passionate about making it easier to navigate.</p>*/}
  </div>
);
const desc3 = () => (
  <div className="description">
    <p className="description-line">
      I used to write stories for newspaper readers.
    </p>
    <p className="description-line">Now I build things for Internet users.</p>
    {/*<p>I'm a creative who knows how to code.</p>*/}
    {/*<p>An empathetic translator.</p>*/}
    {/*<p>Curious about the world and passionate about making it easier to navigate.</p>*/}
  </div>
);

const desc4 = () => (
  <div className="description">
    <p className="description-line">
      I used to write stories for newspaper readers.
    </p>
    <p className="description-line">Now I build things for Internet users.</p>
    <p className="description-line">I'm a creative who knows how to code.</p>
    {/*<p>An empathetic translator.</p>*/}
    {/*<p>Curious about the world and passionate about making it easier to navigate.</p>*/}
  </div>
);

const desc5 = () => (
  <div className="description">
    <p className="description-line">
      I used to write stories for newspaper readers.
    </p>
    <p className="description-line">Now I build things for Internet users.</p>
    <p className="description-line">I'm a creative who knows how to code.</p>
    <p className="description-line">An empathetic translator.</p>
    {/*<p>Curious about the world and passionate about making it easier to navigate.</p>*/}
  </div>
);
const desc6 = () => (
  <div className="description">
    <p className="description-line">
      I used to write stories for newspaper readers.
    </p>
    <p className="description-line">Now I build things for Internet users.</p>
    <p className="description-line">I'm a creative who knows how to code.</p>
    <p className="description-line">An empathetic translator.</p>
    <p className="description-line">
      Curious about the world and passionate about making it easier to navigate.
    </p>
  </div>
);
const desc7 = () => (
  <div className="description">
    <p className="description-line">
      I used to write stories for newspaper readers.
    </p>
    <p className="description-line">Now I build things for Internet users.</p>
    <p className="description-line">I'm a creative who knows how to code.</p>
    <p className="description-line">An empathetic translator.</p>
    {/*<p>Curious about the world and passionate about making it easier to navigate.</p>*/}
  </div>
);
const desc8 = () => (
  <div className="description">
    <p className="description-line">
      I used to write stories for newspaper readers.
    </p>
    <p className="description-line">Now I build things for Internet users.</p>
    <p className="description-line">I'm a creative who knows how to code.</p>
    <p className="description-line">An empathetic translator.</p>
    <p className="description-line">
      Curious about the world and passionate about making it easier to navigate.
    </p>
  </div>
);

class DescriptionSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1
    };
  }
  handleChange = position => {
    this.setState({ position });
  };
  getDescription = () => {
    let description = "";
    switch (this.state.position) {
      case 1:
        description = desc1();
        break;
      case 2:
        description = desc2();
        break;
      case 3:
        description = desc3();
        break;
      case 4:
        description = desc4();
        break;
      case 5:
        description = desc5();
        break;
      case 6:
        description = desc6();
        break;
      case 7:
        description = desc7();
        break;
      case 8:
        description = desc8();
        break;
      default:
        break;
    }
    console.log("description: ", description);
    return description;
  };

  render() {
    return (
      <div className="description-slider">
        <div className="description">
          <div
            style={{
              textAlign: "center",
              paddingLeft: "1rem",
              paddingRight: "1rem"
            }}
          >
            <div>
              I'm a <strong>product designer</strong> who speaks French, Spanish
              and Javascript.
            </div>
          </div>
        </div>
        <div className="slider-content">{this.getDescription()}</div>
        <div className="slider">
          <Slider
            min={1}
            max={6}
            defaultValue={this.state.position}
            onChange={this.handleChange}
            handle={handle}
          />
          <div className="labels">
            <span>Less</span>
            <span>More</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionSlider;
