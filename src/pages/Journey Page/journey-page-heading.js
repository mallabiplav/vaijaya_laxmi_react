import React from "react";
import main_image from "../../images/journey-images/journey-main-image.JPG";

const JourneyHeading = () => {
  return (
    <div className="journey-page-header">
      <h1 className="journey-page-heading">JOURNEY OF ARTISANAL CRAFTS</h1>
      <img src={main_image} />
    </div>
  );
};

export default JourneyHeading;
