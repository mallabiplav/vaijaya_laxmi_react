import React from "react";
import ParagraphComponent from "../../components/text-components/paragraph-component";

const NewsletterSection = () => {
  return (
    <section className="newsletter">
      <ParagraphComponent
        className="subscribe"
        paragraph="Subscribe to our newsletter"
      />
      <div className="button-textfield">
        <input type="text" id="lname" name="lname" value="" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterSection;
