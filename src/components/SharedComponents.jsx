import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function GroupHeader(props) {
  const { title, img, children, eyebrow, noContainer } = props;
  return (
    <React.Fragment>
      { !!eyebrow && <EyebrowLabel text={eyebrow} noContainer={noContainer}/> }
      <div className={`mb-5 ${noContainer ? "" : "horizontal-container"}`}>
        <h3 className="d-flex mb-3 font-weight-bold page-header">
          {title} {img}
        </h3>
        {children}
      </div>
    </React.Fragment>
  );
}

export const EyebrowLabel = props => (
  <h5 className={`text-uppercase text-muted ${props.noContainer ? "" : "horizontal-container"}`}>{props.text}</h5>
);
{/*<FontAwesomeIcon icon={[`${!!type ? type : 'far'}`, {icon}]}/>*/}
export function SectionTitle(props) {
  const { title, icon, type, children } = props;
  return (
    <div className={`horizontal-container mb-5`}>
      <h1 className="page-header border-bottom">
        { !!icon && <FontAwesomeIcon icon={icon}/>}
        <span className="pl-4">{ title }</span></h1>
      {children}
    </div>
  );

}