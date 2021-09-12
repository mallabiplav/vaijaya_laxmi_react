import React, { useState } from "react";
import ParagraphComponent from "../../components/text-components/paragraph-component";
import H3 from "../../components/text-components/h3-component";
import H4 from "../../components/text-components/h4-component";
import { useMediaQuery } from "react-responsive";
import CloseModal from "../../components/CloseModal/closeModal";
import emailjs from "emailjs-com";

const IndividualCollectionCarpet = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(null);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const { title, description, size, material, imageUrl } = props.rug;
  const collectionName = props.collectionName;
  const { setShowItem } = props;
  const [fullScreenCarpet, setFullScreenCarpet] = useState(false);
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

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
    emailjs
      .sendForm(
        "service_2kob6tg",
        "template_mn96zfm",
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
    setValues({ name: "", email: "", phone: "", country: "", message: "" });
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="individual-collection-carpet-info outer-popup"
      onClick={(e) =>
        e.target === e.currentTarget ? setShowItem(false) : null
      }
    >
      <div className="inner-popup">
        <div
          className="close-button"
          style={{ position: "absolute", top: "1em", right: "1em" }}
        >
          <CloseModal closeButton={setShowItem} />
        </div>
        <div className="individual-carpet-info-left-col">
          <img
            src={imageUrl}
            onClick={() => {
              setFullScreenCarpet(true);
            }}
            alt={title}
            className="individual-collection-main-picture"
          />
          {!isTablet && fullScreenCarpet && (
            <div id="img-full-bg" onClick={() => setFullScreenCarpet(false)}>
              <img src={imageUrl} alt={title} />
            </div>
          )}
        </div>
        <div className="individual-carpet-info-right-col">
          <H3
            className="individual-collection-name"
            text={`${collectionName} Collection`}
          />
          <H4 className="individual-carpet-name" text={title} />
          <ParagraphComponent
            className="individual-carpet-description"
            paragraph={description}
          />
          <ParagraphComponent
            className="individual-carpet-material"
            paragraph={`Material: ${material}`}
          />
          <ParagraphComponent
            className="individual-carpet-size"
            paragraph={`Size: ${size}`}
          />
          <button
            className="individual-carpet-get-quote-button"
            onClick={() => setShowForm(true)}
          >
            Product Inquiry
          </button>

          {/* close button */}
          <button
            onClick={() => {
              setShowItem(false);
            }}
            className="individual-carpet-close-button-bottom"
          >
            Close
          </button>
        </div>
      </div>
      {showForm && (
        <div
          className="form-overlay"
          onClick={(e) =>
            e.target === e.currentTarget ? setShowForm(false) : null
          }
        >
          <form
            className={
              showForm
                ? "individual-carpet-form"
                : "close-individual-carpet-form"
            }
            onSubmit={handleFormSubmit}
          >
            <div
              className="close-button"
              style={{ position: "absolute", top: "1em", right: "1em" }}
            >
              <CloseModal closeButton={setShowForm} />
            </div>

            <H3 text="Product Inquiry" />
            <ParagraphComponent paragraph="Got a question? Contact us quickly and easily with the following form and we will get back to you as soon as possible." />
            <input
              name="product-name"
              value={title}
              style={{ display: "none" }}
            />
            <input
              name="collection-name"
              value={collectionName}
              style={{ display: "none" }}
            />
            <input
              name="name"
              className="individual-carpet-name-input"
              type="text"
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              name="email"
              className="individual-email-input"
              type="text"
              value={values.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              name="phone"
              className="individual-phone-input"
              type="text"
              value={values.phone}
              placeholder="Phone"
              onChange={handleChange}
            />
            <input
              name="country"
              className="individual-country-input"
              type="text"
              value={values.country}
              placeholder="Country"
              onChange={handleChange}
            />
            <input
              name="message"
              className="individual-message-input"
              type="text"
              value={values.message}
              placeholder="Message"
              onChange={handleChange}
            />
            {isInvalidEmail && (
              <p className="invalid-email">Please enter a valid email</p>
            )}
            <button className="individual-carpet-get-quote-button individual-carpet-form-button">
              {!formSubmitted
                ? "Submit"
                : "Thank you, we will get back to you shortly."}
            </button>
            {isTablet && (
              <div
                className="individual-carpet-get-quote-button individual-carpet-form-close-button"
                onClick={() => {
                  setShowForm(false);
                }}
              >
                Close
              </div>
            )}
          </form>
        </div>
      )}
    </section>
  );
};

export default IndividualCollectionCarpet;
