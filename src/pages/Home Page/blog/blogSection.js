import React from "react";
import Blog from "./blog";
import { blogArray } from "./blogArray";
import H2 from "../../../components/text-components/h2-component";

const BlogSection = () => {
  return (
    <section className="blog">
      <H2 className="blog-header" text="Our Blog" />
      <div className="blog-items">
        {blogArray.map((blog, i) => {
          return <Blog key={i} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default BlogSection;
