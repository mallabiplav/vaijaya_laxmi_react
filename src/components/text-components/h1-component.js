import React from "react";
import "./text.css";

const H1 = ({ text, className, id }) => {
  return (
    <h1 className={`heading-1 ${className || ""}`} id={`${id || ""}`}>
      {text}
    </h1>
  );
};

export default H1;
