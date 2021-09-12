import React from "react";
import { Link } from "react-router-dom";
import H3 from "../../components/text-components/h3-component";

const CollectionItems = (props) => {
  const { collectionName, mainCollectionImage } = props.collection;
  return (
    <Link
      to={`/products/rugs/${collectionName}`}
      id={collectionName}
      className="collectionItem"
      style={{
        background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${mainCollectionImage.asset.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <H3 text={collectionName} />
    </Link>
  );
};

export default CollectionItems;
