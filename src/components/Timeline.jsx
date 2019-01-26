import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element, Link } from 'react-scroll/modules';

class TimelineCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
    this.ref = React.createRef();
  }

  expandCard = () => {
    this.setState({ open: !this.state.open });
  };

  renderBulletedList = (details) => {
    return (
      <ul className={ `full-description ${this.state.open ? 'open' : ''}` }>
        { details.map(text => <li>{ text }</li>) }
      </ul>
    );
  };
  renderParagraphs = (details) => {
    return (
      <div className={ `full-description ${this.state.open ? 'open' : ''}` }>
        { details.map(text => <p>{ text }</p>) }
      </div>
    );
  };

  pulseCard = () => {
    this.ref.current.parentElement.classList.add('pulse')
  }

  render () {
    const { title, summary, details, bullet, pulse } = this.props;
    if(!!pulse) {
      this.pulseCard();
    }
    return (
      <div ref={this.ref} className={ `timeline-card ${this.state.open ? 'open' : ''} ${pulse ? 'pulse' : ''}` }>
        <h3 className="vertical-timeline-element-title">{ title }</h3>
        <p>
          { summary }
        </p>
        { bullet ? this.renderBulletedList(details) : this.renderParagraphs(details)

        }
        <div style={ { textAlign: 'center' } }>
          <a onClick={ this.expandCard }><span
            className="arrow-container"
            style={ { position: 'relative' } }><FontAwesomeIcon
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
    const { pulseJournalism, pulseMarketing } = this.props;
    return (
      <div className="timeline">
        { /*<div className="section-title">Timeline</div>*/ }
        <VerticalTimeline>

          { /*COLLEGE*/ }
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
              bullet={ true }
            />
          </VerticalTimelineElement>

          { /*PARIS*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="3.5 years"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Living in Paris"
              summary="Taught English. Studied philosophy. Travelled with abandon."
              bullet={ true }
              details={ [
                'Taught English to employees at LG, SAP, and Amgen',
                'Earned a Master\'s of Philosophy from the La Sorbonne (all coursework in French)',
                'Couch-surfed and hitch-hiked across most of Europe'
              ] }
            />
          </VerticalTimelineElement>
          { /*Barcelona*/ }
          <Element name="journalism">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="1 year"
              iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
            >
              <TimelineCard
                title="Journalism School in Barcelona"
                pulse={ pulseJournalism }
                summary="I wanted to perfect my Spanish before moving back to the Southern California to write about border and immigration issues."
                bullet={ true }
                details={ [
                  'Enrolled in Columbia University\'s Spanish-language affiliate master\'s program, administered by the University of Barcelona.',
                  'Reported on Catalan regional elections and the social effects of the euro crisis',
                  'Dropped acid for the first time'
                ] }
              />
            </VerticalTimelineElement>
          </Element>

          { /*Journalism*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="4 years"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Research and Storytelling"
              pulse={ pulseJournalism }
              summary="Learned about the world by writing hundreds of stories and interviewing thousands of people"
              bullet={ true }
              details={ [
                'Started my journalism career writing about the U.S.-Mexico for the Union-Tribune of San Diego',
                'Wrote about education and city government for the Orange County Register',
                'Covered aerospace, technology and entrepreneurship for the Los Angeles Newspaper Group'
              ] }
            />
          </VerticalTimelineElement>

          { /*Breaking into tech*/ }
          <Element name="marketing">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="1 year"
              iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
            >
              <TimelineCard
                title="Breaking into tech"
                pulse={pulseMarketing}
                summary="Disillusioned by the sorry state of journalism, and inspired by the tech entrepreneurs I was writing about, I parlayed my writing and communications skills into a product marketing job at a tech startup in Venice."
                bullet={ true }
                details={ [
                  'Redesigned marketing site',
                  'Created inbound and outbound lead generation funnels using Hubspot/Salesforce/Mailgun ',
                  'Realized that I am more interested in making/writing/coding things than selling/marketing/consuming things'
                ] }
              />
            </VerticalTimelineElement>
          </Element>

          { /*Learning to Speak Javascript*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1 year"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Learning to speak Javascript"
              summary="If I was going to stay in tech, I wanted to have a deeper understanding of how things work under the hood. And since code is just a language, I realized computer programming might be something I could wrap my head around better than most non-technical folks."
              bullet={ true }
              details={ [
                'Enrolled in a fullstack Javascript bootcamp run by a cousin of mine in Utah',
                'After my cohort finished, I continued on as a tutor while continuing to study and work on personal projects',
                'Took on several freelance gigs, many of which I found through the bootcamp\'s network'
              ] }
            />
          </VerticalTimelineElement>

          { /*Product & Engineering*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2 years"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Product & Engineering"
              summary="It's one thing to have an idea. It's another thing to be able to build it."
              bullet={ true }
              details={ [
                'Worked on very product-focused engineering team, building out and maintaining the web version of POPin, an employee engagement survey application',
                'Interviewed over 30 users to develop distinct user personas',
                'Implemented and managed tracking analytics via Mixpanel, Google Analytics and Hubspot'
              ] }
            />
          </VerticalTimelineElement>

          { /*Design Research*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Design Research"
              summary="The cleanest code is the code I never wrote – because I asked the right questions first."
              bullet={ true }
              details={ [
                <p><strong>POPin</strong> - Conducted market and user research before product
                  managing the development of a live polling feature for POPin</p>,
                <p><strong><Link
                  activeClass="active"
                  to="iep"
                  spy={ true }
                  smooth={ true }
                  duration={ 500 }>IEP Goal Tracker</Link></strong> - Interviewed special education
                  instructors and administrators before designing and building a tool to help track
                  students' progress on their Individualized Education Plans</p>,
                <p><strong>Rikra Loans</strong> - Developed interview materials and managed a team
                  of intern interviewers to assess user needs for a fintech startup focused on
                  microloans for undocumented workers in Utah</p>
              ] }
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default Timeline;


