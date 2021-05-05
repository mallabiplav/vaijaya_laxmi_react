import React from "react";
import Value from "./value";

const Values = (props) => {
  return (
    <div className="value">
      <Value
        valueHeading={props.valueHeading}
        valueParagraph={props.valueParagraph}
      />
    </div>
  );
};

export default Values;
