import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';

const iconStyle = { background: 'rgb(33, 150, 243)', color: '#d8d8d8' }

class TimelineCard extends React.Component {
  constructor (props) {
    super(props);
  }

  renderBulletedList = (details) => {
    if(!details) {
      return null
    }
    return (
      <ul className={ `full-description` }>
        { details.map((text, i) => <li key={i}>{ text }</li>) }
      </ul>
    );
  };
  renderParagraphs = (details) => {
    if(!details) {
      return null
    }
    return (
      <div className={ `full-description` }>
        { details.map(text => <p>{ text }</p>) }
      </div>
    );
  };

  render () {
    const { title, summary, details, bullet } = this.props;
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
    return (
      <div className="timeline mt-5">
        <h4 className="timeline text-uppercase text-center">The road to product design...</h4>
        <VerticalTimeline>

          { /*COLLEGE*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ iconStyle }
          >
            <TimelineCard

              title="Language"
              summary="All I cared about in college was language"
              details={ [
                'I studied French and Spanish literature',
                'Then lived in France and Spain for 5 years'
              ] }
              bullet={ true }
            />
          </VerticalTimelineElement>

          { /*PARIS*/ }
          {/*<VerticalTimelineElement*/}
            {/*className="vertical-timeline-element--work"*/}
            {/*iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }*/}
          {/*>*/}
            {/*<TimelineCard*/}
              {/*title="Philosophy in Paris"*/}
              {/*summary="Studied philosophy. Taught English. Travelled with abandon."*/}
              {/*bullet={ true }*/}
              {/*details={ [*/}
                {/*'Read about German philosophers in French at a school that is older than my country',*/}
                {/*'Coached executives at LG, SAP, and Amgen',*/}
                {/*'Couch-surfed and hitch-hiked across most of Europe'*/}
              {/*] }*/}
            {/*/>*/}
          {/*</VerticalTimelineElement>*/}
          { /*Barcelona*/ }
          {/*<VerticalTimelineElement*/}
            {/*className="vertical-timeline-element--work"*/}
            {/*iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }*/}
          {/*>*/}
            {/*<TimelineCard*/}
              {/*title="Journalism School in Barcelona"*/}
              {/*summary="Higher education is cheap in Europe. French is useless in America. Spanish is the second language in California."*/}
              {/*bullet={ true }*/}
              {/*details={ [*/}
                {/*"Wanted to perfect my Spanish before moving back to Southern California to write about the border and immigration issues",*/}
                {/*'Enrolled in Columbia University\'s Spanish-language affiliate master\'s program, administered by the University of Barcelona',*/}
                {/*'Rode my bike across Northern Spain, fueled by red wine and jamón serrano'*/}
              {/*] }*/}
            {/*/>*/}
          {/*</VerticalTimelineElement>*/}

          { /*Journalism*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ iconStyle }
          >
            <TimelineCard
              title="Journalism"
              summary="Journalism taught me how to ask questions, find information, and synthesize a chaotic stew of information into something meaningful and coherent"
              bullet={ true }
              details={ [
                'Wrote about aerospace and tech',
                'Talked about rocket science in words a 12-year-old could understand',
                "Sat in Elon Musk's space ship",
              ] }
            />
          </VerticalTimelineElement>

          { /*Breaking into tech*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ iconStyle }
          >
            <TimelineCard
              title="Marketing"
              summary="Overworked, underpaid, and inspired by the entrepreneurs I was writing about, I left journalism for a job in tech."
              bullet={ true }
              details={ [
                'Marketing seemed like the best application of my skillset',
                <div>Until I discovered journalists are more like product people – we care about<span className="font-italic">&nbsp;creating things</span> more than<span className="font-italic">&nbsp;selling things</span></div>,
                <div>Discovered that computer programming might not be that different from my language studies</div>
              ] }
            />
          </VerticalTimelineElement>

          { /*Scrum*/ }
          {/*<VerticalTimelineElement*/}
            {/*className="vertical-timeline-element--work"*/}
            {/*iconStyle={ iconStyle }*/}
          {/*>*/}
            {/*<TimelineCard*/}
              {/*title="Scrum/Agile"*/}
              {/*summary="Ghostwrote a 50-page handbook for successful Scrum adoption"*/}
              {/*bullet={ true }*/}
              {/*details={ [*/}
                {/*'Recorded 60 hours of interviews with executive Agile coach Scott Downey',*/}
                {/*<div>The title of the book was <span className="underline">Tactical, Practical Scrum: A Product Manager's Guide to Successful Scrum Implementation</span></div>,*/}
                {/*"In an attempt to eat my own dog food, I used Trello to build a product roadmap for the book and adopted a personal sprint to help me meet my deadline"*/}
              {/*] }*/}
            {/*/>*/}
          {/*</VerticalTimelineElement>*/}

          { /*Learning to Speak Javascript*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ iconStyle }
          >
            <TimelineCard
              title="Product & Engineering"
              summary="If I was going to stay in tech, I wanted to have a deeper understanding of how things work under the hood"
              bullet={ true }
              details={ [
                'Enrolled in a Javascript bootcamp and spent a lot of time on Udemy',
                'Worked on a small, product-focused engineering team, that allowed me to code and participate in product discussions',
              ] }
            />
          </VerticalTimelineElement>

          { /*Product & Engineering*/ }
          {/*<VerticalTimelineElement*/}
            {/*className="vertical-timeline-element--work"*/}
            {/*iconStyle={ iconStyle }*/}
          {/*>*/}
            {/*<TimelineCard*/}
              {/*title="Product & Engineering"*/}
              {/*summary="It's one thing to have an idea. It's another thing to be able to build it."*/}
              {/*bullet={ true }*/}
              {/*details={ [*/}
                {/*'Worked on a very product-focused engineering team, developing a frontend web app',*/}
                {/*'Leveraged my interview skills by talking with users and developing user personas',*/}
                {/*'Burrowed further down the tech rabbit hole'*/}
              {/*] }*/}
            {/*/>*/}
          {/*</VerticalTimelineElement>*/}

          { /*Design Research*/ }
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={ iconStyle }
          >
            <TimelineCard
              title="UX & Product Design"
              summary="Product design is where research and development meet – where I can lean on my experience as a listener, an investigator, and a translator, while satisfying my desire to create something useful and put it out in the world"
              bullet={ true }
              // details={ [
              //   "I've learned a lot by doing, wearing many hats on small teams",
              //   "Looking to join a larger company next, where I can collaborate and grow with a team of designers"
              // ] }
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default Timeline;


