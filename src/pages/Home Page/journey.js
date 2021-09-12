import React from "react";
import { Link } from "react-router-dom";
import journeyImage from "../../images/journey.png";
import H2 from "../../components/text-components/h2-component";
import Paragraph from "../../components/text-components/paragraph-component";

// import "./css/index.css";

const JourneySection = () => {
  return (
    <section className="journey">
      <div className="journey-header-container">
        <img src={journeyImage} className="journey-image" alt="journey" />
        <div className="journey-header">
          <H2 text="The Journey Of Artisanal Crafts" />
        </div>
      </div>
      <div className="journey-content">
        {/* <h5 className="journey-content-header">Where our rugs come from</h5> */}
        <h5 className="journey-content-paragraph fade-in">
          Discover the intricacies that make your rug one of a kind. Join us on
          the journey of a rug from inception to completion.
        </h5>
        <Link to={`/journey`}>
          <Paragraph
            className="journey-content-follow-journey fade-in"
            paragraph="Follow the journey here"
          />
        </Link>
      </div>
    </section>
  );
};

export default JourneySection;
