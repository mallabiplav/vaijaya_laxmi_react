import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import H3 from "../text-components/h3-component";
import ParagraphComponent from "../text-components/paragraph-component";
import "./footer.css";

const FooterSection = () => {
  return (
    <footer>
      <div className="footer-left">
        <H3 className="footer-left-heading" text="Vijaya Laxmi Organization" />
        <ParagraphComponent
          className="footer-left-content"
          paragraph="
          Vijaya Laxmi is an organization that started with a simple thought of
          providing good products with good values. With the blend of ancient
          hinduism and tibetan buddhism culminating into the culture now revered
          for our ancient arts and craft, Vijaya Laxmi Organization aims to
          bring light to these artisanal crafts and craftsmanship with a modern
          approach."
        />
      </div>
      <div className="footer-right">
        <a
          className="social-media-icons"
          href="https://www.instagram.com/vijayalaxmiorg/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="social-media-icons"
          href="https://www.facebook.com/vijayalaxmiorganization"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="social-media-icons" />
        </a>

        <ParagraphComponent
          className="footer-email"
          paragraph="info@vijayalaxmi.org"
        />
        <ParagraphComponent
          className="footer-address"
          paragraph="Baluwatar, Kathmandu"
        />
      </div>
    </footer>
  );
};

export default FooterSection;
