import React from "react";
import Hero from "../components/Hero";
import Places from "../components/Places/Places";
import Bannervid from "../components/Bannervid/Bannervid";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Popup from "../components/Popup/Popup.jsx";
import HeroImage from "../assets/places/northpk.jpg";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div>
      <div className="relative h-[100vh] sm:h-[100vh] lg:h-screen mt-20 bg-repeat">
        <img
          src={HeroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Optional overlay */}
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
