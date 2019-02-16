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
    <div style={ { marginTop: '1rem' } }>
      <a
        href={ props.link }
        target="_blank"
        className="button pink">
        <span>Case Study </span><span
        style={ {
          position: 'relative',
          marginRight: '10px',
          marginLeft: '5px'
        } }><FontAwesomeIcon icon="arrow-right" /></span>
      </a>
    </div>
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
      <div className="projects">
        {/*<div className="section-title">Recent Projects</div>*/}
        <Element name="iep" className={ `iep-goal-tracker ${pulseIep ? 'pulse' : ''}` }>
          <div className="images">
            <div className="phone evaluations" />
            <div className="phone login" />
            <div className="phone students" />
          </div>
          <ProjectCard
            title={ [ <div>IEP Goal Tracker</div> ] }
            subtitle="Streamlining data collection in the classroom"
            link="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
            description={ [
              'A web app that helps teachers of students with special needs by digitizing the paper evaluation forms used for tracking progress on state-enforced Individualized Education Plans, or IEPs.' ] }
          />
        </Element>

        <div className="street-art-talks">
          <div className="images">
            <div className="phone influence" />
            <div className="phone street-art-talks" />
            <div className="phone peace" />
          </div>
          <ProjectCard
            title={ [ <div>Street Art Talks</div> ] }
            subtitle="Text-based audio tour of street art in DTLA"
            link="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
            description={ [
              'Stencils tagged near prominent murals in DTLA\'s arts district instruct passersby to text a code to a Twilio phone number',
              'Automated text replies include a url with information about the mural and artist.'] }
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
    );
  }
}

export default Projects;