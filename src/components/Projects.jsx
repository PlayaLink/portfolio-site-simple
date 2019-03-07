import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';
import { Element } from 'react-scroll';
import iepCaseStudy from '../img/Case_Study_IEP_Goal_Tracker.pdf';
import popinLiveCaseStudy from '../img/Case_Study_POPin_Live.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Projects extends React.Component {
  constructor (props) {
    super(props);
    this.iepRef = React.createRef();
    this.scrumRef = React.createRef();
  }

  render () {
    const { pulseScrum, pulseIep } = this.props;
    return (
      <div style={{maxWidth: '100%'}}>
        <div className="section-title projects">Portfolio</div>
        <div className="projects">
          <Element name="iep" className={ `iep-goal-tracker ${pulseIep ? 'pulse' : ''}` }>
            <div className="images">
              <div className="phone evaluations" />
              <div className="phone login" />
              <div className="phone students" />
            </div>
            <ProjectCard
              title="Special Ed Goal Tracker"
              subtitle="Streamlining data collection in the classroom"
              // link="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
              download={iepCaseStudy}
              cta="Case Study"
              description={ [
                "Teachers weren't tracking goals properly because paper spreadsheets are a hassle.",
                <p>A tech-savvy principal wanted to change that.</p>,
                'The result was a mobile-friendly web app that makes it easy to log evaluations and track progress over time.'
              ] }
            />
          </Element>

          <div className="popin-live">
            <ProjectCard
              title="From Feature Validation to User Personas"
              subtitle="Turning a feature request into a tool for user insights"
              download={popinLiveCaseStudy}
              cta="Case Study"
              description={ [
                'POPin is an Irvine-based startup that thought copying their competitors would increase sales.',
                <p>Executive buy-in for a copycat feature created an opportunity for conducting broader user research.</p>,
                'Design research for the feature yielded user personas for the core product.'] }
            />
            <div className="images reverse-order">
              <div className="projection-screen" />
            </div>
          </div>

          <div className="street-art-talks">
            <div className="images">
              <div className="murals">
                <div className="thumbnail influence"/>
                <div className="thumbnail elephants"/>
                <div className="thumbnail bloom"/>
              </div>
              <div className="street-art-talks-phone" />
              <div className="murals">
                <div className="thumbnail peace"/>
                <div className="thumbnail faces"/>
                <div className="thumbnail abuelita"/>
              </div>
            </div>
            <ProjectCard
              title="Street Art Talks"
              subtitle="Text-based audio tour of street art in DTLA"
              link="http://www.streetarttalks.com"
              cta="Visit Site"
              description={ [
                'Street art is more approachable than art in a museum. But wouldn\'t it be nice to know more about the art and the person who created it?',
                <p />,
                "",
                <p />,
                'Stencils tagged near prominent murals in DTLA\'s arts district will instruct passersby to text a code to a Twilio phone number. ',
                <p />,
                'An automated text response includes a url with information about the mural and a link to the artist\'s Instagram.'] }
            />
          </div>

          { /*<Element name="scrum" className={`scrum-ebook ${pulseScrum ? 'pulse' : ''}`}>*/ }
          { /*<div className="images">*/ }
          { /*<div className="ebook" />*/ }
          { /*</div>*/ }
          { /*<p className={`description`} ref={this.scrumRef}>*/ }
          { /*<strong>Tactical, Practical Scrum</strong> is a 50-page handbook that I ghostwrote for an executive Agile coaching consultancy started by Scott Downey, whose clients include 3M, Toyota, Grindr, Napster and MySpace.*/ }
          { /*Ghostwrote*/ }
          { /*<br/>*/ }
          { /*<br/>*/ }
          { /*<div>The idea was to take Scott Downey's 20 years of experience and turn it into an ebook that he could use as part of his corporate trainings.<span style={{position: 'relative', left: '0.25rem'}}><FontAwesomeIcon icon="info-circle" /></span></div>*/ }
          { /*</p>*/ }
          { /*</Element>*/ }
        </div>
      </div>

    );
  }
}

export default Projects;