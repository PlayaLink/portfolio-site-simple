import React, { Component } from 'react';
import balance from '../../img/balance.png';
import arrow from '../../img/arrow.png';
import salamander from '../../img/salamander.png';
import buttons from '../../img/buttons.png';
import construction_designer from '../../img/construction_designer.png';
import construction_girl from '../../img/construction_girl.png';
import roadmap from '../../img/roadmap.png';
import sad_astronaut from '../../img/sad_astronaut.png';
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
    const { title, image, children, imageCaption } = this.props;
    return (
      <React.Fragment>
        <h2 className="text-uppercase mb-5">{title}</h2>
        <div className="row">
          <div className="col-md-6">
            {children}
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-center">
              <img className="img-rounded img-fluid d-block" src={image}/>
              { !!imageCaption && <p className="mt-3 font-italic">{imageCaption}</p> }
            </div>
          </div>
        </div>
      </React.Fragment>
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
            {/*CONTEXT*/}
            <DesignSystemSection title="Context" image={buttons} imageCaption="Results from an audit of SimpleNexus buttons">
              <GroupHeader title="Poor design consistency" img={arrow} noContainer={true}>
                <p>Previous attempts at a design system had failed to gain traction, resulting in wide inconsistencies. </p>
              </GroupHeader>
              <GroupHeader title="Lost sales" noContainer={true}>
                <p>A large deal fell through because our competitor had “better design”. This got leadership’s attention,</p>
              </GroupHeader>
              <GroupHeader title="Supportive leadership" noContainer={true}>
                <p>Product leadership would allocate Engineering resources if Design could produce a complete Design System that, crucially, all designers were on board with.</p>
              </GroupHeader>
              <GroupHeader title="Growing design team" noContainer={true}>
                <p>The design team was growing, from 3 designers to 15 in just over a year.</p>
              </GroupHeader>
            </DesignSystemSection>

            {/*CHALLENGES*/}
            <DesignSystemSection title="Challenges" image={sad_astronaut}>
              <GroupHeader title="Poor design consistency" noContainer={true}>
                <p>Previous attempts at a design system had failed to gain traction, resulting in wide inconsistencies. </p>
              </GroupHeader>
              <GroupHeader title="Lost sales" noContainer={true}>
                <p>A large deal fell through because our competitor had “better design”. This got leadership’s attention,</p>
              </GroupHeader>
              <GroupHeader title="Lost sales" noContainer={true}>
                <p>A large deal fell through because our competitor had “better design”. This got leadership’s attention.</p>
              </GroupHeader>
              <GroupHeader title="Supportive leadership" noContainer={true}>
                <p>Product leadership would allocate Engineering resources if Design could produce a complete Design System that, crucially, all designers were on board with.</p>
              </GroupHeader>
              <GroupHeader title="Growing design team" noContainer={true}>
                <p>The design team was growing, from 3 designers to 15 in just over a year.</p>
              </GroupHeader>
            </DesignSystemSection>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default DesignSystem;
