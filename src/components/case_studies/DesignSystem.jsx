import React, { Component } from 'react';
import add_more_backups from '../../img/add_more_backups.png';
import wix from '../../img/wix.png';
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

const iconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' };

const Dot = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 1rem;
  padding: 0.25rem;
  position: relative;
  top: -0.25rem;
`;

const Title = () => (
  <div className="mb-5 mt-md-5 py-5">
    <div className="horizontal-container" style={ { paddingTop: '2rem' } }>
      <PageTitle title="Building a design system from scratch" />
    </div>
  </div>
);

class DesignSystem extends Component {
  render () {
    const { scroll, top } = this.props;
    return (
      <React.Fragment>
        <Progress scroll={ scroll } top={ top } />
        <ProgressBackground scroll="100%" top={ top } />
        <Title />
      </React.Fragment>
    );
  }
}

export default DesignSystem;
