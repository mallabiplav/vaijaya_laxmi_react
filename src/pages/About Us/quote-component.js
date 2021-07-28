import React from "react";
import H3 from "../../components/text-components/h3-component";

const QuoteComponent = ({ text }) => {
  return (
    <blockquote>
      <H3 className="quotation" text={text} />
    </blockquote>
  );
};

export default QuoteComponent;
