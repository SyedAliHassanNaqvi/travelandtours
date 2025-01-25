import React from "react";
import Services from "./Services/Services";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(5000);

  return (
    <div className="bg-black/20 min-h-screen">
      <div className="flex justify-center items-center p-4 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <h1 className="my-8 py-2 text-3xl font-bold text-white text-center z-10">
              Services We Offer
            </h1>
          </div>
          {/* Form Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex justify-center items-center mb-64"
          >
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
