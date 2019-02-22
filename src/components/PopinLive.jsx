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

  render () {
    return (
      <div className="">
        <div className="case-study-section">
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
        <div className="case-study-section red-background">
          <div className="case-study-slide">
            <div className="title">
              Challenges
            </div>
            <div className="subtitle">

            </div>
            <div className="description">
              <p>The live polling space was crowded</p>
              <p>Slido's product offering was robust</p>
              <p>Our resources were limited</p>
              <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                <li><p style={{marginTop: '0rem'}}>Our product & engingeering team was less than 15 people</p></li>
                <li>Leadership had given us 3 months to complete the feature</li>
              </ul>
              <p>POPin had  little insight about its users</p>
              <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                <li><p style={{marginTop: '0rem'}}>No user personas had ever been created</p></li>
                <li><p style={{marginTop: '0rem'}}>Only 20 user interviews had been conducted over the course of 4 years, and those interviews were only with <strong>survey creators</strong></p></li>
                <li>No one had ever interviewed <strong>survey participants</strong> about their experience using the software</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="case-study-section teal-background">
          <div className="case-study-slide">
            <div className="title">
              Process
            </div>
            <div className="subtitle">
              STEP 1
            </div>
            <div className="description">
              <p>I spent one week lining up interviews and with POPin customers who had expressed interest in a live polling.</p>
              <p>Slido's product offering was robust</p>
              <p>Our resources were limited</p>
              <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                <li><p style={{marginTop: '0rem'}}>Our product & engingeering team was less than 15 people</p></li>
                <li>Leadership had given us 3 months to complete the feature</li>
              </ul>
              <p>POPin had  little insight about its users</p>
              <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                <li><p style={{marginTop: '0rem'}}>No user personas had ever been created</p></li>
                <li><p style={{marginTop: '0rem'}}>Only 20 user interviews had been conducted over the course of 4 years, and those interviews were only with <strong>survey creators</strong></p></li>
                <li>No one had ever interviewed <strong>survey participants</strong> about their experience using the software</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="case-study-section blue-background">
          <div className="carousel">
            <Slider {...sliderSettings}>
              <div>
                <div className="case-study-slide">
                  <div className="title">
                    Process
                  </div>
                  <div className="subtitle">
                    STEP 1
                  </div>
                  <div className="description">
                    <p>I spent one week lining up interviews and with POPin customers who had expressed interest in a live polling.</p>
                    <p>Slido's product offering was robust</p>
                    <p>Our resources were limited</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                      <li><p style={{marginTop: '0rem'}}>Our product & engingeering team was less than 15 people</p></li>
                      <li>Leadership had given us 3 months to complete the feature</li>
                    </ul>
                    <p>POPin had  little insight about its users</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                      <li><p style={{marginTop: '0rem'}}>No user personas had ever been created</p></li>
                      <li><p style={{marginTop: '0rem'}}>Only 20 user interviews had been conducted over the course of 4 years, and those interviews were only with <strong>survey creators</strong></p></li>
                      <li>No one had ever interviewed <strong>survey participants</strong> about their experience using the software</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="case-study-slide">
                  <div className="title">
                    Process
                  </div>
                  <div className="subtitle">
                    STEP 1
                  </div>
                  <div className="description">
                    <p>I spent one week lining up interviews and with POPin customers who had expressed interest in a live polling.</p>
                    <p>Slido's product offering was robust</p>
                    <p>Our resources were limited</p>
                    <ul className="white" style={{paddingLeft:'2rem', fontSize: '1rem'}}>
                      <li><p style={{marginTop: '0rem'}}>Our product & engingeering team was less than 15 people</p></li>
                      <li>Leadership had given us 3 months to complete the feature</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>

    );
  }
}

export default PopinLive;