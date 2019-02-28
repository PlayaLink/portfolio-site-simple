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

  toggleCard = () => {
    this.setState({ open: !this.state.open });
  };

  openCard = () => {
    this.setState({ open: true });
  };

  closeCard = () => {
    this.setState({ open: false });
  };

  renderBulletedList = (details) => {
    return (
      <ul className={ `full-description ${this.state.open ? 'open' : ''}` }>
        { details.map((text, i) => <li key={i}>{ text }</li>) }
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
      <div ref={this.ref} className={ `timeline-card` }>
        <h3 className="vertical-timeline-element-title">{ title }</h3>
        <p>
          { summary }
        </p>
        { bullet ? this.renderBulletedList(details) : this.renderParagraphs(details) }
      </div>
    );
  }
}

class Timeline extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { pulseJournalism, pulseMarketing, pulseScrum } = this.props;
    return (
      <div className="timeline">
        <div className="section-title timeline">A Series of Fortunate Events</div>
        <VerticalTimeline>

          { /*COLLEGE*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard

              title="French and Spanish"
              summary="All I cared about in college was language."
              details={ [
                'Studied French and Spanish literature',
                'Studied abroad in Spain',
                'Had a lot of pretentious conversations and protested a lot of things I probably didn\'t fully understand'
              ] }
              bullet={ true }
            />
          </VerticalTimelineElement>

          { /*PARIS*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Philosophy in Paris"
              summary="Studied philosophy. Taught English. Travelled with abandon."
              bullet={ true }
              details={ [
                'Read about German philosophers in French at a school that is older than my country',
                'Coached executives at LG, SAP, and Amgen',
                'Couch-surfed and hitch-hiked across most of Europe'
              ] }
            />
          </VerticalTimelineElement>
          { /*Barcelona*/ }
          <Element name="journalism">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
            >
              <TimelineCard
                title="Journalism School in Barcelona"
                pulse={ pulseJournalism }
                summary="Higher education is cheap in Europe. French is useless in America. Spanish is the second language in California."
                bullet={ true }
                details={ [
                  "Wanted to perfect my Spanish before moving back to Southern California to write about the border and immigration issues",
                  'Enrolled in Columbia University\'s Spanish-language affiliate master\'s program, administered by the University of Barcelona',
                  'Rode my bike across Northern Spain, fueled by red wine and jamón serrano'
                ] }
              />
            </VerticalTimelineElement>
          </Element>

          { /*Journalism*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <TimelineCard
              title="Interviewing and Storytelling"
              pulse={ pulseJournalism }
              summary="Learned how to ask questions, find information, and distill complex topics by writing hundreds of news stories and interviewing thousands of people"
              bullet={ true }
              details={ [
                'Wrote about aerospace and tech',
                "Sat in Elon Musk's space ship",
                'Translated rocket science into words a 12-year-old could understand',
              ] }
            />
          </VerticalTimelineElement>

          { /*Breaking into tech*/ }
          <Element name="marketing">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={ { background: '#00ff9f', color: '#fff' } }
            >
              <TimelineCard
                title="Product marketing"
                pulse={pulseMarketing}
                summary="Overworked, underpaid, and inspired by the entrepreneurs I was writing about, I jumped the sinking ship of journalism for a job in tech."
                bullet={ true }
                details={ [
                  'Learned a lot about the tech industry',
                  'Learned a lot about the logistics industry and the history of the shipping container',
                  <div>Realized that I am more interested in <strong>making/writing/coding</strong> things than <strong>selling/marketing/consuming</strong> things</div>
                ] }
              />
            </VerticalTimelineElement>
          </Element>

          { /*Scrum*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ { background: '#fbf542', color: '#fff' } }
          >
            <TimelineCard
              title="Scrum/Agile"
              pulse={pulseScrum}
              summary="Ghostwrote a 50-page handbook for successful Scrum adoption"
              bullet={ true }
              details={ [
                'Recorded 60 hours of interviews with executive Agile coach Scott Downey',
                <div>The title of the book was <span className="underline">Tactical, Practical Scrum: A Product Manager's Guide to Successful Scrum Implementation</span></div>,
                "In an attempt to eat my own dog food, I used Trello to build a product roadmap for the book and adopted a personal sprint to help me meet my deadline"
              ] }
            />
          </VerticalTimelineElement>

          { /*Learning to Speak Javascript*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ { background: '#aaaaaa', color: '#fff' } }
          >
            <TimelineCard
              title="Learning to code"
              summary="If I was going to stay in tech, I wanted to have a deeper understanding of how things work under the hood."
              bullet={ true }
              details={ [
                'Enrolled in a fullstack Javascript bootcamp',
                'Realized computer programming is just another language, like French or Spanish, with less women in the room',
                'Felt like a baddass-Jedi-tech-wizard after I built my first app'
              ] }
            />
          </VerticalTimelineElement>

          { /*Product & Engineering*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ { background: '#aaaaaa', color: '#fff' } }
          >
            <TimelineCard
              title="Product & Engineering"
              summary="It's one thing to have an idea. It's another thing to be able to build it."
              bullet={ true }
              details={ [
                'Worked on a very product-focused engineering team, developing a frontend web app',
                'Leveraged my interview skills by talking with users and developing user personas',
                'Burrowed further down the tech rabbit hole'
              ] }
            />
          </VerticalTimelineElement>

          { /*Design Research*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ { background: '#aaaaaa', color: '#fff' } }
          >
            <TimelineCard
              title="Design Research"
              summary="The cleanest code is the code I never wrote – because I asked the right questions first."
              bullet={ true }
              details={ [
                "Got tired of building features users didn't want/need/use",
                "Realized technical prowess is only as valuable as the idea behind it",
                "Started advocating for more design research and usability testing and incorporating both into our development lifecycle"
              ] }
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default Timeline;


