import React from "react";
import { Link, useParams } from "react-router-dom";

const Collection = (props) => {
  const { image, heading, buttonLabel, collectionType } = props.collection;
  return (
    <div
      className="collection-item"
      style={{
        background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="collection-heading">{heading}</h1>
      <Link to={`/products/${collectionType}`}>
        <button className="view-collection-button">{buttonLabel}</button>
      </Link>
    </div>
  );
};

export default Collection;
