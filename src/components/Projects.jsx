import React from 'react';
import './Projects.scss';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = (props) => (
  <div className="project-card">
    <div className="title">
      { props.title }
    </div>
    <div className="subtitle">
      { props.subtitle }
      <hr className="divider"></hr>
    </div>
    <div className="description">
      { props.description }
    </div>
    { (props.cta && props.link) && (
      <div style={ { marginTop: '1rem' } }>
        <a
          href={ props.link }
          target="_blank"
          className="button pink">
          <span>{props.cta} </span><span
          style={ {
            position: 'relative',
            marginRight: '10px',
            marginLeft: '5px'
          } }><FontAwesomeIcon icon="arrow-right" /></span>
        </a>
      </div>
    ) }
  </div>
);

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
              link="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
              cta="Case Study"
              description={ [
                "Teachers weren't tracking goals properly because paper spreadsheets are a hassle.",
                <p>A tech-savvy principal wanted to change that.</p>,
                'This mobile-friendly web app makes it easy to log evaluations and track progress over time.'
              ] }
            />
          </Element>

          <div className="street-art-talks">
            <ProjectCard
              title="Street Art Talks"
              subtitle="Text-based audio tour of street art in DTLA"
              link="http://www.streetarttalks.com"
              cta="Visit Site"
              description={ [
                'Street art is more approachable than art in a museum.',
                <p />,
                "But wouldn't it be nice to know more about the art and the person who created it?",
                <p />,
                'Stencils tagged near prominent murals in DTLA\'s arts district will instruct passersby to text a code to a Twilio phone number. ',
                <p />,
                'An automated text response includes a url with information about the mural and artist.'] }
            />
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
          </div>
          <div className="popin-live">
            <div className="images">
              <div className="projection-screen" />
            </div>
            <ProjectCard
              title="POPin Live"
              subtitle="Adding live-polling to POPin's suite of survey tools"
              description={ [
                'POPin is an Irvine-based startup that makes employee engagement software for large enterprises.',
                <p>The company wanted to add live-polling functionality to meet customer demand and feature match the competition.</p>,
                'I surveyed the competitive landscape, conducted user interviews, scoped the project and managed the design and development of the new feature, called POPin Live.'] }
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