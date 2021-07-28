import React from "react";
import H3 from "../../../components/text-components/h3-component";
import ParagraphComponent from "../../../components/text-components/paragraph-component";
const Blog = (props) => {
  const { image, heading, subHeading } = props.blog;

  return (
    <div
      className="blog-item"
      style={{
        background: `linear-gradient(0deg,rgba(10, 10, 10, 0.35), rgba(10, 10, 10, 0.35)), url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <H3 className="blog-item-heading" text={heading} />
      <ParagraphComponent
        className="blog-item-subheading"
        data-delay="1s"
        paragraph={subHeading}
      />
    </div>
  );
};

export default Blog;
