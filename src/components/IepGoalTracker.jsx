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
            <ScreenGrab autoPlay muted src={iepscreengrab}></ScreenGrab>
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
              <div className="case-study-slide-title">THE PROCESS</div>
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
                    <p>Goals need to be customizable</p>
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
                  <div className="media-vertical">
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
                  <div className="media-vertical">
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
                  <div className="subtitle" style={{marginTop: '2rem'}}>
                    QUICK AND EASY
                  </div>
                  <div className="description-images-subtitle" style={{textAlign: 'left'}}>
                    <p>Only four taps to log an evaluation.</p>
                  </div>
                  <div className="media-horizontal">
                    <div className="example-screenshots">
                      <div>
                        <div className="iphone-frame small">
                          <div className="iep-example my-students"></div>
                        </div>
                        <p style={{fontSize: '1rem', textAlign: 'center'}}>Dashboard  ></p>
                      </div>
                      <div>
                        <div className="iphone-frame small"><div className="iep-example student-detail small"></div></div>
                        <p style={{fontSize: '1rem', textAlign: 'center'}}>Student detail  ></p>
                      </div>
                      <div>
                        <div className="iphone-frame small"><div className="iep-example goal-detail small"></div></div>
                        <p style={{fontSize: '1rem', textAlign: 'center'}}>Goal list  ></p>
                      </div>
                      <div>
                        <div className="iphone-frame small"><div className="iep-example evaluation-2 small"></div></div>
                        <p style={{fontSize: '1rem', textAlign: 'center'}}>Log an evaluation</p>
                      </div>
                      {/*<img alt="iep-goal-creation" className="iep-goal-creation" src={goalCreation} />*/}
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="media-horizontal">
                    <div className="example-screenshots">
                        <div className="description-images-subtitle" style={{textAlign: 'left'}}>
                          <div className="subtitle">
                            FLEXIBLE
                          </div>
                          <p>Goals can have as few or as many subtasks as needed.</p>
                        </div>
                        <div className="iphone-frame">
                          <div className="iep-example goal-creation"></div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="media-horizontal">
                    <div className="example-screenshots">
                        <div className="description-images-subtitle" style={{textAlign: 'left'}}>
                          <div className="subtitle">
                            DATA VISUALIZATION
                          </div>
                          <p>Charts make it easy to track progress over time.</p>
                          <p>Easy to share results with a behavorial analyst or parent.</p>
                        </div>
                        <div className="iphone-frame">
                          <div className="iep-example progress-bars"></div>
                        </div>
                    </div>
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