import React from "react";

const IndividualCollectiionBanner = (props) => {
  const collectionName = props.collectionInformation;
  const rugList = props.rugList;

  console.log(rugList, "ASDASD");

  return (
    <div className="individual-collection-header">
      <div
        className="individualCollectionBanner"
        style={{
          background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${rugList[1].imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <h2>{collectionName} Collection</h2>
      </div>
      <div className="individual-collection-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sit
          laborum voluptatibus similique sint autem ex beatae totam, blanditiis,
          perferendis cupiditate! Nesciunt quas non error magnam dolore quos,
          amet quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          NuNesciunt quas non error magnam dolore quos, amet quam?
        </p>
      </div>
    </div>
  );
};

export default IndividualCollectiionBanner;
