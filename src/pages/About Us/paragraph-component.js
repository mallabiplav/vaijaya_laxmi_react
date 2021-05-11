import React from "react";

const ParagraphComponent = (props) => {
  return (
    <p className={`about-us-paragraph ${props.align}`}>{props.paragraph}</p>
  );
};

export default ParagraphComponent;
