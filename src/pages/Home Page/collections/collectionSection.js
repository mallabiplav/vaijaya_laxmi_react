import React from "react";
import Collections from "./collections";
import outdoor from "../../../images/outdooor.jpg";
import pangden from "../../../images/pangden.jpg";
import indoor from "../../../images/indoor.jpg";

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
        image={outdoor}
      />
      <Collections
        heading={"Communications"}
        linkTo={"#"}
        buttonLabel={"Learn More"}
        image={pangden}
      />
      <Collections
        id="ceramics"
        heading={"Ceramics"}
        linkTo={"#"}
        buttonLabel={"Coming Soon"}
        image={indoor}
      />
    </section>
  );
};

export default CollectionSection;
