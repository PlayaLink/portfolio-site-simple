import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import PieChart from './PieChart'
import Timeline from './Timeline'

const Header = () => (
  <div className="header">
    <div className="title">Jordan England-Nelson</div>
    <div className="tagline">
      <p style={{textAlign: 'left'}}>I like to <span className="blue">understand</span> people</p>
      <p style={{textAlign: 'center'}}>So I can <span className="red">design</span> things they need</p>
      <p style={{textAlign: 'right'}}>And <span className="teal">build</span> things they use.</p>
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

const BarCharts = () => (
  <div className="bar-charts">
    <div className="bar journalism">
      <span className="title">Journalism</span>
    </div>
    <div className="bar engineering">
      <span className="title">Software Engineering</span>
    </div>
    <div className="bar product">
      <span className="title">Product</span>
    </div>
  </div>
)

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="home">
        <Header/>
        <PieChart/>
        <Timeline />
        <Link to={ process.env.PUBLIC_URL + '/timeline' }>Timeline</Link>
      </div>
    );
  }
}

export default Home;


