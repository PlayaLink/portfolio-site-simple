import React from 'react';
import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = (props) => (
  <div className={`project-card`}>
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
    { (props.cta && props.link) && (
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
    ) }
  </div>
);

export default ProjectCard;