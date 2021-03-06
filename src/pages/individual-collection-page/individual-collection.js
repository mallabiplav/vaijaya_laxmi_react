import { collectionArray } from "../Collection Page/collectionArray";
import { Link, useParams } from "react-router-dom";
import { individualCollectionArray } from "../individual-collection-page/individual-collection-array";
import IndividualCollectionBanner from "./individual-collection-banner";
import IndividualCollectionItems from "./individual-collection-items";
import "../../css/individualCollectionPage.css";
import IndividualCollectionCarpet from "./individual-collection-carpet";
import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";

const IndividualCollection = () => {
  const [rugData, setRugData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const collectionName = useParams().collectionName;

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "rugCollections" && collectionName == '${collectionName}'][0]{
            typeOfProduct->{title},
            collectionName,
            rugList[]->{title,description,material,size,"imageUrl": carpetImage.asset->url}
        }`
      )
      .then((data) => {
        console.log(data.rugList, "ASSD");
        setRugData(data);
        setIsLoading(false);
      })
      .catch(console.eror);
  }, []);
  console.log(rugData);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <section className="individualCollectionSection">
      <IndividualCollectionBanner
        rugList={rugData.rugList}
        collectionInformation={collectionName}
      />
      <IndividualCollectionItems
        rugList={rugData.rugList}
        collectionName={collectionName}
      />
    </section>
  );
};

// const IndividualCollection = () => {
//   const carpetName = useParams().collectionName;
//   const collection = collectionArray.find(
//     (x) => x.collectionName == carpetName
//   );
//   const { id, collectionImage, collectionName, rugs } = collection;
//   console.log(id, collectionImage, collectionName, rugs);
//   return (
//     <section className="individualCollectionSection">
//       <IndividualCollectiionBanner
//         collectionInformation={{ collectionImage, collectionName }}
//       />
//       <IndividualCollectionItems rugs={rugs} />
//     </section>
//   );
// };

export default IndividualCollection;
