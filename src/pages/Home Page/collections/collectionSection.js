import React from "react";
import Collections from "./collections";
import rugs from "../../../images/rugs-home-bg.jpg";
import communications from "../../../images/communications-home-bg.jpg";
import ceramics from "../../../images/ceramics-home-bg.jpg";

const CollectionSection = () => {
  return (
    <section className="collections">
      {/* {collectionArray.map((collection, i) => {
        console.log(i);
        return <Collection key={i} collection={collection} />;
      })} */}
      <Collections
        heading={"Rugs"}
        linkTo={"products/rugs"}
        buttonLabel={"View Collection"}
        image={rugs}
      />
      <Collections
        heading={"Communications"}
        linkTo={"communications"}
        buttonLabel={"Learn More"}
        image={communications}
      />
      <Collections
        id="ceramics"
        heading={"Ceramics"}
        linkTo={"#"}
        buttonLabel={"Coming Soon"}
        image={ceramics}
      />
    </section>
  );
};

export default CollectionSection;
