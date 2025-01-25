import React from "react";
import { MdFlight, MdLocalTaxi, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import UhsVid from "../../assets/video/uhs.mp4";
import BbyVid from "../../assets/video/bby.mp4";
import Review2Vid from "../../assets/video/review2.mp4";
import ReviewVid from "../../assets/video/review.mp4";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Video Section */}
            <div className="col-span-1 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <video
                data-aos="flip-up"
                autoPlay
                loop
                muted
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src={UhsVid} type="video/mp4" />
              </video>
              <video
                data-aos="flip-up"
                autoPlay
                loop
                muted
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src={Review2Vid} type="video/mp4" />
              </video>
              <video
                data-aos="flip-up"
                autoPlay
                loop
                muted
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src={BbyVid} type="video/mp4" />
              </video>
              <video
                data-aos="flip-up"
                autoPlay
                loop
                muted
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src={ReviewVid} type="video/mp4" />
              </video>
            </div>

            {/* Text Content Section */}
            <div className="text-center lg:text-left lg:max-w-xs">
              <h1
                data-aos="fade-up"
                className="text-2xl font-bold sm:text-3xl mb-2"
              >
                Our Past Tours
              </h1>
              <p
                data-aos="fade-up"
                className="text-gray-700 text-sm sm:text-base"
              >
                Our customers are our pride. Great reviews from all over
                Pakistan.
              </p>
              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MdLocalTaxi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 " />
                    <p>Travel</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " />
                    <p>Hotel</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 " />
                    <p>Wi-fi</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 " />
                    <p>Food</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
