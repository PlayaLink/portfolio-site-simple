import React from "react";
import "./About.scss";
import Timeline from "./Timeline";
import { DirectLink } from "react-scroll";
import jordan_portrait from "../img/jordan_portrait.jpg";
import email_icon from "../img/email_icon.svg";
import my_email from "../img/my_email.svg";
import short_t from "../img/short_t.svg";
import { Link } from "react-router-dom";

class SocialButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmail: false
    };
  }
  toggleEmail = () => {
    this.setState({ showEmail: !this.state.showEmail });
  };
  render() {
    const { showEmail } = this.state;
    return (
      <div className="header">
        <div className="icon-list">
          <a
            className="icon linkedin"
            href="https://www.linkedin.com/in/jordan-england-nelson-05283494/"
            target="_blank"
          />
          <a
            className="icon twitter mx-2"
            href="https://twitter.com/jordanenelson"
            target="_blank"
          />
          <div className="icon my-email">
            <img
              onMouseEnter={this.toggleEmail}
              onMouseLeave={this.toggleEmail}
              src={showEmail ? my_email : email_icon}
            />
          </div>
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
  }
}

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
      <div className="about bg-black pb-5 flex-fill w-100">
        <div style={{height: "3rem"}} />
        <div className="row d-flex justify-content-center pt-md-5 px-3 pb-5 pb-md-2flex-fill w-100">
          <div className="d-none d-md-block col-6 mb-5 mb-md-0 col-md-6 col-lg-3 mr-lg-4">
            <img
              src={jordan_portrait}
              alt="Jordan England-Nelson"
              className="img-fluid rounded-lg d-none d-md-block"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center">
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

            <div className="d-flex flex-column text-white">
              <p className="pt-5 p-md-0 mt-1">
                <img
                  src={jordan_portrait}
                  alt="Jordan England-Nelson"
                  className="rounded-lg float-left mr-3 d-md-none pt-2 p-md-0"
                  style={{ width: "45%" }}
                />
                <div>I never identified as a technical person.</div>
                I was a humanities guy – obsessed with French and
                Spanish.
              </p>
              <p>
                And then I realized JavaScript is just a language – a way to
                transmit ideas from one system to another.
              </p>
              <p>
                Design, too, is a language. We listen and observe people. We try
                to interpret their needs, goals and behaviors. We translate what
                they say and do into what we think they mean and want, so that
                our response – our product – is relevant and helpful.
              </p>
              <p>
                Whether it’s distilling a complex topic into a short newspaper
                story or explaining a user's problem to a development team, a
                good translator groks the essence of the idea and transforms it
                into something the other side understands.
              </p>
              <div>
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
        <Timeline />
      </div>
    );
  }
}

export default About;
