import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import PieChart from './PieChart';
import Timeline from './Timeline';
import Projects from './Projects';

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
    this.iepRef = React.createRef();
    this.prodRef = React.createRef();
    this.journalismRef = React.createRef();
    this.scrumRef = React.createRef();
    this.marketingRef = React.createRef();
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
          prodRef={this.prodRef}
          journalismRef={this.journalismRef}
          scrumRef={this.scrumRef}
          marketingRef={this.marketingRef}
        />
        <Timeline
          iepRef={this.iepRef}
          prodRef={this.prodRef}
          marketingRef={this.marketingRef}
          scrollToRef={this.scrollToRef}
        />
        <Projects
          iepRef={this.iepRef}
          scrumRef={this.scrumRef}
        />
      </div>
    );
  }
}

export default Home;


