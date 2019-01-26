import React from 'react';
import './PieChart.scss';
import { Link } from 'react-scroll';

class PieChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hidePie1: false,
      hidePie2: false,
      hidePie3: false,
      hidePie4: false,
      loadLabels: false
    };
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
      this.setState({ loadLabels: true });
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
    this.setState({ [ slice ]: !this.state[ slice ] });
  };

  handleClick = (sliceToHide, callback) => {
    this.setState({ [ sliceToHide ]: !this.state[ sliceToHide ] });
    callback();
  };

  render () {
    const { journalismClicked, marketingClicked, scrumClicked, productClicked } = this.props;
    return (
      <figure>
        <svg viewBox="0 0 63.6619772368 63.6619772368">
          <circle
            className={ `pie1 ${this.state.hidePie1 ? 'hide' : ''}` }
            cx="31.8309886184"
            cy="31.8309886184"
            r="15.9154943092" />
          <text
            className={ `pie-label pie-label-1 ${this.state.loadLabels
              ? 'animate'
              : ''} ${this.state.hidePie1 ? 'hide' : ''}` }
            x="45"
            y="20">
            <Link
              onClick={ () => this.handleClick('hidePie1', journalismClicked) }
              delay={1000}
              activeClass="active"
              to="journalism"
              spy={ true }
              smooth={ true }
              offset={-50}
              duration={ 500 }>
              Journalism
            </Link>
          </text>

          <circle
            className={ `pie2 ${this.state.hidePie2 ? 'hide' : ''}` }
            cx="31.8309886184"
            cy="31.8309886184"
            r="15.9154943092" />
          <text
            className={ `pie-label pie-label-2 ${this.state.loadLabels
              ? 'animate'
              : ''} ${this.state.hidePie2 ? 'hide' : ''}` }
            x="40"
            y="55">
            <Link
              onClick={ () => this.handleClick('hidePie2', marketingClicked) }
              delay={ 1000 }
              activeClass="active"
              to="marketing"
              spy={ true }
              offset={-50}
              smooth={ true }
              duration={ 500 }>
              Product marketing
            </Link>
          </text>

          <circle
            className={ `pie3 ${this.state.hidePie3 ? 'hide' : ''}` }
            cx="31.8309886184"
            cy="31.8309886184"
            r="15.9154943092" />
          <circle
            className={ `pie4 ${this.state.hidePie4 ? 'hide' : ''}` }
            cx="31.8309886184"
            cy="31.8309886184"
            r="15.9154943092" />
          <text
            className={ `pie-label pie-label-3 ${this.state.loadLabels
              ? 'animate'
              : ''} ${this.state.hidePie3 ? 'hide' : ''}` }
            x="5"
            y="62">
            <Link
              onClick={ () => this.handleClick('hidePie3', scrumClicked) }
              delay={ 1000 }
              activeClass="active"
              to="scrum"
              spy={ true }
              smooth={ true }
              duration={ 500 }>
              Scrum/Agile
            </Link>
          </text>

          <text
            className={ `pie-label pie-label-4 ${this.state.loadLabels
              ? 'animate'
              : ''} ${this.state.hidePie4 ? 'hide' : ''}` } x="-20" y="30">
            <Link
              onClick={ () => this.handleClick('hidePie4', productClicked) }
              activeClass="active"
              to="iep"
              spy={ true }
              smooth={ true }
              delay={ 1000 }
              offset={-100}
              duration={ 500 }>
              Product/Engineering/UX
            </Link>
          </text>
        </svg>
        <div className="background-image"></div>
      </figure>
    );
  }
}

export default PieChart;