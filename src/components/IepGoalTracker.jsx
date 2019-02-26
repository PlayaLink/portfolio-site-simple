import React from 'react';
import './IepGoalTracker.scss';
import iPhoneFrame from '../img/iphone6_frame_black.png';
import iepscreengrab from '../img/iepscreengrab.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iep5 from '../img/iep_example_5.png';
import iep10 from '../img/iep_example_10.png';

import ProjectCard from './ProjectCard';
import styled, { css } from 'styled-components';
import Slider from 'react-slick/lib';

const HeaderImage = styled.div`
    width: 26rem;
    height: 26rem;
    margin: 0 2rem;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
const IphoneFrame = styled.div`
    width: 11rem;
    height: 23rem;
    margin: 0 2rem;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
`;
const ScreenGrab = styled.video`
    width: 10.1rem;
    height: 23rem;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class IepGoalTracker extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        {/*HEADER*/}
        <div className="case-study-section white-background">
          <ProjectCard
            title="IEP Goal Tracker"
            subtitle="Streamlining data collection in the classroom"
            description={ [
              <p>The Orange County Dept of Education's main special needs facility was looking for a better way to track its students' progress.</p>,
              <p>Their system relied on paper spreadsheets and manual data entry.</p>,
              "The school's director wanted to find a better way."
            ] }
          />
          <IphoneFrame img={iPhoneFrame}>
            <ScreenGrab autoPlay={true} src={iepscreengrab}></ScreenGrab>
          </IphoneFrame>
        </div>
        {/*CHALLENGES*/}
        <div className="case-study-section teal-background">
          <div className="carousel">
            <div className="case-study-slide-title-container">
              <div className="case-study-slide-title" style={{marginBottom: 0}}>Context</div>
            </div>
            <Slider {...sliderSettings}>
              <div>
                <div className="case-study-slide-content" >
                  {/*<div className="subtitle">*/}
                    {/*We were playing catch up*/}
                  {/*</div>*/}
                  <div className="description">
                    <p>The Orange County Dept of Education's main special needs facility was looking for a better way to track its students' progress.</p>
                    <p>Their system relied on paper spreadsheets and manual data entry.</p>
                    <p>The school's director wanted to find a better way.</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/*THE PROBLEM*/}
        <div className="case-study-section red-background">
          <div className="carousel">
            <div className="case-study-slide-title-container">
              <div className="case-study-slide-title">THE PROBLEM</div>
            </div>
            <Slider {...sliderSettings}>

              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    REQUIREMENTS GATHERING
                  </div>
                  <div className="description">
                    <p>Interviewed 1 administrator, 3 behavior analysts, 3 teachers and 2 parents.</p>
                    <p>Reviewed IEPs and evaluation forms used at 3 Orange County schools.</p>
                    <p>Researched other goal tracking software that was already available.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    OBSERVATIONS
                  </div>
                  <div className="description">
                    <p>Teachers see goal tracking as a bureaucratic time suck.</p>
                    <p>Paper evaluations require a clipboard (or desk) and two hands.</p>
                    <p>Older educators aren't very tech-savvy.</p>
                    <p>Goal descriptions are lengthy and require a lot of typing</p>
                    <p>Behavioral analysts manage IEPs and are more invested in a tech solution.</p>
                    <p>There are no standards for how to track goals, even in the same county.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    DESIGN PRINCIPLES
                  </div>
                  <div className="description">
                    <p>Simple to use</p>
                    <p>Goals need to be cusomizable</p>
                    <p>Logging evaluations needs to be quick and painless</p>
                    <p>Ability to log evaluations while walking around classroom</p>
                    <p>Ability to enter lengthy goals and student profiles on a desktop</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    QUOTES
                  </div>
                  <div className="description-images">
                    <div className="quote-container">
                      <p className="quote">"The problem is more than 'lack of technology'.... There is no process for tracking student progress... and very little oversight for teachers."</p>
                      <p className="attribution">
                        <div>–Jenny, Special Education Department Director</div>
                      </p>
                    </div>
                    <div className="quote-container">
                      <p className="quote">"I'm like the nanny state.... I have to hound the teachers to get me their evaluations."</p>
                      <p className="attribution">
                        <div>–Ross, Applied Behavorial Analyst</div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    ARTIFACTS
                  </div>
                  <div className="description-images">
                    <div className="iep-example-forms">
                      {/*<div className="iep-example five"></div>*/}
                      {/*<div className="iep-example ten"></div>*/}
                      <img alt="iep" className="iep-example five" src={iep5} />
                      <img alt="iep" className="iep-example ten" src={iep10} />
                    </div>
                  </div>
                  <div className="description-images-subtitle">
                    <p>Paper evaluations only allow goals to be broken down into 5 or 10 tasks.</p>
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>

        {/*THE SOLUTION*/}
        <div className="case-study-section blue-background">
          <div className="carousel">
            <div className="case-study-slide-title-container">
              <div className="case-study-slide-title" style={{marginBottom: 0}}>THE SOLUTION</div>
            </div>
            <Slider {...sliderSettings}>
              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    QUICK AND EASY
                  </div>
                  <div className="description-images">
                    <IphoneFrame img={iPhoneFrame}>
                      <ScreenGrab autoPlay={true} src={iepscreengrab}></ScreenGrab>
                    </IphoneFrame>
                  </div>
                  <div className="description-images-subtitle">
                    <p>Paper evaluations only allow goals to be broken down into 5 or 10 tasks.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="title">
                    INSIGHTS
                  </div>
                  {/*<div className="subtitle">*/}
                    {/*OBSERVATIONS*/}
                  {/*</div>*/}
                  <div className="description">
                    <p>Live polling is a separate product category in which POPin cannot compete on price nor functionality</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>But the project still has value: setting up real-time data pushing will improve the overall POPin experience</li>
                    </ul>
                    <p>Live comment moderation only needed for events with thousands of participants</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>Database query showed that average join count for POPin surveys is less than 300</li>
                    </ul>
                    <p>App fatigue is a big fear for HR/internal comms teams</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>They don't want to force employees to download another app or create another account just to participate in a quick poll</li>
                    </ul>
                    <p>Live Participation vs Live Presentation:</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>Will participants submit answers during the event or will results of closed poll be consumed live?</li>
                      <li>Phase 2 of discovery needs to focus on this question</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="title">
                    DESIGN PRINCIPLES
                  </div>
                  <div className="description">
                    <p>Scope should be limited</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>More observation needed to determine if users want to run polls live or display POPin results in a live setting</li>
                      <li>POPin Live should be considered a marketing/sales enablement tool in the meantime</li>
                    </ul>
                    <p>Poll software must integrate seamlessly into existing presentation workflow</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>If running a live poll interrupts the flow of a PowerPoint deck or WebEx meeting, presentors will shy away from it</li>
                    </ul>
                    <p>Ability to respond to poll without creating an account</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>Join code on marketing site?</li>
                      <li>Text message?</li>
                    </ul>
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </div>

    );
  }
}

export default IepGoalTracker;