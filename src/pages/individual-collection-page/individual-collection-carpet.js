import React from "react";

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
          <div
            className="individual-collection-main-picture"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
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
          <h3 className="individual-collection-name">
            {collectionName} Collection
          </h3>
          <h4 className="individual-carpet-name">{title}</h4>
          {/* <p className="individual-carpet-description">{description}</p> */}
          <p className="individual-carpet-material">Material: {material}</p>
          <p className="individual-carpet-size">Size: {size}</p>
          <button className="individual-carpet-get-quote-button">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndividualCollectionCarpet;
