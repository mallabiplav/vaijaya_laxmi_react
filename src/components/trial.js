import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Trial() {
  const [trialData, setTrialData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "collections"]{
            typeOfProduct->{title},
            collectionName,
        }`
      )
      .then((data) => setTrialData(data))
      .catch(console.eror);
  }, []);
  console.log(trialData);

  return (
    <div className="">
      {/* {trialData &&
        trialData.map((data, index) => {
          return <h1>{data.slug.current}</h1>;
        })} */}
    </div>
  );
}
