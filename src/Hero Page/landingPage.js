import React from "react";
import backgroundImage from "../images/landing-page.png";

function LandingPage() {
  return (
    <section
      className="landing-page"
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="landing-header">
        <div className="logo-container"></div>
        <div className="navigation-items-container">
          <ul className="navigation-items">
            <li className="navigation-item">Home</li>
            <li className="navigation-item">Collection</li>
            <li className="navigation-item">Journey</li>
            <li className="navigation-item">About-Us</li>
            <li className="navigation-item">Blog</li>
            <li className="navigation-item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="landing-heading">
        <h1>VIJAYA LAXMI</h1>
        <h4>Organization</h4>
        {/* <h5>Good Rugs With Good Values</h5> */}
      </div>
    </section>
  );
}

export default LandingPage;
