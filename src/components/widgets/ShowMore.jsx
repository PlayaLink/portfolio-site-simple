import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowMore = () => (
  <span
    className="text-primary"
    style={{ fontSize: "0.75rem", position: "relative", top: "-0.25rem" }}
  >
    <FontAwesomeIcon icon="plus-circle" />
  </span>
);

export default ShowMore;
