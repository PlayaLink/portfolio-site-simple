import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';
import './Timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TimelineCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }

  expandCard = () => {
    this.setState({ open: !this.state.open });
  };

  renderBulletedList = (details) => {
    return (
      <ul className={ `full-description ${this.state.open ? 'open' : ''}` }>
        { details.map( text => <li>{text}</li> )}
      </ul>
    )
  }
  renderParagraphs = (details) => {
    return (
      <div className={ `full-description ${this.state.open ? 'open' : ''}` }>
        { details.map( text => <p>{text}</p> )}
      </div>
    )
  }
  render () {
    const { title, summary, details, bullet } = this.props;
    return (
      <div className={ `timeline-card ${this.state.open ? 'open' : ''}` }>
        <h3 className="vertical-timeline-element-title">{ title }</h3>
        <p>
          { summary }
        </p>
        { bullet ? this.renderBulletedList(details) : this.renderParagraphs(details)

        }
        <div style={ { textAlign: 'center' } }>
          <a onClick={ this.expandCard }><span style={ { position: 'relative' } }><FontAwesomeIcon
            className={ `expand-arrow ${this.state.open ? 'rotate' : ''}` }
            icon="chevron-down" /></span></a></div>
      </div>
    );
  }
}

class Timeline extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="timeline">
        { /*<div className="section-title">Timeline</div>*/ }
        <VerticalTimeline>

          {/*COLLEGE*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="4 years"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Learning to speak"
              summary="All I cared about in college was learning Spanish and French."
              details={ [
                'UC Berkeley, French and Spanish literature',
                'Studied abroad in Spain',
                'Had a lot of pretentious conversations and protested a lot of things I probably didn\'t fully understand'
              ] }
              bullet={true}
            />
          </VerticalTimelineElement>

          {/*PARIS*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="3.5 years"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Living in Paris"
              summary="Taught English. Studied philosophy. Travelled with abandon."
              bullet={true}
              details={ [
                'Taught English to employees at LG, SAP, and Amgen',
                'Earned a Master\'s of Philosophy from the La Sorbonne (all coursework in French)',
                'Couch-surfed and hitch-hiked across most of Europe',
                'Figured out what kind of person I wanted to be'
              ] }
            />
          </VerticalTimelineElement>

          {/*Barcelona*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1 year"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Journalism School in Barcelona"
              summary="I wanted to perfect my Spanish before moving back to the California... and higher education is much cheaper in Europe."
              bullet={true}
              details={ [
                'Enrolled Columbia University\'s Spanish-language affiliate master\'s program, administered by the University of Barcelona.',
                'Reported on Catalan regional elections and the social effects of the euro crisis',
                'Dropped acid for the first time'
              ] }
            />
          </VerticalTimelineElement>

          {/*Journalism*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="4 years"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="The Curious Reporter"
              summary="Learned about the world by writing hundreds of stories and interviewing thousands of people"
              bullet={true}
              details={ [
                'Started my career writing about the U.S.-Mexico for the Union-Tribune of San Diego',
                'Wrote about education and city government for the Orange County Register',
                'Covered aerospace, technology and entrepreneurship for the Los Angeles Newspaper Group'
              ] }
            />
          </VerticalTimelineElement>

          {/*Breaking into tech*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1 year"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Breaking into tech"
              summary="Disillusioned by the sorry state of journalism, and inspired by the tech entrepreneurs I was writing about, I parlayed my writing and communications skills into a marketing job at a tech startup in Venice."
              bullet={true}
              details={ [
                'As the only marketing person, I got to wear many hats and got to learn on the job',
                'Got familiar with tools like Excel, Hubspot and Salesforce',
                'Realized that I am more interested in making/writing/coding things than selling/marketing/consuming things'
              ] }
            />
          </VerticalTimelineElement>

          {/*Learning to Speak Javascript*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1 year"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Learning to speak Javascript"
              summary="If I was going to stay in tech, I wanted to have a deeper understanding of how things work under the hood. And since code is just a language, I realized computer programming might be something I could wrap my head around better than most non-technical folks."
              bullet={true}
              details={ [
                'Enrolled in a fullstack Javascript bootcamp run by a cousin of mine in Utah',
                'After my cohort finished, I continued on as a tutor while continuing to study and work on personal projects',
                'Took on several freelance gigs, many of which I found through the bootcamp\'s network'
              ] }
            />
          </VerticalTimelineElement>

          {/*Product & Engineering*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2 years"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Product & Engineering"
              summary="Nothing is more empowering than being able to build your "
              bullet={true}
              details={ [
                'Enrolled in a small bootcamp run by a cousin of mine in Utah',
                'After my cohort finished, I continued on as a tutor while continuing to study and work on personal projects',
                'Took on several freelance gigs that I found through the bootcamp\'s network'
              ] }
            />
          </VerticalTimelineElement>

          {/*Design Research*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Design Research"
              summary="Journalism taught me how to investigate and understand people's problems. Engineering taught me how to build solutions."
              bullet={true}
              details={ [
                'Enrolled in a small bootcamp run by a cousin of mine in Utah',
                'After my cohort finished, I continued on as a tutor while continuing to study and work on personal projects',
                'Took on several freelance gigs that I found through the bootcamp\'s network'
              ] }
            />
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Design Research</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - present"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Link to={ process.env.PUBLIC_URL + '/' }>Go back</Link>
      </div>
    );
  }
}

export default Timeline;


