import React, { useState } from "react";
import IndividualCollectionCarpet from "./individual-collection-carpet";

const IndividualCollectionItem = (props) => {
  const { title, imageUrl } = props.rug;
  const collectionName = props.collectionName;
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
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h5 className="individualCollectionRugName">{title}</h5>
      </div>
      {showItem && (
        <IndividualCollectionCarpet
          rug={props.rug}
          setShowItem={setShowItem}
          collectionName={collectionName}
        />
      )}
    </>
  );
};

export default IndividualCollectionItem;
