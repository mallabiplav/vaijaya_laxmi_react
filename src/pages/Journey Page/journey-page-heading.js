import React from "react";

const JourneyHeading = ({ mainImage }) => {
  return (
    <div className="journey-page-header">
      <h1 className="journey-page-heading">JOURNEY OF ARTISANAL CRAFTS</h1>
      <img src={mainImage} alt="journey-main" />
    </div>
  );
};

export default JourneyHeading;
