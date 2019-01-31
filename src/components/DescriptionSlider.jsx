import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, {Component} from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import './DescriptionSlider.scss';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const desc1 = () => (
  <div className="description">
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
  </div>
);
const desc2 = () => (
  <div className="description">
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
  </div>
);
const desc3 = () => (
  <div className="description">
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
    <p>Here is a bunch of text</p>
    <p>About Who I am</p>
  </div>
);

const wrapperStyle = { width: 400, height: 350, margin: 50 };

class DescriptionSlider extends Component {
  constructor (props) {
    super(props);
    this.state = {
      position: 2
    }
  }
  handleChange = position => {
    this.setState({position})
  };
  getDescription = () => {
    let description = '';
    switch(this.state.position) {
      case 1:
        description = desc1();
        break;
      case 2:
        description = desc2();
        break;
      case 3:
        description = desc3();
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
        <div className="content" style={wrapperStyle}>
          {this.getDescription()}
          <Slider min={1} max={3} defaultValue={this.state.position} onChange={this.handleChange} handle={handle} />
        </div>
      </div>
    );
  }
}

export default DescriptionSlider;

