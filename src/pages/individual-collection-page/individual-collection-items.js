import React from "react";
import FooterSection from "../../footer/footerSection";
import IndividualCollectionItem from "./individual-collection-item";

const IndividualCollectionItems = (props) => {
  const collection = props.collection;
  const rugList = props.rugs;

  //   console.log(rugList);
  return (
    <div className="individualCollectionItems">
      {rugList.map((rug, i) => {
        return <IndividualCollectionItem rug={rug} key={i} />;
      })}
    </div>
  );
};

export default IndividualCollectionItems;
