import React from "react";
import H2 from "../../components/text-components/h2-component";
import H3 from "../../components/text-components/h3-component";
import ParagraphComponent from "../../components/text-components/paragraph-component";

const ValuesSection = (props) => {
  return (
    <>
      <H2 text="Our Values" />
      <div className="values-grid">
        <div className="value">
          <H3 text="Integrity" />
          <ParagraphComponent
            paragraph="Ethics and honesty is one of our foundational values. 
          We truly believe in providing good products with good values: Ethically sourced, quality controlled, 
          fairtrade and sustainable."
          />
        </div>
        <div className="value">
          <H3 text="Innovation" />
          <ParagraphComponent paragraph="Working with traditional techniques does not mean we limit ourselves. At Vijaya Laxmi there is no box! We believe in constant growth." />
        </div>
        <div className="value">
          <H3 text="Women empowerment" />
          <ParagraphComponent paragraph="There is a huge gender gap in Nepal as most women are involved in unpaid household labour. Recognising the lack of formal employment and the need for alternative livelihood opportunities, one of the core values of VLO is to empower women through direct job opportunities, welfare plans and educational development programs.            " />
        </div>
        <div className="value">
          <H3 text="Functionality" />
          <ParagraphComponent paragraph="Along with aesthetics, our products are designed to be practical, easy to use and timeless." />
        </div>

        <div className="value">
          <H3 text="Collaboration" />
          <ParagraphComponent paragraph="Our designs are made by working alongside local artisans and budding artists. We want to build a platform where they can showcase their talents and stories." />
        </div>
      </div>
    </>
  );
};

export default ValuesSection;
