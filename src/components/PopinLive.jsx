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
                    <p>Conducted nine 30-minute interviews by video screenshare and three 45-minute interviews, in person, at users' desk.</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>25% of time spent talking about their day-to-day duties and goals</li>
                      <li><p>25% of time spent discussing their processes around running meetings and town halls</p></li>
                      <li>50% of time spent observing them use POPin tool</li>
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
                    <p>Conducted usability tests with alpha release</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>Listened as a room full of Slido customers discussed pain points, use cases and parts they love about Slido</li>
                      <li><p>Glimpsed Slido's product roadmap for upcoming quarter</p></li>
                      <li>Interviewed three Slido super users, including the woman who runs Uber's monthly town hall, with 20,000 participants</li>
                    </ul>
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>

        {/*PROCESS*/}
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
                    <p>Users are concerned about toggling between presentation software (i.e. PowerPoint) and the live poll when presenting in front of a large audience</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>Could be a deal breaker if too much friction</li>
                    </ul>
                    <p>Live comment moderation is only needed when there are hundreds of responses (and thousands of participants)</p>
                    <p>Town hall organizers want a way to follow up with employees whose questions were not addressed during live event</p>
                    <p>The 'first mover' bias:</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>The first responses get the first votes, which creates a snowball effect that drowns out later responses</li>
                    </ul>
                    <p>Duplicate responses are a problem no matter the size of participant pool</p>
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
                    <p>Live moderation would be costly to build and not used by most existing POPin users</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>DB query showed that average join count for POPin surveys is less than 300</li>
                    </ul>
                    <p>Live view must integrate seamlessly into existing workflow (i.e., PowerPoint)</p>
                    <p>NEED TO DISCOVER:</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem', marginTop: '-1rem'}}>
                      <li>Will participation occur in a live context or will results of closed poll be consumed live?</li>
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