import React from "react";

const QuoteComponent = (props) => {
  return (
    <blockquote>
      <p className="quotation">{props.quote}</p>
    </blockquote>
  );
};

export default QuoteComponent;
