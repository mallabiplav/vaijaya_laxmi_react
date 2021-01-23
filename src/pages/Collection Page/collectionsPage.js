import React from "react";
import { collectionArray } from "./collectionArray";
import CollectionItem from "./collectionItems";
import "../../css/collectionPage.css";
import FooterSection from "../../footer/footerSection";

const CollectionsPage = () => {
  return (
    <section className="collectionSection">
      <h1 className="collectionPageHeading">Collections Page</h1>
      <div className="collectionPage">
        {collectionArray.map((collection, index) => {
          return (
            <div id={collection.id} className="collectionWrapper">
              <CollectionItem id={index} collection={collection} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CollectionsPage;
