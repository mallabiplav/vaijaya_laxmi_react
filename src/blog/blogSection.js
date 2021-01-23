import React from "react";
import Blog from "./blog";
import { blogArray } from "./blogArray";

const BlogSection = () => {
  return (
    <section className="blog">
      <h1 className="blog-header">Our Blog</h1>
      <div className="blog-items">
        {blogArray.map((blog, i) => {
          return <Blog key={i} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default BlogSection;
