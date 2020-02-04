import React from "react";
import "./ProjectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProjectCard = props => (
  <div className={`project-card ${props.className} d-flex flex-column justify-content-center`}>
    <div className="title">{props.title}</div>
    <div className="subtitle">
      <span style={{fontSize: "1.3rem"}}>{props.subtitle}</span>
      <hr className="divider" />
    </div>
    <div className="description">{props.description}</div>
    {props.cta && props.download && (
      <div style={{ marginTop: "2rem" }}>
        <a
          href={props.download}
          download
          id={props.id}
          className="button pink download-button"
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
      <div style={{ marginTop: "2rem" }}>
        <Link
          to={props.link}
          id={props.id}
          className="button pink download-button"
        >

          <span
            className="mr-3"
          >
            {props.cta}
          </span>
          <FontAwesomeIcon icon="arrow-right" />
        </Link>
      </div>
    )}
  </div>
);

export default ProjectCard;
