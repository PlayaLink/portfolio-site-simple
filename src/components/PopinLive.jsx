import React from 'react';
import './PopinLive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projection from '../img/popin_projector_screen.png';
import ProjectCard from './ProjectCard';
import Slide from './Slide';
import ProblemCarousel from './ProblemCarousel';
import SolutionCarousel from './SolutionCarousel';
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

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class PopinLive extends React.Component {
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
            title="POPin Live"
            subtitle="Need finding for live polling feature"
            description={ [
              <p>The POPin sales team was losing deals to Slido, which offers live polling for conferences and events.</p>,
              <p>POPin leadership decided to feature match Slido by creating its own live polling tool.</p>,
              <p>I lead the need finding efforts that set the scope of the project and informed the POPin Live designs.</p>,
            ] }
          />
          <HeaderImage img={projection}/>
        </div>
        {/*CHALLENGES*/}
        <div className="case-study-section red-background">
          <div className="carousel">
            <div className="case-study-slide-title-container">
              <div className="case-study-slide-title">Challenges</div>
            </div>
            <Slider {...sliderSettings}>
              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    We were playing catch up
                  </div>
                  <div className="description">
                    {/*<p>The live polling space was crowded</p>*/}
                    {/*<p>Slido's product offering was robust</p>*/}
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                      <li><p>The live polling space was crowded</p></li>
                      <li><p style={{marginTop: '0rem'}}>Slido's product offering was robust</p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    Limited Resources
                  </div>
                  <div className="description">
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                      <li><p>Our product & engingeering team was less than 15 people</p></li>
                      <li><p style={{marginTop: '0rem'}}>Leadership had given us three months to design, build and ship the feature</p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    Limited information about our users
                  </div>
                  <div className="description">
                    {/*<p>No user personas had ever been created</p>*/}
                    {/*<p>Only 20 user interviews had been conducted over the course of 4 years, and those interviews were only with <strong>survey creators</strong></p>*/}
                    {/*<p>No one had ever interviewed <strong>survey participants</strong> about their experience using the software</p>*/}
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                      <li><p>No user personas had ever been created for POPin users</p></li>
                      <li><p style={{marginTop: '0rem'}}>Only 20 user interviews had been conducted over the course of four years, and those interviews were only with <strong>survey creators</strong></p></li>
                      <li>No one had ever interviewed <strong>survey participants</strong> about their experience using the software</li>
                    </ul>

                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/*PROCESS*/}
        <div className="case-study-section teal-background">
          <div className="carousel">
            <div className="case-study-slide-title-container">
              <div className="case-study-slide-title">Process</div>
            </div>
            <Slider {...sliderSettings}>

              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    WEEK 1
                  </div>
                  <div className="description">
                    <p>Competitive analysis of top players in the live polling space</p>
                    <p>Scheduled interviews for the following week with 12 customers who had expressed interest in live polling.</p>
                    <p>Reviewed the notes from the 20+ interviews that had been already conducted.</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li><p style={{marginTop: '0rem'}}>Started creating personas for our existing user base</p></li>
                    </ul>

                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    WEEK 2
                  </div>
                  <div className="description">
                    <p>Conducted nine 30-minute interviews by video screenshare and three 45-minute interviews, in person, at users' desks.</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>25% of time spent talking about their day-to-day duties and goals</li>
                      <li><p>25% of time spent discussing their processes around running meetings and town halls</p></li>
                      <li>50% of time spent observing them using the POPin tool</li>
                    </ul>
                    <p>Flew to San Francisco to attend a Slido educational meetup</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>Listened as a room full of Slido customers discussed pain points, use cases and parts they love about Slido</li>
                      <li><p>Glimpsed Slido's product roadmap for upcoming quarter</p></li>
                      <li>Interviewed three Slido super users, including the woman who runs Uber's monthly town hall, with 20,000 participants</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-study-slide-content">
                  <div className="subtitle">
                    WEEK 3
                  </div>
                  <div className="description">
                    <p>Engineering team finished alpha version of Slido clone</p>
                    <p>Conducted usability tests on alpha release</p>
                    <p>Brought more design insights back to our PM</p>
                    {/*<ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>*/}
                      {/*<li>Listened as a room full of Slido customers discussed pain points, use cases and parts they love about Slido</li>*/}
                      {/*<li><p>Glimpsed Slido's product roadmap for upcoming quarter</p></li>*/}
                      {/*<li>Interviewed three Slido super users, including the woman who runs Uber's monthly town hall, with 20,000 participants</li>*/}
                    {/*</ul>*/}
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>

        {/*RESULTS*/}
        <div className="case-study-section blue-background">
          <div className="carousel">
            <Slider {...sliderSettings}>

              <div>
                <div className="case-study-slide-content">
                  <div className="title">
                    OBSERVATIONS
                  </div>
                  {/*<div className="subtitle">*/}
                    {/*OBSERVATIONS*/}
                  {/*</div>*/}
                  <div className="description">
                    <p><strong>User Expectations: </strong>A live poll/survey should integrate seamlessly with their presentation software (e.g. PowerPoint)</p>
                    <p><strong>Usability:</strong> Users struggled with sharing a POPin and toggling between presentation/edit/participation modes</p>
                    <p><strong>Pain Point:</strong> Event moderators have no way of following up with employees whose questions were not addressed during a live event</p>
                    <p><strong>Pain Point:</strong> Duplicate responses are a problem no matter the size of the participant pool</p>
                    <p><strong>Pain Point:</strong> The 'first mover' bias</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>The first responses get the first votes, which creates a snowball effect that drowns out later responses</li>
                    </ul>
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

export default PopinLive;