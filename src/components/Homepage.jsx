import React from "react";
import "./About.scss";
import Timeline from "./Timeline";
import { DirectLink } from "react-scroll";
import jordan_portrait from "../img/jordan_portrait.jpg";
import glowing_shadow_portrait from "../img/glowing_shadow_portrait.png";
import spotlight_transparent from "../img/spotlight_transparent.png";
import email_icon from "../img/email_icon.svg";
import my_email from "../img/my_email.svg";
import short_t from "../img/short_t.svg";
import { Link } from "react-router-dom";
import workspace_view from "../img/workspace_view.jpg";

const BIG_TEXT = { fontSize: "2rem", lineHeight: "1rem" };

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
            className="icon twitter"
            href="https://twitter.com/jordanenelson"
            target="_blank"
          />
          <div>
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

class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <div
          className="no-gutters bg-black vh-100 hero-image"
          style={{
            backgroundImage: `url(${glowing_shadow_portrait})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="d-flex flex-column justify-content-around flex-fill h-100">
            <div className="d-flex justify-content-around">
              <h3 className="text-white fade-in">Research</h3>
              <h3 className="text-white">Translate</h3>
            </div>
            <div className="d-flex justify-content-around">
              <h3 className="text-white">Design</h3>
              <h3 className="text-white">Build</h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-md-5">
          <div className="col-12 col-md-6 col-lg-4 mt-md-5">
            <p>
              <span className="" style={BIG_TEXT}>
                I am curious about people.
              </span>{" "}
              About their problems. About their motivations. About what's going
              through their head when they're trying to do their job.
            </p>
            <p className="mt-md-4 mb-md-3">
              My experience in product blurs the lines between research,
              development and design. I'm a generalist, yes, but also a&nbsp;
              <span className="font-weight-bold">translator</span> – of user
              needs into product ideas, of ideas into designs, and of designs
              into code.
            </p>
            <div>
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
