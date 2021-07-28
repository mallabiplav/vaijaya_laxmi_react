import React from "react";
import { Link } from "react-router-dom";
import H3 from "../../components/text-components/h3-component";

const CollectionItems = (props) => {
  const { collectionName, rugList } = props.collection;
  return (
    <Link
      to={`/products/rugs/${collectionName}`}
      className="collectionItem"
      style={{
        background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${rugList[1].imageUrl})`,
        backgroundSize: "cover",
      }}
    >
      <H3 text={collectionName} />
    </Link>
  );
};

export default CollectionItems;
