import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export function PageTitle(props) {
  const { title } = props;
  return (
    <div className="col-12 col-md-8 pl-0 mb-5">
      <h1 className="display-4 page-header pb-md-5">{title}</h1>
    </div>
  );
}

export function GroupHeader(props) {
  const { title, img, children, eyebrow, noContainer } = props;
  return (
    <React.Fragment>
      {!!eyebrow && <EyebrowLabel text={eyebrow} noContainer={noContainer} />}
      <div className={`mb-5 ${noContainer ? "" : "horizontal-container"}`}>
        <GroupTitle title={title} img={img} />
         {children}
      </div>
    </React.Fragment>
  );
}
export function GroupTitle(props) {
  const { title, img } = props;
  return (
    <h3 className="d-flex mb-3 font-weight-bold page-header">
      {title} {img}
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
  const { step, className } = props;
  return (
    <div className={`horizontal-container mb-5 ${className ? className : ""}`}>
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
