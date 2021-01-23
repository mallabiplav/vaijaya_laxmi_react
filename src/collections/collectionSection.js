import React from "react";
import Collection from "./collection";
import { collectionArray } from "./collectionsArray";

const CollectionSection = () => {
  return (
    <section className="collections">
      {collectionArray.map((collection, i) => {
        return <Collection key={i} collection={collection} />;
      })}
    </section>
  );
};

export default CollectionSection;
