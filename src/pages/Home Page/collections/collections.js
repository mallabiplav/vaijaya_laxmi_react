import React from "react";
import { Link } from "react-router-dom";
import H2 from "../../../components/text-components/h2-component";

const Collections = ({ heading, buttonLabel, linkTo, image }) => {
  return (
    <div
      className="collection-item"
      style={{
        background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <H2
        className="collection-heading"
        id="collections-heading"
        text={heading}
      />

      <Link to={linkTo}>
        <button className="view-collection-button">{buttonLabel}</button>
      </Link>
    </div>
  );
};

export default Collections;
