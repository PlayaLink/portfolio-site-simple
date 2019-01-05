import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';
import './Timeline.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class TimelineCard extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      open: false
    }
  }
  expandCard = () => {
    this.setState({ open: !this.state.open});
  }
  render() {
    const { title, description } = this.props;
    return (
      <div>
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <p>
          {description}
        </p>
        <a onClick={this.expandCard}><span><FontAwesomeIcon icon="chevron-down" /> {this.state.open ? 'less' : 'more'}</span></a>
        { this.state.open && (
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        )

        }
      </div>
    );
  }
}



class Timeline extends React.Component {
  constructor (props){
    super(props);
  }
  render () {
    return (
      <div className="timeline">
        {/*<div className="section-title">Timeline</div>*/}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2014"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <TimelineCard
              title="Journalist"
              description="Wrote about tech, aerospace and entrepeurship in Southern California"
            />

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Link to={process.env.PUBLIC_URL + '/'}>Go back</Link>
      </div>
    )
  }
}

export default Timeline


