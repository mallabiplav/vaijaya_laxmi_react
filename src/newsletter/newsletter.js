import React from "react";

const NewsletterSection = () => {
  return (
    <section className="newsletter">
      <p className="subscribe">Subscribe to our Newsletter</p>
      <div className="button-textfield">
        <input type="text" id="lname" name="lname" value="" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterSection;
