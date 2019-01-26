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
      <p style={{textAlign: 'left'}}>I try to <span className="blue">understand</span> people</p>
      <p style={{textAlign: 'center'}}>So I can <span className="red">design</span> things they need</p>
      <p style={{textAlign: 'right'}}>And <span className="teal">build</span> things they will use.</p>
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
      pulseJournalism: false
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
    console.log("journalismClicked");
    this.setState({pulseJournalism: true});
  }

  scrollToRef = (ref) => {
    console.log("ref: ", ref);
    console.log("this.props: ", this.props);
    debugger;
    this.props[ref].current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth'})
  };

  render () {
    return (
      <div className="home">
        <Header/>
        <PieChart
          journalismClicked={this.journalismClicked}
        />
        <Timeline
          pulseJournalism={this.state.pulseJournalism}
        />
        <Projects />
      </div>
    );
  }
}

export default Home;


