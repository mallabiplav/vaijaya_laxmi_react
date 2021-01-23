import React from "react";
import { collectionArray } from "../Collection Page/collectionArray";
import { Link, useParams } from "react-router-dom";
import { individualCollectionArray } from "../individual-collection-page/individual-collection-array";
import IndividualCollectiionBanner from "./individual-collection-banner";
import IndividualCollectionItems from "./individual-collection-items";
import "../../css/individualCollectionPage.css";
import IndividualCollectionCarpet from "./individual-collection-carpet";

const IndividualCollection = () => {
  const carpetName = useParams().collectionName;
  const collection = collectionArray.find(
    (x) => x.collectionName == carpetName
  );
  const { id, collectionImage, collectionName, rugs } = collection;
  console.log(id, collectionImage, collectionName, rugs);
  return (
    <section className="individualCollectionSection">
      <IndividualCollectiionBanner
        collectionInformation={{ collectionImage, collectionName }}
      />
      <IndividualCollectionItems rugs={rugs} />
    </section>
  );
};

export default IndividualCollection;
