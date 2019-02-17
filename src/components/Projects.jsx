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
        <span>{props.cta} </span><span
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
      <div style={{maxWidth: '100%'}}>
        <div className="section-title projects">Product</div>
        <div className="projects">
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
              cta="Case Study"
              description={ [
                'A web app that helps teachers of students with special needs.',
                <p>Digitizes paper evaluation forms used for tracking progress on state-enforced Individualized Education Plans, or IEPs.</p>,
                'Allows teachers to log evaluations in real-time with from their phone.'
              ] }
            />
          </Element>

          <div className="street-art-talks">
            <ProjectCard
              title={ [ <div>Street Art Talks</div> ] }
              subtitle="Text-based audio tour of street art in DTLA"
              link="http://www.streetarttalks.com"
              cta="Visit Site"
              description={ [
                'Stencils tagged near prominent murals in DTLA\'s arts district instruct passersby to text a code to a Twilio phone number. ',
                <br/>,
                'Automated text response includes a url with information about the mural and artist.'] }
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
              title={ [ <div>POPin Live</div> ] }
              subtitle="Adding live-polling to POPin's suite of employee engagement tools"
              link="www.popinnow.com"
              cta="Visit Site"
              description={ [
                'Employee engagement survey tool POPin wanted a live-polling feature to meet customer demand and match competition. ',
                <br/>,
                'I surveyed the competitive landscape, conducted user interviews, and managed the design and development of the live tool.'] }
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