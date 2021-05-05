import React from "react";
import { Link } from "react-router-dom";
import journeyImage from "../images/journey.png";
// import "./css/index.css";

const JourneySection = () => {
  return (
    <section className="journey">
      <div className="journey-header-container">
        <img src={journeyImage} className="journey-image" />
        <div className="journey-header">
          <h1>The Journey Of Artisnal Crafts</h1>
        </div>
      </div>
      <div className="journey-content">
        {/* <h5 className="journey-content-header">Where our rugs come from</h5> */}
        <h5 className="journey-content-paragraph fade-in">
          Discover the intricacies that make your rug one of a kind. Join us on
          the journey of a rug from inception to completion.
        </h5>
        <Link to={`/journey`}>
          <p className="journey-content-follow-journey fade-in">
            Follow the journey here
          </p>
        </Link>
      </div>
    </section>
  );
};

export default JourneySection;
