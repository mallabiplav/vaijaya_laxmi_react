import React from "react";

const FooterSection = () => {
  return (
    <footer>
      <div className="footer-left">
        <h3 className="footer-left-heading">Vijaya Laxmi Organization</h3>
        <p className="footer-left-content">
          Vijaya Laxmi is an organization that started with a simple thought of
          providing good products with good values. Producing quality highland
          crafts like hand-knotted rugs, ceramics, dhurries, dhaka fabrics,
          pashmina and so on. We are based in Kathmandu, the foothills of the
          majestic Himalayas working with a network of artisans throughout
          Nepal. With the blend of ancient hinduism and tibetan buddhism
          culminating into the culture now revered for our ancient arts and
          craft. Vijaya Laxmi Organization aims to bring light to these
          artisanal crafts and craftsmanship with a modern approach.
        </p>
      </div>
      <div className="footer-right">
        <div className="social-logo">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <p className="footer-address">Baluwatar, Kathmandu</p>
        <p className="footer-email">vijayalaxmiorganization@gmail.com</p>
      </div>
    </footer>
  );
};

export default FooterSection;
