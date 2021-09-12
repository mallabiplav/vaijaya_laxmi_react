import React, { useState } from "react";
import ParagraphComponent from "../../components/text-components/paragraph-component";
// import axios from "axios";

const NewsletterSection = () => {
  const [newsletter, setNewsletter] = useState("");

  // myRequest = (url) => {
  //   let response;
  //   try {
  //     response = axios.post(url, null, null);
  //   } catch (e) {
  //     response = e;
  //   }
  //   console.log(response);
  // };

  onsubmit = (e) => {
    e.preventDefault();

    const id = "1OENjd3bPcqp_lBx655YeQXjThXs6BRrH_wzPjfifE1s";
    const formUrl = "https://docs.google.com/forms/d/" + id + "/formResponse";
  };

  return (
    <section className="newsletter">
      <ParagraphComponent
        className="subscribe"
        paragraph="Subscribe to our newsletter"
      />
      <div className="newsletter-textfield">
        <input
          type="text"
          id="newsletter"
          name="newsletter"
          value={newsletter}
          onChange={(e) => {
            setNewsletter(e.target.value);
          }}
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterSection;
