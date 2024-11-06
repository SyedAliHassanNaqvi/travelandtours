import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(5000);
  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid-cols-1 gap-4">
          {/* Text content section */}
          <div className="text-white">
            <p>Our Packages</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination in Pakistan
            </p>
          </div>
          {/* form section */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center py-3 sm:gap-4 md:gap-40 ">
              <div className="min-w-0 w-full sm:w-auto">
                <label htmlFor="destination" className="opacity-70">
                  Search Your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Pakistan"
                  className="w-full bg-gray-100 my-2 rounded-full p-2 focus:outline-primary focus:outline outline-1"
                />
              </div>
              <div className="min-w-0 w-full sm:w-auto">
                <label htmlFor="date" className="opacity-70">
                  Date{" "}
                  <span className="text-xs sm:text-sm">
                    (If you want to customize)
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full bg-gray-100 my-2 rounded-full p-2 focus:outline-primary focus:outline outline-1"
                />
              </div>
              {/* Price Range Slider (Optional) */}
              {/*<div className="min-w-0 w-full sm:w-auto">
                <label htmlFor="price" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">Rs {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 my-1 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="5000"
                    max="1000000"
                    value={priceValue}
                    step="500"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>*/}
            </div>
            {/* Button section */}
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
