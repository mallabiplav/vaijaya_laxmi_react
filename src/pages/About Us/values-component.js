import React from "react";
import AboutUsSubheading from "./about-us-sub-heading-component";

const Value = (props) => {
  return (
    <div className="value">
      <AboutUsSubheading subHeading={props.valueHeading} />
      <p className="value-paragraph">{props.valueParagraph}</p>
    </div>
  );
};

export default Value;
