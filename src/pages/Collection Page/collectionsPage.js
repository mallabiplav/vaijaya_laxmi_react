import React, { useState, useEffect } from "react";
import { collectionArray } from "./collectionArray";
import CollectionItem from "./collectionItems";
import "../../css/collectionPage.css";
import "../../css/loading.css";
import FooterSection from "../../footer/footerSection";
import sanityClient from "../../client.js";

const CollectionsPage = () => {
  const [trialData, setTrialData] = useState(null);
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
      {/* <h1 className="collectionPageHeading">Collections Page</h1> */}
      <div className="collectionWrapper">
        {trialData.map((collection, index) => {
          return <CollectionItem key={index} collection={collection} />;
        })}
      </div>
      {/* <IndividualCollectiionBanner
        collectionInformation={{ collectionImage, collectionName }}
      /> */}
      {/* <IndividualCollectionItems rugs={rugs} /> */}
    </section>
  );
};
// const CollectionsPage = () => {
//   return (
//     <section className="collectionSection">
//       <h1 className="collectionPageHeading">Collections Page</h1>
//       <div className="collectionPage">
//         {collectionArray.map((collection, index) => {
//           return (
//             <div id={collection.id} className="collectionWrapper">
//               <CollectionItem id={index} collection={collection} />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

export default CollectionsPage;
