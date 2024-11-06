import React from "react";
import MainVid from "../../assets/video/main.mp4";
import Blogs from "../../pages/Blogs.jsx";

const Bannervid = () => {
  return (
    <div className="relative h-[700px">
      <video
        autoPlay
        loop
        muted
        className=" h-[400px] w-full object-cover z-[-1]"
      >
        <source src={MainVid} type="video/mp4" />
      </video>
      <Blogs />
    </div>
  );
};

export default Bannervid;
