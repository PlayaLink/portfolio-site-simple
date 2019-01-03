import React from 'react'
import './PieChart.scss'


class PieChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reverse: false,
      animate: false
    }
  }
  componentDidMount() {
    this.animate();
  }

  animate = () => {
    this.setState({animate: true})
  }

  reverse() {
    console.log("reverse!");
    this.setState({
      reverse: !this.state.reverse,
      animate: !this.state.animate
    });
  }
  render () {
    return (
      <figure>
        <figcaption>SVG PIE Chart with CSS animation</figcaption>
        <svg viewBox="0 0 63.6619772368 63.6619772368" onClick={() => this.reverse()}>
          <circle className={`pie1 ${this.state.reverse ? 'reverse' : ''} ${this.state.animate ? 'animate' : ''}`} cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
          <circle className={`pie2 ${this.state.reverse ? 'reverse' : ''} ${this.state.animate ? 'animate' : ''}`} cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
          <circle className={`pie3 ${this.state.reverse ? 'reverse' : ''} ${this.state.animate ? 'animate' : ''}`} cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
          <circle className={`pie4 ${this.state.reverse ? 'reverse' : ''} ${this.state.animate ? 'animate' : ''}`} cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
        </svg>
      </figure>
    );
  }
}

export default PieChart;