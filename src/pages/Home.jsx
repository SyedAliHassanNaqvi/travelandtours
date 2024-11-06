import React from "react";
import MainVid from "../assets/video/main.mp4";
import Hero from "../components/Hero";
import Places from "../components/Places/Places";
import Bannervid from "../components/Bannervid/Bannervid";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Popup from "../components/Popup/Popup.jsx";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div>
      <div className="relative h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={MainVid} type="video/mp4" />
        </video>
        <Hero />
      </div>
      <Places handleOrderPopup={handleOrderPopup} />
      <Bannervid />
      <Banner />
      <Testimonial />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Home;
