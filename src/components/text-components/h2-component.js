import React from "react";
import "./text.css";

const h2 = ({ text, className, id }) => {
  return (
    <h2 className={`heading-2 ${className || ""}`} id={id || ""}>
      {text}
    </h2>
  );
};

export default h2;
