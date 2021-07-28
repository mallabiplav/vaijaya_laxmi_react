import React from "react";
import image from "../../images/Journey-of-your-rug.jpg";
import teamImage from "../../images/team_picture.jpg";
import AboutUsHeading from "./about-us-heading-component";
import AboutUsSubheading from "./about-us-sub-heading-component";
import Value from "./values-component";
import "../../css/aboutUsPage.css";
import ParagraphComponent from "../../components/text-components/paragraph-component";
import H1 from "../../components/text-components/h1-component";
import H2 from "../../components/text-components/h2-component";
import H3 from "../../components/text-components/h3-component";
import QuoteComponent from "./quote-component";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-main">
        <H1 text="About Us" />
        <div className="about-us-image-container">
          <img className="about-us-main-image" src={image} />
        </div>
        <div className="about-us-paragraph-container">
          <ParagraphComponent
            className="about-us-paragraph"
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
            className="about-us-paragraph"
            paragraph="We believe in balancing our business priorities with a strong sense of
          social responsibilities. We aim to promote and support local artisans
          and their crafts ethically, paving the way for centuries old techniques
          to be accessible to the world in an authentic way. Using the finest
          quality raw materials that go through the wonderful journey of turning
          into your product."
          />
          {/* <ParagraphComponent
            paragraph="Our goal is to provide you with timeless pieces that complete
          your spaces.."
          /> */}
        </div>
      </div>

      <section className="our-founders-section">
        <div className="our-founders-introduction">
          <H2 text="Our Founders" />
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
              text="We are a young team that isn’t afraid to think big and blur the
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
        <H2 text="Our Projects" />
        <div className="sarlahi-rug-container">
          <H3 text="Sarlahi Rug Project" className="right-align" />
          <div className="image-container">
            <div className="sarlahi-paragraph-container">
              <ParagraphComponent
                align="left-align"
                className="sarlahi-paragraph"
                paragraph="Sarlahi district, located in Eastern region of Nepal, has
            traditionally been an important place of origin for Nepal’s weaving
            community. The Sarlahi Artisan Village is a project in collaboration
            with the fair trade initiative Label STEP and UKaid which aims to
            improve and strengthen the livelihood of the community through
            financial education, technical training and job opportunities under
            fair trade standard working conditions.."
              />
              <ParagraphComponent
                className="sarlahi-paragraph"
                align="left-align"
                paragraph=" Vijaya Laxmi is proud to be a consortium partner not only because
              of the fair trade standards but also for the strong gender
              equality and social inclusion component that is promoted in the
              project."
              />
            </div>
            <img src={image} alt="sarlahi rug image" id="sarlahi-rug-image" />
          </div>
        </div>
        <div className="thimi-ceramics-container">
          <H3 className="left-align" text="Thimi Ceramic Project" />
          <div className="image-container">
            <img
              src={image}
              alt="thimi ceramics image"
              id="thimi-ceramics-image"
            />
            <div className="thimi-ceramics-paragraph">
              <ParagraphComponent
                className="sarlahi-paragraph"
                align="right-align"
                paragraph=" Thimi municipality in Bhaktapur District is well known for its
              pottery heritage. The charming town exudes some or another aspect of
              pottery in every corner. However, this craft is slowly disappearing
              due to the lack of technological growth in the sector and the
              aggressive replacement of terracotta products with plastic ones."
              />
              <ParagraphComponent
                className="sarlahi-paragraph"
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
