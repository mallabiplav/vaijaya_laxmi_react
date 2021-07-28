import React from "react";
import Collections from "./collections";
import Empithes from "../../../images/pattern/Empithes.jpg";
import NoblePregog from "../../../images/pattern/NoblePregog.jpg";
import Oxykica from "../../../images/pattern/Oxykica.jpg";

// import Collection from "./collection";
// import { collectionArray } from "./collectionsArray";

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
        image={Empithes}
      />
      <Collections
        heading={"Communications"}
        linkTo={"#"}
        buttonLabel={"Learn More"}
        image={NoblePregog}
      />
      <Collections
        id="ceramics"
        heading={"Ceramics"}
        linkTo={"#"}
        buttonLabel={"Coming Soon"}
        image={Oxykica}
      />
    </section>
  );
};

export default CollectionSection;
