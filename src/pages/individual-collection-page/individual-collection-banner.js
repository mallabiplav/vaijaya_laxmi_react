import React from "react";

const IndividualCollectiionBanner = (props) => {
  const { collectionImage, collectionName } = props.collectionInformation;

  return (
    <div
      className="individualCollectionBanner"
      style={{
        background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${collectionImage})`,
        backgroundSize: "cover",
      }}
    >
      <h2>{collectionName} Collection</h2>
    </div>
  );
};

export default IndividualCollectiionBanner;
