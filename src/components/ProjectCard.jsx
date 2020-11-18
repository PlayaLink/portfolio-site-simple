import React from "react";
import "./ProjectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProjectCard = props => (
  <div className={`project-card ${props.className} d-flex flex-column justify-content-center`}>
    <div className="title">{props.title}</div>
    <div className="subtitle mb-2">
      <span style={{fontSize: "1.6rem"}}>{props.subtitle}</span>
    </div>
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
          className="button download-button bg-primary"
        >

          <span
            className="text-white"
          >
            {props.cta}
          </span>
        </Link>
      </div>
    )}
  </div>
);

export default ProjectCard;
