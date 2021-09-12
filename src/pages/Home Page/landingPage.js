import React from "react";
import H1 from "../../components/text-components/h1-component";
import H2 from "../../components/text-components/h2-component";
import Paragraph from "../../components//text-components/paragraph-component";

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="landing-page-main-content">
        <div className="landing-heading">
          <H1 id="vijaya-laxmi-heading-font" text="Vijaya Laxmi" />
          <H2 id="vijaya-laxmi-heading-font" text="Organization" />
          <Paragraph paragraph="Good Products With Good Values" />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
