import React from "react";

const AboutUsSubheading = (props) => {
  return (
    <h2 className={`about-us-subheading ${props.align}`}>{props.subHeading}</h2>
  );
};

export default AboutUsSubheading;
