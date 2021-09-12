import React, { useState } from "react";
import H2 from "../../components/text-components/h2-component";
import H1 from "../../components/text-components/h1-component";
import mainImage from "../../images/journey-images/journey-main-img.jpg";
import ParagraphComponent from "../../components/text-components/paragraph-component";
import "./contactUsPage.css";
import emailjs from "emailjs-com";

const ContactUsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(true);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    newsletterChecked: false,
  });
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  function validateEmail() {
    function showEmailError() {
      setIsInvalidEmail(true);
      setTimeout(hideError, 3000);
    }
    function hideError() {
      setIsInvalidEmail(false);
    }
    if (!values["email"]) {
      showEmailError();
      return;
    }

    if (typeof values["email"] !== "undefined") {
      let lastAtPos = values["email"].lastIndexOf("@");
      let lastDotPos = values["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          values["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          values["email"].length - lastDotPos > 2
        )
      )
        showEmailError();
      return;
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    setValues({
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
      newsletterChecked: false,
    });
    emailjs
      .sendForm(
        "service_2kob6tg",
        "template_wao2age",
        e.target,
        "user_0oCAccLynW6NrTJUNygvN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormSubmitted(false);

    setTimeout(() => {
      setFormSubmitted(true);
    }, 2000);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="contact-us-top">
        <H1 text="Contact Us" />
        <div className="contact-main-image-container">
          <img
            className="contact-main-image"
            src={mainImage}
            alt="contact-us-main"
          />
        </div>
      </div>
      <section className="contact-us-page">
        <div className="contact-us-left">
          <H2 text="Have Questions?" />
          <ParagraphComponent
            paragraph="We’d love to hear from you."
            className="contact-hear"
          />
          <ParagraphComponent
            className="contact-address"
            paragraph="Address: 
Baluwatar, Kathmandu"
          />
          <ParagraphComponent
            paragraph="T: +977 14413992"
            className="contact-telephone"
          />
          <ParagraphComponent
            paragraph="M: +977 9818048776"
            className="contact-telephone"
          />
          <ParagraphComponent
            paragraph="E: info@vijayalaxmi.org"
            className="contact-email"
          />
        </div>
        <div className="contact-us-right">
          <form onSubmit={handleFormSubmit}>
            <div
              className="close-button"
              style={{ position: "absolute", top: "1em", right: "1em" }}
            ></div>

            {/* <ParagraphComponent paragraph="Got a question? Contact us quickly and easily with the following form and we will get back to you as soon as possible." /> */}
            <label htmlFor="name">Name</label>
            <input
              name="name"
              className="individual-carpet-name-input"
              type="text"
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="individual-email-input"
              type="text"
              value={values.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone</label>

            <input
              name="phone"
              className="individual-phone-input"
              type="text"
              value={values.phone}
              placeholder="Phone"
              onChange={handleChange}
            />
            <label htmlFor="country">Country</label>

            <input
              name="country"
              className="individual-country-input"
              type="text"
              value={values.country}
              placeholder="Country"
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>

            <textarea
              name="message"
              className="message-input"
              type="textarea"
              value={values.message}
              onChange={handleChange}
            />

            <div className="subscribe-newsletter">
              <input
                name="newsletterChecked"
                className="newsletter-checkbox"
                type="checkbox"
                // value={values.country}
                // placeholder="Country"
                onChange={handleChange}
              />
              <label htmlFor="newsletter">
                Check the box if you would like to recieve our newsletters.
              </label>
            </div>
            {isInvalidEmail && (
              <p className="invalid-email">Please enter a valid email</p>
            )}
            <button className="individual-carpet-get-quote-button contact-button">
              {formSubmitted
                ? "Submit"
                : "Thank you, we will get back to you shortly."}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
