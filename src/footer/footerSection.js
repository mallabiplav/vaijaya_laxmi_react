import React from "react";

const FooterSection = () => {
  return (
    <footer>
      <div className="footer-left">
        <h4 className="footer-left-heading">Vijaya Laxmi Organization</h4>
        <p className="footer-left-content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
        </p>
      </div>
      <div className="footer-right">
        <div className="social-logo">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <h5 className="footer-address">Baluwatar, Kathmandu</h5>
        <h5 className="footer-email">vijayalaxmiorganization@gmail.com</h5>
      </div>
    </footer>
  );
};

export default FooterSection;
