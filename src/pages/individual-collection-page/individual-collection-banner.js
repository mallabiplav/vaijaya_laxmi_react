import React from "react";
import H2 from "../../components/text-components/h2-component";
import ParagraphComponent from "../../components/text-components/paragraph-component";
import BlockContent from "@sanity/block-content-to-react";

const IndividualCollectiionBanner = (props) => {
  const collectionName = props.collectionInformation;
  const collectionBannerImg = props.collectionBannerImg;
  const collectionText = props.collectionText;

  return (
    <div className="individual-collection-header">
      <div
        className="individualCollectionBanner"
        style={{
          background: `url(${collectionBannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <H2 text={`${collectionName} Collection`} />
      </div>
      <div className="individual-collection-description">
        <ParagraphComponent
          paragraph={
            <BlockContent
              className=""
              blocks={collectionText}
              projectId="zqet06tp"
              dataset="production"
            />
          }
        />

        {/* <ParagraphComponent
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sit
          laborum voluptatibus similique sint autem ex beatae totam, blanditiis,
          perferendis cupiditate! Nesciunt quas non error magnam dolore quos,
          amet quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          NuNesciunt quas non error magnam dolore quos, amet quam?"
        /> */}
      </div>
    </div>
  );
};

export default IndividualCollectiionBanner;
