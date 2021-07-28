import React from "react";
import "./text.css";

const ParagraphComponent = ({ paragraph, className }) => {
  return (
    <p className={`paragraph-component ${className || ""}`}>{paragraph}</p>
  );
};

export default ParagraphComponent;
