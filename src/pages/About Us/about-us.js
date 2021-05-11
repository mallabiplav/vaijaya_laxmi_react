import React from "react";
import image from "../../images/Journey-of-your-rug.jpg";
import teamImage from "../../images/team_picture.jpg";
import AboutUsHeading from "./about-us-heading-component";
import AboutUsSubheading from "./about-us-sub-heading-component";
import Value from "./values-component";
import "../../css/aboutUsPage.css";
import ParagraphComponent from "./paragraph-component";
import QuoteComponent from "./quote-component";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <AboutUsHeading heading="About Us" />
      <img className="about-us-main-image" src={image} />
      <ParagraphComponent
        paragraph="Vijaya Laxmi is an organization that started with a simple thought of
        providing good products with good values. Producing quality highland
        crafts like hand-knotted rugs, ceramics, dhurries, dhaka fabrics,
        pashmina and so on. We are based in Kathmandu, the foothills of the
        majestic Himalayas working with a network of artisans throughout Nepal.
        With the blend of ancient hinduism and tibetan buddhism culminating into
        the culture now revered for our ancient arts and craft. Vijaya Laxmi
        Organization aims to bring light to these artisanal crafts and
        craftsmanship with a modern approach.
      
       "
      />
      <ParagraphComponent
        paragraph="We believe in balancing our business priorities with a strong sense of
        social responsibilities. We aim to promote and support local artisans
        and their crafts ethically, paving the way for centuries old techniques
        to be accessible to the world in an authentic way. Using the finest
        quality raw materials that go through the wonderful journey of turning
        into your product."
      />
      <ParagraphComponent
        paragraph="Our goal is to provide you with timeless pieces that complete
        your spaces.."
      />

      {/* <section className="our-values-section">
        <AboutUsHeading heading="Our Values" />
        <div className="values-container">
          <Value
            valueHeading="Integrity:"
            valueParagraph="Ethics and honesty is one of our foundational values. We truly believe in providing good products with good values (Ethically sourced, quality controlled, fairtrade and sustainable)."
          />
          <Value
            valueHeading="Innovation:"
            valueParagraph="Working with traditional techniques does not mean we limit ourselves. At Vijaya Laxmi there is no box! We believe in constant growth."
          />
          <Value
            valueHeading="Functionality:"
            valueParagraph="Along with aesthetics, our products are designed to be practical, easy to use and timeless."
          />
          <Value
            valueHeading="Women empowerment:"
            valueParagraph="There is a huge gender gap in Nepal as most women are involved in unpaid household labour. Recognising the lack of formal employment and the need for alternative livelihood opportunities, one of the core values of VLO is to empower women through direct job opportunities, welfare plans and educational development programs."
          />
          <Value
            valueHeading="Collaboration:"
            valueParagraph="Our designs are made by working alongside local artisans and budding artists. We want to build a platform where they can showcase their talents and stories."
          />
        </div>
      </section> */}
      <section className="our-founders-section">
        <div className="our-founders-introduction">
          <AboutUsHeading heading="Our Founders" />
          <ParagraphComponent
            paragraph="Vijaya Laxmi Organization is led by its co-founders Rachana Shrestha,
          Adhishree Shrestha and Tsering Kenji Sherpa, who formed the company in
          2020."
          />
        </div>
        <div className="founders-image-container">
          <img
            src={teamImage}
            alt="founders-image"
            className="about-us-founders-image"
          />
        </div>
        <div className="founders-info-container">
          <div className="quote-container">
            <QuoteComponent
              quote="We are a young team that isn’t afraid to think big and blur the
            lines between modernity and tradition."
            />
          </div>
          <div className="founders-paragaraph">
            <ParagraphComponent
              align="left-align"
              paragraph=" Being an interior designer, Rachana Shrestha saw the need for
            Nepalese artisanal products to evolve with the times while
            maintaining its authenticity. She partnered with co-founders
            Adhishree and Tsering who are leading the organization now. They
            were raised in the bustling city of Kathmandu, and made their way to
            Europe for their further studies and returned back to their roots
            with a sense of calling ‘to make a difference’."
            />
          </div>
        </div>
      </section>
      <section className="our-projects">
        <AboutUsHeading heading="Our Projects" />
        <div className="sarlahi-rug-container">
          <AboutUsSubheading
            align="left-align"
            subHeading="Sarlahi Rug Project"
          />

          <div className="image-container">
            <div className="sarlahi-paragraph">
              <ParagraphComponent
                align="left-align"
                paragraph="Sarlahi district, located in Eastern region of Nepal, has
            traditionally been an important place of origin for Nepal’s weaving
            community. The Sarlahi Artisan Village is a project in collaboration
            with the fair trade initiative Label STEP and UKaid which aims to
            improve and strengthen the livelihood of the community through
            financial education, technical training and job opportunities under
            fair trade standard working conditions.."
              />
              <ParagraphComponent
                align="left-align"
                paragraph=" Vijaya Laxmi is proud to be a consortium partner not only because
              of the fair trade standards but also for the strong gender
              equality and social inclusion component that is promoted in the
              project."
              />
            </div>
            <img src={image} alt="" id="sarlahi-rug-image" />
          </div>
        </div>
        <div className="thimi-ceramics-container">
          <AboutUsSubheading
            align="right-align"
            subHeading="Thimi Ceramic Project"
          />
          <div className="image-container">
            <img src={image} alt="" id="thimi-ceramics-image" />
            <div className="thimi-ceramics-paragraph">
              <ParagraphComponent
                align="right-align"
                paragraph=" Thimi municipality in Bhaktapur District is well known for its
              pottery heritage. The charming town exudes some or another aspect of
              pottery in every corner. However, this craft is slowly disappearing
              due to the lack of technological growth in the sector and the
              aggressive replacement of terracotta products with plastic ones."
              />
              <ParagraphComponent
                align="right-align"
                paragraph="  Vijaya Laxmi is proud to be collaborating with native residents of
              Thimi, who are ceramic artisans that have learnt the knowledge and
              art of pottery-making from their ancestors. Within this
              collaboration, we seek to provide technological development with
              modern designs and functionality while staying true to the
              traditional craft."
              />
              <ParagraphComponent
                align="right-align"
                paragraph="By giving continuance to this artform, this project brings your
              ceramic products to life."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
