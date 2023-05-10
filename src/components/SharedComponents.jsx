import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export function PageTitle(props) {
  const { title, subtitle } = props;
  return (
    <div className="col-12 col-md-8 pl-0 mb-2 mb-md-5 pb-5">
      <h1 className="display-4 page-header">{title}</h1>
      <h3 className="font-weight-normal">
        {subtitle}
      </h3>
    </div>
  );
}

export function ProjectSummarySection(props) {
  const { title, body } = props;
  return (
    <div className="div mb-5">
      <div className="row">
        <div className="col-md-2">
          <GroupTitle title={title} />
        </div>
      </div><div className="row">
        <div className="col-md-6 ml-5">
          <p className="font-weight-regular">
            {body.map(e => <div className="mb-2">{e}</div>)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function GroupHeader(props) {
  const { title, img, children, eyebrow, noContainer, className } = props;
  return (
    <div className={`${className ? className : ""}`}>
      {!!eyebrow && <EyebrowLabel text={eyebrow} noContainer={noContainer} />}
      <div className={`mb-5 ${noContainer ? "" : "horizontal-container"}`}>
        <GroupTitle title={title} img={img} />
         {children}
      </div>
    </div>
  );
}
export function GroupTitle(props) {
  const { title, img } = props;
  return (
    <h3 className="d-flex mb-3 font-weight-bold page-header">
      {title} <img className="ml-3" src={img}/>
    </h3>
  );
}

export const EyebrowLabel = props => (
  <h5
    className={`text-uppercase text-muted ${
      props.noContainer ? "" : "horizontal-container"
    }`}
  >
    {props.text}
  </h5>
);
{
  /*<FontAwesomeIcon icon={[`${!!type ? type : 'far'}`, {icon}]}/>*/
}
export function SectionTitle(props) {
  const { step, className, noContainer } = props;
  return (
    <div className={`${noContainer ? "" : "horizontal-container"} mb-5 ${className ? className : ""}`}>
      <div className="border-bottom">
        <span className={`pr-5 mr-5 ${step === "discovery" ? "" : "text-faded d-none d-md-inline"}`}>
          <FontAwesomeIcon icon={faLightbulb} />
          <span className="pl-4">Discovery</span>
        </span>
        <span className={`pr-5 mr-5 ${step === "research" ? "" : "text-faded d-none d-md-inline"}`}>
          <FontAwesomeIcon icon={faSearch} />
          <span className="pl-4">Research</span>
        </span>
        <span className={`pr-5 mr-5 ${step === "design" ? "" : "text-faded d-none d-md-inline"}`}>
          <FontAwesomeIcon icon={faTools} />
          <span className="pl-4">Design + Prototype</span>
        </span>
        <span className={`pr-5 mr-5 ${step === "learn" ? "" : "text-faded d-none d-md-inline"}`}>
          <FontAwesomeIcon icon={faSync} />
          <span className="pl-4">Learn + Iterate</span>
        </span>
      </div>
    </div>
  );
}
