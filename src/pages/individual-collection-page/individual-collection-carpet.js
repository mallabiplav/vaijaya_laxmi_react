import React from "react";
import ParagraphComponent from "../../components/text-components/paragraph-component";
import H3 from "../../components/text-components/h3-component";
import H4 from "../../components/text-components/h4-component";
const IndividualCollectionCarpet = (props) => {
  const { title, description, size, material, imageUrl } = props.rug;
  const collectionName = props.collectionName;

  const { setShowItem } = props;
  // console.log(showItem, "ASASDASD");

  return (
    <section className="individual-collection-carpet-info outer-popup">
      <div className="inner-popup">
        <div
          className="close-popup"
          onClick={() => {
            setShowItem(false);
            // return setShowItem;
          }}
        >
          X
        </div>
        <div className="individual-carpet-info-left-col">
          <img
            src={imageUrl}
            alt="carpet"
            className="individual-collection-main-picture"
          />

          {/* <div className="individual-collection-secondary-pictures">
            <div className="individual-collection-secondary-picture"></div>
            <div className="individual-collection-secondary-picture"></div>
            <div className="individual-collection-secondary-picture"></div>
            <div className="individual-collection-secondary-picture"></div>
            <div className="individual-collection-secondary-picture"></div>
            <div className="individual-collection-secondary-picture"></div>
          </div> */}
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
          <button className="individual-carpet-get-quote-button">
            Get Quote
          </button>
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
    </section>
  );
};

export default IndividualCollectionCarpet;
