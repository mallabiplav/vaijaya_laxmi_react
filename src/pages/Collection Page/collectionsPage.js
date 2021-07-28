import React, { useState, useEffect } from "react";
import { collectionArray } from "./collectionArray";
import CollectionItem from "./collectionItems";
import "../../css/collectionPage.css";
import "../../css/loading.css";
import sanityClient from "../../client.js";

const CollectionsPage = () => {
  const [trialData, setTrialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "rugCollections"]{
            typeOfProduct->{title},
            collectionName,
            rugList[]->{title,description,material,size,"imageUrl": carpetImage.asset->url}
        }`
      )
      .then((data) => {
        setTrialData(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);
  // console.log(trialData);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <section className="collectionSection">
      <div className="collectionWrapper">
        {trialData.map((collection, index) => {
          return <CollectionItem key={index} collection={collection} />;
        })}
      </div>
    </section>
  );
};

export default CollectionsPage;
