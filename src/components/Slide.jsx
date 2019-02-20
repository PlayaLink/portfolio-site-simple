import React from 'react';
import './Slide.scss';

const Slide = (props) => (
  <div className={ `slide-content ${props.slideName}` }>
    <div className="content">
      <div className="title">
        { props.title }
      </div>
      <div className="subtitle">
        { props.subtitle }
      </div>
      <div className={`description ${props.bullets ? 'bullets' : ''}`}>
        {props.description}
      </div>
    </div>
  </div>
);

export default Slide;