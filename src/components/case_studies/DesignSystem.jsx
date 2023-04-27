import React, { Component } from 'react';
import add_more_backups from '../../img/add_more_backups.png';
import salamander from '../../img/salamander.png';
import squarespace from '../../img/squarespace.png';
import checkout from '../../img/checkout.png';
import db_report from '../../img/db_report.png';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import { GroupHeader, GroupTitle, SectionTitle } from '../SharedComponents.jsx';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import backups_user_journey from '../../img/backups_user_journey.png';
import { PageTitle, ProjectSummarySection } from '../SharedComponents';
import { Progress, ProgressBackground } from '../Progress';


const Title = () => (
  <div className="mb-5 mt-md-5 py-5">
    <div className="horizontal-container" style={ { paddingTop: '2rem' } }>
      <PageTitle title="Building a design system from scratch" />
    </div>
  </div>
);

class DesignSystemSection extends Component {
  render () {
    const { title, image } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-uppercase mb-4">{title}</h2>
          <GroupHeader title="Poor design consistency">
            <p>Previous attempts at a design system had failed to gain traction, resulting in wide inconsistencies. </p>
          </GroupHeader>
        </div>
        <div className="col-md-6">
          <img className="img-rounded" src={image}/>
        </div>
      </div>
    );
  }
}

class DesignSystem extends Component {
  render () {
    const { scroll, top } = this.props;
    return (
      <React.Fragment>
        <Progress scroll={ scroll } top={ top } />
        <ProgressBackground scroll="100%" top={ top } />
        <div className="mb-5 mt-md-5 py-5">
          <div className="horizontal-container" style={ { paddingTop: '2rem' } }>
            <PageTitle title="Building a design system from scratch" />
            <DesignSystemSection title="Context" image={salamander}/>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default DesignSystem;
