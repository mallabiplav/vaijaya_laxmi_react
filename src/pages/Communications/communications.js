import React from "react";
import communicationImage from "../../images/communications.png";
import "./communications.css";
import H1 from "../../components/text-components/h1-component";
import ParagraphComponent from "../../components/text-components/paragraph-component";

const Communications = () => {
  return (
    <section className="communications-section">
      <img src={communicationImage} alt="communications-main" />
      <H1 text="Communications" />
      <div className="communications-main">
        <div className="communications-left">
          <ParagraphComponent paragraph="The world is constantly evolving with new technology, behavior and needs. This demands more from Brands and organizations. We at VLO help to create the best possible communication strategy, so that your message is heard and understood by your targeted stakeholders." />
        </div>
        <div className="communications-right">
          <ParagraphComponent paragraph="Services Offered" />
          <ul>
            <li>
              <ParagraphComponent paragraph="Branding" />
            </li>
            <li>
              <ParagraphComponent paragraph="Public Relations" />
            </li>
            <li>
              <ParagraphComponent paragraph="Research and Data Analytics" />
            </li>
            <li>
              <ParagraphComponent paragraph="Reputation Management" />
            </li>
            <li>
              <ParagraphComponent paragraph="Social Media" />
            </li>
            <li>
              <ParagraphComponent paragraph="Internal Communication" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Communications;
