import React from "react";

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
      <h3 className="blog-item-heading">{heading}</h3>
      <h4 className="blog-item-subheading" data-delay="1s">
        {subHeading}
      </h4>
    </div>
  );
};

export default Blog;
