import React from "react";
import "./text.css";

const H4 = ({ text, className, id }) => {
  return (
    <h4 className={`heading-4 ${className || ""}`} id={`${id}`}>
      {text}
    </h4>
  );
};

export default H4;
