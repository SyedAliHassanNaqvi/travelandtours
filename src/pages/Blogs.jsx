import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp.jsx";

const Blogs = () => {
  return (
    <div className="pt-24 min-h-[650px]bg-gray-100">
      {" "}
      {/* so that is doesnt hide below navbar */}
      <BlogsComp />
    </div>
  );
};

export default Blogs;
