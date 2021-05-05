import React from "react";
import AboutUsSubheading from "./about-us-sub-heading-component";

const Value = (props) => {
  return (
    <>
      <AboutUsSubheading subHeading={props.valueHeading} />
      <p className="value-paragraph">{props.valueParagraph}</p>
    </>
  );
};

export default Value;
