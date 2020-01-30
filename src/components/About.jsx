import React from 'react';
import './About.scss';
import PieChart from './PieChart';
import Timeline from './Timeline';
import Projects from './Projects';
import Cards from './Cards';
import Slider from './DescriptionSlider';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Navbar from './Navbar';
import jordan_portrait from '../img/jordan_portrait.jpg'



const SocialButtons = () => (
  <div className="header">
    <div className="icon-list">
      <a className="icon linkedin" href="https://www.linkedin.com/in/jordan-england-nelson-05283494/" target="_blank"></a>
      <a className="icon twitter" href="https://twitter.com/jordanenelson" target="_blank"></a>
      {/*<a className="icon github" href="https://github.com/PlayaLink" target="_blank"></a>*/}
    </div>
    <div className="tagline">
      {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
      {/*<p>I try to <span className="blue">understand</span> people, so I can <span className="red">design</span> things they need, and <span className="teal">build</span> things they will use.</p>*/}
      {/*<div>I try to <span className="blue">understand</span> people</div>*/}
      {/*<div>So I can <span className="red">design</span> things they need</div>*/}
      {/*<div>And <span className="teal">build</span> things they will use.</div>*/}
      {/*<p style={{textAlign: 'left'}}>I try to understand people</p>*/}
      {/*<p style={{textAlign: 'center'}}>So I can design things they need</p>*/}
      {/*<p style={{textAlign: 'right'}}>And build things they will use.</p>*/}
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

class About extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="about" style={{overflow: "hidden"}}>
        <div className="row">
          <div className="col col-md-4 p-5">
            <img src={jordan_portrait} alt="Jordan England-Nelson" className="img-fluid rounded-lg"/>
          </div>
          <div className="col col-md-8 p-5">Description</div>
        </div>
        <Timeline />
      </div>
    );
  }
}

export default About;


