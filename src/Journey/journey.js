import React from "react";
import { Link } from "react-router-dom";
// import "./css/index.css";

const JourneySection = () => {
  return (
    <section className="journey">
      <div className="journey-image">
        <div className="journey-header">
          <h1>The Journey Of Your Rug</h1>
        </div>
      </div>
      <div className="journey-content">
        {/* <h5 className="journey-content-header">Where our rugs come from</h5> */}
        <h3 className="journey-content-paragraph fade-in">
          Discover the intricacies that make your rug one of a kind. Join us on
          the journey of a rug from inception to completion.
        </h3>
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
