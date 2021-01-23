import React from "react";

const IndividualCollectionCarpet = (props) => {
  const { rugName, rugImage } = props.rug;
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
              background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${rugImage})`,
              backgroundSize: "cover",
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
          <h3 className="individual-collection-name">Founders' Collection</h3>
          <h4 className="individual-carpet-name">{rugName}</h4>
          <p className="individual-carpet-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sit
            laborum voluptatibus similique sint autem ex beatae totam,
            blanditiis, perferendis cupiditate! Nesciunt quas non error magnam
            dolore quos, amet quam?
          </p>
          <p className="individual-carpet-material">
            Material: 90% Wool - 10% Cotton
          </p>
          <p className="individual-carpet-size">Size: 8X10</p>
          <button className="individual-carpet-get-quote-button">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndividualCollectionCarpet;
