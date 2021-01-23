import React from "react";
import JourneyHeading from "./journey-page-heading";
import JourneyPageRugs from "./journey-page-rugs";
import "../../css/journey.css";

const JourneyPage = () => {
  return (
    <section className="journey-page-section">
      {/* <JourneyHeading /> */}
      <JourneyPageRugs />
    </section>
  );
};

export default JourneyPage;
