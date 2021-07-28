import React from "react";
import carding from "../../images/journey-images/journey-cording.jpg";
import spinning from "../../images/journey-images/journey-spinning.jpg";
import balling from "../../images/journey-images/journey-balling.JPG";
import dyeing from "../../images/journey-images/journey-dyeing.jpg";
import weaving from "../../images/journey-images/journey-weaving.JPG";
import mainImage from "../../images/journey-images/journey-main-img.JPG";
import H1 from "../../components/text-components/h1-component";
import H2 from "../../components/text-components/h2-component";
import H3 from "../../components/text-components/h3-component";
import Paragraph from "../../components//text-components/paragraph-component";

const JourneyPageRugs = () => {
  return (
    <div className="journey-rugs-container">
      <div className="journey-rug-container-main">
        <H1 className="journey-rugs-heading" text="The Journey of your rug" />
        <div className="journey-main-image-container">
          <img className="journey-main-image" src={mainImage} />
        </div>
        <Paragraph
          className="journey-rugs-main-paragraph"
          paragraph="The journey of your rug begins with the selection of finest materials.
          From raw tibetan wool to banana silk, we source our materials with
          utmost care. Before transforming your rooms, the rug goes through
          various steps, each based on craftsmanship and tradition that has
          existed for hundreds of years."
        />
      </div>
      <div className="journey-rug-container journey-half-container carding-container">
        <H2 className="journey-rug-heading carding-heading" text="Carding" />
        <div className="journey-half-image-container">
          <img src={carding} />
        </div>
        <Paragraph
          className="journey-rug-paragraph carding-spinning-paragaraph"
          paragraph="Carding is the process of untangling and opening up the fibers of
            the raw wool. A small portion of wool is placed on the bottom carder
            and combed through with the second carder on top. When all the wool
            has been transferred from the bottom carder to the top, the carding
            combs are flipped over and the process is reversed. The rhythmic
            process is continued until a uniformity is produced in the wool."
        />
      </div>
      <div className="journey-rug-container journey-full-container spinning-container">
        <div className="spinning-info">
          <img src={spinning} />
          <div className="journey-full-info">
            <H2
              className="journey-rug-heading journey-full-heading spinning-heading"
              text="Spinning"
            />
            <Paragraph
              className="journey-rug-paragraph journey-full-paragraph spinning-paragaraph"
              paragraph="   Once carded, the wool is ready to be spun in a spinning wheel,
              also known as chakras in Nepal. This process results in the
              formation of beautiful yarn ready to be dyed into the color of
              your dream rug."
            />
          </div>
        </div>
      </div>

      <div className="journey-rug-container journey-half-container dyeing-container">
        <H2 className="journey-rug-heading dyeing-heading" text="Dyeing" />
        <div className="journey-half-image-container">
          <img src={dyeing} />
        </div>
        <Paragraph
          className="journey-rug-paragraph dyeing-paragaraph"
          paragraph=" Color plays one of the most important roles in any rug design. In this
          process, a variety of colors are sourced from a variety of methods
          from natural dyes to synthetic ones."
        />
      </div>

      <div className="journey-rug-container journey-full-container balling-container">
        <img src={balling} />
        <div className="journey-full-info">
          <H2
            className="journey-rug-heading journey-full-heading balling-heading"
            text="Balling"
          />
          <Paragraph
            className="journey-rug-paragraph journey-full-paragraph balling-paragaraph"
            paragraph="  Once dyed, the yarn is spun into balls of yarns, which makes it
            easier for the weavers to start their craft."
          />
        </div>
      </div>
      <div className="journey-rug-container journey-half-container weaving-container">
        <H2 className="journey-rug-heading weaving-heading" text="Weaving" />
        <div className="journey-half-image-container">
          <img src={weaving} />
        </div>
        <Paragraph
          className="journey-rug-paragraph weaving-paragaraph"
          paragraph="Our rugs are handwoven in Sarlahi, which has been the home of artisan
          weavers for years. Depending on the size of rugs, there are weavers
          working in each piece. Large looms, fitted vertically, become their
          canvas, where they weave harmoniously to create a piece of art."
        />
      </div>

      <div className="journey-rug-container journey-full-container washing-finishing-container">
        <img src={weaving} />
        <div className="journey-full-info">
          <H2
            className="journey-rug-heading journey-full-heading washing-finishing-heading"
            text="Washing and Finishing"
          />
          <Paragraph
            className="journey-rug-paragraph journey-full-paragraph washing-finishing-paragaraph"
            paragraph="  Prior to washing, artisans put in their final touches to even out
            and trim the rug. Once this is done, the art of washing begins where
            every piece is rinsed, cleansed and groomed with utmost care, ready
            to be shipped. Once shipped, the journey of our rug ends with us and
            begins with you."
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyPageRugs;
