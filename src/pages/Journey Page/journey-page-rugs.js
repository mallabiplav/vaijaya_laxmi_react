import React from "react";
import cording from "../../images/journey-images/Picture1.jpg";
import balling from "../../images/journey-images/journey-balling.JPG";
import dyeing from "../../images/journey-images/journey-dyeing.jpg";
import weaving from "../../images/journey-images/journey-weaving.JPG";

const JourneyPageRugs = () => {
  return (
    <div className="journey-rugs-container">
      <div className="journey-rug-container-main">
        <h2 className="journey-rugs-heading">The Journey of your rug</h2>
        <p className="journey-rugs-main-paragraph">
          The journey of your rug begins with the selection of finest materials.
          From raw tibetan wool to banana silk, we source our materials with
          utmost care. Before transforming your rooms, the rug goes through
          various steps, each based on craftsmanship and tradition that has
          existed for hundreds of years.
        </p>
      </div>
      <div className="journey-rug-container carding-spinning-container">
        <img src={cording} />
        <h3 className="journey-rug-heading carding-spinning-heading">
          Carding and Spinning
        </h3>
        <p className="journey-rug-paragraph carding-spinning-paragaraph">
          Carding is the process of untangling and opening up the fibers of the
          raw wool. A small portion of wool is placed on the bottom carder and
          combed through with the second carder on top. When all the wool has
          been transferred from the bottom carder to the top, the carding combs
          are flipped over and the process is reversed. The rhythmic process is
          continued until a uniformity is produced in the wool.
        </p>
        <p className="journey-rug-paragraph carding-spinning-paragaraph">
          Once carded, the wool is ready to be spun in a spinning wheel, also
          known as chakras in Nepal. This process results in the formation of
          beautiful yarn ready to be dyed into the color of your dream rug.
        </p>
      </div>
      <div className="journey-rug-container dyeing-container">
        <img src={dyeing} />

        <h3 className="journey-rug-heading dyeing-heading">Dyeing</h3>
        <p className="journey-rug-paragraph dyeing-paragaraph">
          Color plays one of the most important roles in any rug design. In this
          process, a variety of colors are sourced from a variety of methods
          from natural dyes to synthetic ones.
        </p>
      </div>
      <div className="journey-rug-container balling-container">
        <img src={balling} />

        <h3 className="journey-rug-heading balling-heading">Balling</h3>
        <p className="journey-rug-paragraph balling-paragaraph">
          Once dyed, the yarn is spun into balls of yarns, which makes it easier
          for the weavers to start their craft.
        </p>
      </div>
      <div className="journey-rug-container weaving-container">
        <img src={weaving} />
        <h3 className="journey-rug-heading weaving-heading">Weaving</h3>
        <p className="journey-rug-paragraph weaving-paragaraph">
          Our rugs are handwoven in Sarlahi, which has been the home of artisan
          weavers for years. Depending on the size of rugs, there are weavers
          working in each piece. Large looms, fitted vertically, become their
          canvas, where they weave harmoniously to create a piece of art.
        </p>
      </div>
      <div className="journey-rug-container washing-finishing-container">
        <h3 className="journey-rug-heading washing-finishing-heading">
          Washing and Finishing
        </h3>
        <p className="journey-rug-paragraph washing-finishing-paragaraph">
          Prior to washing, artisans put in their final touches to even out and
          trim the rug. Once this is done, the art of washing begins where every
          piece is rinsed, cleansed and groomed with utmost care, ready to be
          shipped. Once shipped, the journey of our rug ends with us and begins
          with you.
        </p>
      </div>
    </div>
  );
};

export default JourneyPageRugs;
