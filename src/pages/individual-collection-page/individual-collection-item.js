import React, { useState } from "react";
import IndividualCollectionCarpet from "./individual-collection-carpet";

const IndividualCollectionItem = (props) => {
  const { rugName, rugImage } = props.rug;
  const [showItem, setShowItem] = useState(false);

  // const showInfo = () => {
  //   console.log("Showingo");
  // };
  return (
    <>
      <div
        onClick={() => setShowItem(!showItem)}
        className="individualCollectionItem"
        style={{
          background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${rugImage})`,
          backgroundSize: "cover",
        }}
      >
        <h5 className="individualCollectionRugName">{rugName}</h5>
      </div>
      {showItem && (
        <IndividualCollectionCarpet rug={props.rug} setShowItem={setShowItem} />
      )}
    </>
  );
};

export default IndividualCollectionItem;
