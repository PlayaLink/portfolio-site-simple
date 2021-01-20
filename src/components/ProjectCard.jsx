import React from "react";
import "./ProjectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProjectCard = props => (
  <div
    className={`project-card ${
      props.className
    } d-flex flex-column justify-content-center`}
  >
    <div className="title text-uppercase mb-3">{props.title}</div>
    <div className="description">{props.description}</div>
    {props.cta && props.download && (
      <div className="mt-2">
        <a
          href={props.download}
          download
          id={props.id}
          className="button download-button"
        >
          {props.cta}
          {!props.isDownload && (
            <span
              style={{
                position: "relative",
                marginRight: "10px",
                marginLeft: "5px"
              }}
            >
              <FontAwesomeIcon icon="download" />
            </span>
          )}
        </a>
      </div>
    )}
    {props.cta && props.link && (
      <div className="mt-5">
        <Link
          to={props.link}
          id={props.id}
          className="button download-button btn-secondary"
        >
          <span>{props.cta}</span>
        </Link>
      </div>
    )}
  </div>
);

export default ProjectCard;
