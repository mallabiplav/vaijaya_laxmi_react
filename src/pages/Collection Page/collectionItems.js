import React from "react";
import { Link } from "react-router-dom";

const CollectionItems = (props) => {
  const { id, collectionName, collectionImage } = props.collection;
  console.log(id);
  return (
    <Link to={`/products/rugs/${collectionName}`}>
      <div
        className="collectionItem"
        style={{
          background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${collectionImage})`,
          backgroundSize: "cover",
        }}
      >
        <h2>{collectionName}</h2>
      </div>
    </Link>
  );
};

export default CollectionItems;
