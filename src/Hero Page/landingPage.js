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
      <div className="landing-header"></div>
      <div className="landing-heading">
        <h1 id={"vijaya-laxmi-heading-font"}>Vijaya Laxmi</h1>
        <h4 id={"vijaya-laxmi-heading-font"}>Organization</h4>
        {/* <h5>Good Rugs With Good Values</h5> */}
      </div>
    </section>
  );
}

export default LandingPage;
