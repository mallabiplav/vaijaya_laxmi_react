import React from "react";
import H1 from "../../components/text-components/h1-component";
import H3 from "../../components/text-components/h3-component";
import Paragraph from "../../components//text-components/paragraph-component";

function LandingPage() {
  return (
    <section
      className="landing-page"
      // style={{
      //   background: `url(${backgroundImage})`,
      //   // backgroundSize: "cover",
      // }}
    >
      <div className="landing-page-main-content">
        {/* <img className="landing-image" src={backgroundImage} alt="" /> */}
        <div className="landing-heading">
          <H1 id="vijaya-laxmi-heading-font" text="Vijaya Laxmi" />
          <H3 id="vijaya-laxmi-heading-font" text="Organization" />
          <Paragraph paragraph="Good Products With Good Values" />
        </div>
      </div>
      {/* <div className="landing-page-address">
        <p>Baluwatar, Kathmandu</p>
        <p>vijayalaxmiorganization@gmail.com</p>
      </div> */}
    </section>
  );
}

export default LandingPage;
