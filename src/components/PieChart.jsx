import React from 'react'
import './PieChart.scss'


class PieChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hidePie1: false,
      hidePie2: false,
      hidePie3: false,
      hidePie4: false,
      loadLabels: false,
      }
  }

  componentDidMount = () => {
    this.setTimer();
  };

  componentWillUnmount = () => {
    this.clearTimer();
  };

  setTimer = () => {
    if (this.timerHandle) {
      // Exception?
      return;
    }
    // Remember the timer handle
    this.timerHandle = setTimeout(() => {
      this.setState({loadLabels: true})
      this.timerHandle = 0;
    }, 1000);
  };

  clearTimer = () => {
    // Is our timer running?
    if (this.timerHandle) {
      // Yes, clear it
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  };

  hide = (slice) => {
    this.setState({[slice]: !this.state[slice]});
  };

  render () {
    return (
      <figure>
        <svg viewBox="0 0 63.6619772368 63.6619772368">
          <circle onClick={() => this.hide('hidePie1')} className={`pie1 ${this.state.hidePie1 ? 'hide' : ''}`} cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
          <text className={`pie-label ${this.state.loadLabels ? 'animate' : ''}`} x="45" y="20">Journalism</text>
          <circle onClick={() => this.hide('hidePie2')} className={`pie2 ${this.state.hidePie2 ? 'hide' : ''}`} cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
          <text className={`pie-label ${this.state.loadLabels ? 'animate' : ''}`} x="40" y="55">Inbound marketing</text>
          <circle onClick={() => this.hide('hidePie3')} className={`pie3 ${this.state.hidePie3 ? 'hide' : ''}`} cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
          <circle onClick={() => this.hide('hidePie4')} className={`pie4 ${this.state.hidePie4 ? 'hide' : ''}`} cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
          <text className={`pie-label ${this.state.loadLabels ? 'animate' : ''}`} x="5" y="62">Scrum/Agile</text>
          <text className={`pie-label ${this.state.loadLabels ? 'animate' : ''}`} x="-20" y="30">Product & Engineering</text>
        </svg>
        <div className="background-image"></div>
      </figure>
    );
  }
}

export default PieChart;