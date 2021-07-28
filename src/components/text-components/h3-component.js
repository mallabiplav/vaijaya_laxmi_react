import React from "react";
import "./text.css";

const h3 = ({ text, className, id }) => {
  return (
    <h3 className={`heading-3 ${className || ""}`} id={`${id}`}>
      {text}
    </h3>
  );
};

export default h3;
