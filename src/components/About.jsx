import React from "react";
import "./About.scss";
import Timeline from "./Timeline";
import { DirectLink } from "react-scroll";
import jordan_portrait from "../img/jordan_portrait.jpg";
import tall_t from "../img/tall_t.svg";
import short_t from "../img/short_t.svg";
import { Link } from 'react-router-dom';


const SocialButtons = () => (
  <div className="header">
    <div className="icon-list">
      <a
        className="icon linkedin"
        href="https://www.linkedin.com/in/jordan-england-nelson-05283494/"
        target="_blank"
      />
      <a
        className="icon twitter"
        href="https://twitter.com/jordanenelson"
        target="_blank"
      />
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
    <p>
      I've spent the last 3 years focused on software development, I don't
      really care about code, per se. I only care about the things I can create
      with code.
    </p>
    <p>
      I spent my twenties racking up humanities degrees, learning different
      languages, and hitch-hiking around Europe.
    </p>
    <p>
      As a journalist, I got to ride to Catalina on an amphibious car, sat in
      Elon Musk's space ship and toured the Boeing space facility that built the
      world's most powerful space telescope.
    </p>
    <p>
      My career in tech started as a content marketer, then digital marketing,
    </p>
  </div>
);

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <div className="row d-flex justify-content-center mt-md-5">
          <div className="col-6 mb-5 mb-md-0 col-md-3 col-lg-2 mr-lg-4">
            <img
              src={jordan_portrait}
              alt="Jordan England-Nelson"
              className="img-fluid rounded-lg d-none d-md-block"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/*<p>*/}
            {/*I've worked up and down the product stack, from design research to writing code.*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*I'm a T-shaped product designer. Except my T looks more like this{" "}*/}
            {/*<span>*/}
            {/*<img src={short_t} className="img-fluid" />*/}
            {/*</span>{" "}*/}
            {/*than this{" "}*/}
            {/*<span>*/}
            {/*<img src={tall_t} className="img-fluid" />*/}
            {/*</span>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*A short T is nothing to be ashamed of. There are plenty of attractive,*/}
            {/*young companies out there who gladly hire generalists.*/}
            {/*</p>*/}
            <img
              src={jordan_portrait}
              alt="Jordan England-Nelson"
              className="rounded-lg float-left mr-3 d-md-none"
              style={{width: "45%"}}
            />
            <p>

                <span className="" style={{ fontSize: "1.5rem" }}>
                  I never identified as a technical person.
                </span>{" "}
              Until I realized JavaScript is just a language – a way to
              transmit ideas from one system to another.
            </p>
            <p>
              Design, too, is a language. We listen and observe people. We try
              to interpret their needs, goals and behaviors. We translate what
              they say and do into what we think they mean and want, so that
              our response – our product – is relevant and helpful.
            </p>
            {/*<p>*/}
            {/*I know<span className="font-italic">&nbsp;generalist</span> is a*/}
            {/*dirty word, but it seems to fit. We*/}
            {/*have to listen, to observe, to imagine and to build.*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*I've Whether it’s distilling a complex topic into a short newspaper*/}
            {/*story or explaining a user's problem to a development team, a*/}
            {/*good translator groks the essence of the idea and transforms it*/}
            {/*into something the other side understands.*/}
            {/*</p>*/}
            <p>
              My experience in product blurs the lines between research,
              development and design. I'm a generalist, yes, but also a translator – of user needs into
              product ideas, of ideas into designs, and of designs into code.
            </p>
            <div>
              <SocialButtons />
            </div>
          </div>
        </div>
        <Timeline />
      </div>
    );
  }
}

export default About;
