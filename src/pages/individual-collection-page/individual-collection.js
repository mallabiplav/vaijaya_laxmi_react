import { useParams } from "react-router-dom";
import IndividualCollectionBanner from "./individual-collection-banner";
import IndividualCollectionItems from "./individual-collection-items";
import "../../css/individualCollectionPage.css";
import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";

const IndividualCollection = () => {
  const [rugData, setRugData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const collectionName = useParams().collectionName;

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "rugCollections" && collectionName == '${collectionName}'][0]{
            text,
            mainCollectionImage{asset->{path,url}},
            collectionName,
            rugList[]->{title,description,material,size,"imageUrl": carpetImage.asset->url}
        }`
      )
      .then((data) => {
        console.log(data);
        setRugData(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

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
        collectionText={rugData.text}
        collectionBannerImg={rugData.mainCollectionImage.asset.url}
        collectionInformation={collectionName}
      />
      <div className="individualCollectionColumns">
        <IndividualCollectionItems
          rugList={rugData.rugList}
          collectionName={collectionName}
          className="individualCollectionRightCol"
        />
      </div>
    </section>
  );
};

export default IndividualCollection;
