import React from "react";

const NewsletterSection = () => {
  return (
    <section className="newsletter">
      <h5 className="subscribe">Subscribe to our Newsletter</h5>
      <div className="button-textfield">
        <input type="text" id="lname" name="lname" value="" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterSection;
