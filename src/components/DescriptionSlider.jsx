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
  <div className="">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
  </div>
);
const desc2 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I used to be a tech reporter for the Los Angeles Newspaper Group.</p>
  </div>
);
const desc3 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I used to be a tech reporter for the Los Angeles Newspaper Group.</p>
    <p>4 years ago, I left journalism to do product marketing for a logistics tech startup.</p>
  </div>
);

const desc4 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I used to be a tech reporter for the Los Angeles Newspaper Group.</p>
    <p>4 years ago, I left journalism to do product marketing for a logistics tech startup.</p>
    <p>A year later, I decided to learn how to code.</p>
  </div>
);

const desc5 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I used to be a tech reporter for the Los Angeles Newspaper Group.</p>
    <p>4 years ago, I left journalism to do product marketing for a logistics tech startup.</p>
    <p>A year later, I decided to learn how to code.</p>
    <p>The last 3 years have been a mix of engineering, product and UX design.</p>
  </div>
);

class DescriptionSlider extends Component {
  constructor (props) {
    super(props);
    this.state = {
      position: 1
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
      case 4:
        description = desc4();
        break;
      case 5:
        description = desc5();
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
          <div style={{textAlign: 'center'}}>I'm a <strong>product developer</strong> with broad startup experience in tech.</div>
        </div>
        <div className="content">
          {this.getDescription()}
        </div>
        <div className="slider">
          <Slider min={1} max={5} defaultValue={this.state.position} onChange={this.handleChange} handle={handle} />
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

