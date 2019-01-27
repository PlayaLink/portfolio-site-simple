import React from 'react';
import './Home.scss';
import PieChart from './PieChart';
import Timeline from './Timeline';
import Projects from './Projects';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const Header = () => (
  <div className="header">
    <div className="title">Jordan England-Nelson</div>
    <div className="tagline">
      <p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>
      {/*<p>I try to <span className="blue">understand</span> people, so I can <span className="red">design</span> things they need, and <span className="teal">build</span> things they will use.</p>*/}
      {/*<div>I try to <span className="blue">understand</span> people</div>*/}
      {/*<div>So I can <span className="red">design</span> things they need</div>*/}
      {/*<div>And <span className="teal">build</span> things they will use.</div>*/}
      <p style={{textAlign: 'left'}}>I try to understand people</p>
      <p style={{textAlign: 'center'}}>So I can design things they need</p>
      <p style={{textAlign: 'right'}}>And build things they will use.</p>
      {/*<p style={{textAlign: 'left'}}>I try to <span className="blue">understand</span> people</p>*/}
      {/*<p style={{textAlign: 'center'}}>So I can <span className="red">design</span> things they need</p>*/}
      {/*<p style={{textAlign: 'right'}}>And <span className="teal">build</span> things they will use.</p>*/}
    </div>
  </div>
);

const Summary = () => (
  <div className="summary">
    <div className="subtitle">Not your average tech bro.</div>
    <p>I've spent the last 3 years focused on software development, I don't really care about
      code, per se. I only care about the things I can create with code.
    </p>
    <p>
      I spent my twenties racking up humanities degrees, learning different languages, and
      hitch-hiking around Europe.
    </p>
    <p>
      As a journalist, I got to ride to Catalina on an amphibious car, sat in Elon Musk's
      space ship and toured the Boeing space facility that built the world's most powerful space telescope.
    </p>
    <p>
      My career in tech started as a content marketer, then digital marketing,
    </p>
  </div>
);

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      pulseJournalism: false,
      pulseMarketing: false,
      pulseScrum: false,
      pulseIep: false,
    }
  }

  componentDidMount () {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  journalismClicked = () => {
    this.setState({pulseJournalism: true});
  };

  marketingClicked = () => {
    this.setState({pulseMarketing: true});
  };

  scrumClicked = () => {
    this.setState({pulseScrum: true});
  };

  productClicked = () => {
    this.setState({pulseIep: true});
  };

  render () {
    return (
      <div className="home">
        <Header/>
        <PieChart
          journalismClicked={this.journalismClicked}
          marketingClicked={this.marketingClicked}
          scrumClicked={this.scrumClicked}
          productClicked={this.productClicked}
        />
        <Timeline
          pulseJournalism={this.state.pulseJournalism}
          pulseMarketing={this.state.pulseMarketing}
        />
        <Projects
          pulseScrum={this.state.pulseScrum}
          pulseIep={this.state.pulseIep}
        />
      </div>
    );
  }
}

export default Home;


