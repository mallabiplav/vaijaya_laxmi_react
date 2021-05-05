import React from "react";
import image from "../../images/Journey-of-your-rug.jpg";
import AboutUsHeading from "./about-us-heading-component";
import AboutUsSubheading from "./about-us-sub-heading-component";
import Values from "./values";
import "../../css/aboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <AboutUsHeading heading="About Us" />
      <img className="about-us-main-image" src={image} />
      <p className="about-us-main-paragraph">
        Vijaya Laxmi is an organization that started with a simple thought of
        providing good products with good values. Producing quality highland
        crafts like hand-knotted rugs, ceramics, dhurries, dhaka fabrics,
        pashmina and so on. We are based in Kathmandu, the foothills of the
        majestic Himalayas working with a network of artisans throughout Nepal.
        With the blend of ancient hinduism and tibetan buddhism culminating into
        the culture now revered for our ancient arts and craft. Vijaya Laxmi
        Organization aims to bring light to these artisanal crafts and
        craftsmanship with a modern approach.
        <br />
        We believe in balancing our business priorities with a strong sense of
        social responsibilities. We aim to promote and support local artisans
        and their crafts ethically, paving the way for centuries old techniques
        to be accessible to the world in an authentic way. Using the finest
        quality raw materials that go through the wonderful journey of turning
        into your product.
        <br /> Our goal is to provide you with timeless pieces that complete
        your spaces.
      </p>
      <section className="our-values-section">
        <AboutUsHeading heading="Our Values" />
        <div className="values-container">
          <Values
            valueHeading="Integrity:"
            valueParagraph="Ethics and honesty is one of our foundational values. We truly believe in providing good products with good values (Ethically sourced, quality controlled, fairtrade and sustainable)."
          />
          <Values
            valueHeading="Innovation:"
            valueParagraph="Working with traditional techniques does not mean we limit ourselves. At Vijaya Laxmi there is no box! We believe in constant growth."
          />
          <Values
            valueHeading="Functionality:"
            valueParagraph="Along with aesthetics, our products are designed to be practical, easy to use and timeless."
          />
          <Values
            valueHeading="Women empowerment:"
            valueParagraph="There is a huge gender gap in Nepal as most women are involved in unpaid household labour. Recognising the lack of formal employment and the need for alternative livelihood opportunities, one of the core values of VLO is to empower women through direct job opportunities, welfare plans and educational development programs."
          />
          <Values
            valueHeading="Collaboration:"
            valueParagraph="Our designs are made by working alongside local artisans and budding artists. We want to build a platform where they can showcase their talents and stories."
          />
        </div>
      </section>
      <section className="our-founders-section">
        <AboutUsHeading heading="Our Founders" />
        <img src={image} alt="founders-image" className="founders-image" />
        <div className="founders-paragaraph">
          <p>
            Vijaya Laxmi Organization is led by its co-founders Rachana
            Shrestha, Adhishree Shrestha and Tsering Kenji Sherpa, who formed
            the company in 2020.
          </p>
          <p>
            Being an interior designer, Rachana Shrestha saw the need for
            Nepalese artisanal products to evolve with the times while
            maintaining its authenticity. She partnered with co-founders
            Adhishree and Tsering who are leading the organization now. They
            were raised in the bustling city of Kathmandu, and made their way to
            Europe for their further studies and returned back to their roots
            with a sense of calling ‘to make a difference’.
          </p>
          <p>
            We are a young team that isn’t afraid to think big and blur the
            lines between modernity and tradition.
          </p>
        </div>
      </section>
      <section className="our-projects">
        <AboutUsHeading heading="Our Projects" />
        <div className="sarlahi-rug-container">
          <AboutUsSubheading subheading="Sarlahi Rug Project" />
          <p>
            Sarlahi district, located in Eastern region of Nepal, has
            traditionally been an important place of origin for Nepal’s weaving
            community. The Sarlahi Artisan Village is a project in collaboration
            with the fair trade initiative Label STEP and UKaid which aims to
            improve and strengthen the livelihood of the community through
            financial education, technical training and job opportunities under
            fair trade standard working conditions.
          </p>
          <p>
            Vijaya Laxmi is proud to be a consortium partner not only because of
            the fair trade standards but also for the strong gender equality and
            social inclusion component that is promoted in the project.
          </p>
        </div>
        <div className="sarlahi-rug-container">
          <AboutUsSubheading subheading="Thimi Ceramic Project" />
          <p>
            Thimi municipality in Bhaktapur District is well known for its
            pottery heritage. The charming town exudes some or another aspect of
            pottery in every corner. However, this craft is slowly disappearing
            due to the lack of technological growth in the sector and the
            aggressive replacement of terracotta products with plastic ones.
          </p>
          <p>
            Vijaya Laxmi is proud to be collaborating with native residents of
            Thimi, who are ceramic artisans that have learnt the knowledge and
            art of pottery-making from their ancestors. Within this
            collaboration, we seek to provide technological development with
            modern designs and functionality while staying true to the
            traditional craft.
          </p>
          <p>
            By giving continuance to this artform, this project brings your
            ceramic products to life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
