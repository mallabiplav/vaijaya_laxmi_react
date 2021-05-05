import React from "react";
import FooterSection from "../../footer/footerSection";
import IndividualCollectionItem from "./individual-collection-item";

const IndividualCollectionItems = (props) => {
  const collectionName = props.collectionName;
  const rugList = props.rugList;

  //   console.log(rugList);
  return (
    <div className="individualCollectionItems">
      {rugList.map((rug, i) => {
        return (
          <IndividualCollectionItem
            rug={rug}
            key={i}
            collectionName={collectionName}
          />
        );
      })}
    </div>
  );
};

export default IndividualCollectionItems;
