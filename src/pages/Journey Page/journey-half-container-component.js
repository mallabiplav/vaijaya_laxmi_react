import React from "react";
import H2 from "../../components/text-components/h2-component";
import Paragraph from "../../components/text-components/paragraph-component";

const HalfContainer = ({ img: carding }) => {
  return (
    <div className="journey-rug-container journey-half-container carding-container">
      <H2 className="journey-rug-heading carding-heading" text="Carding" />
      <div className="journey-half-image-container">
        <img src={carding} />
      </div>
      <Paragraph
        className="journey-rug-paragraph carding-spinning-paragaraph"
        paragraph="Carding is the process of untangling and opening up the fibers of
            the raw wool. A small portion of wool is placed on the bottom carder
            and combed through with the second carder on top. When all the wool
            has been transferred from the bottom carder to the top, the carding
            combs are flipped over and the process is reversed. The rhythmic
            process is continued until a uniformity is produced in the wool."
      />
    </div>
  );
};

export default HalfContainer;
