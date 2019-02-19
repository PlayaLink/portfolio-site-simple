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
    <p>I was raised Mormon.</p>
  </div>
);
const desc3 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I was raised Mormon.</p>
    <p>Now I go to Burning Man.</p>
  </div>
);

const desc4 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I was raised Mormon.</p>
    <p>Now I go to Burning Man.</p>
    <p>I've fallen in love in 3 different languages.</p>
  </div>
);

const desc5 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I was raised Mormon.</p>
    <p>Now I go to Burning Man.</p>
    <p>I've fallen in love in 3 different languages.</p>
    <p>(I also speak JavaScript)</p>
  </div>
);
const desc6 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I was raised Mormon.</p>
    <p>Now I go to Burning Man.</p>
    <p>I've fallen in love in 3 different languages.</p>
    <p>(I also speak JavaScript)</p>
    <p>I'm curious and passionate.</p>
  </div>
);
const desc7 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I was raised Mormon.</p>
    <p>Now I go to Burning Man.</p>
    <p>I've fallen in love in 3 different languages.</p>
    <p>(I also speak JavaScript)</p>
    <p>I'm curious and passionate.</p>
    <p>And ambitious about new experiences.</p>
  </div>
);
const desc8 = () => (
  <div className="description">
    {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
    <p>I was raised Mormon.</p>
    <p>Now I go to Burning Man.</p>
    <p>I've fallen in love in 3 different languages.</p>
    <p>(I also speak JavaScript)</p>
    <p>I'm curious and passionate.</p>
    <p>And ambitious about new experiences.</p>
    <p>I will make you laugh.</p>
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
          <div style={{textAlign: 'center'}}>I'm a <strong>product developer</strong> and <strong>storyteller</strong> with broad startup experience in tech.</div>
        </div>
        <div className="content">
          {this.getDescription()}
        </div>
        <div className="slider">
          <Slider min={1} max={8} defaultValue={this.state.position} onChange={this.handleChange} handle={handle} />
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

