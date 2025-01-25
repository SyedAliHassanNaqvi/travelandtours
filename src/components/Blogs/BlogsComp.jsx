import React from "react";
import BlogCard from "./BlogCard.jsx";
import JahazBanda from "../../assets/photos/5dayjahazbanda.png";
import KashmirTour from "../../assets/photos/kashmir.png";
import SkarduTour from "../../assets/photos/skardu8day.png";
import KumratTour from "../../assets/photos/kumrat3day.png";
import Hunza from "../../assets/places/hunza.jpg";
import Skardu from "../../assets/places/Skardu.jpg";
import { GiPriceTag } from "react-icons/gi";

const BlogsData = [
  {
    id: 1,
    image: KashmirTour,
    title: "6 Day Tour upto Taobat",
    description:
      "Stay: This prestigious tour includes 1 Night stay in Sharda,1 in ArangKel,Two in Taobat, One in Muzaffarabad Including: Transportation,Hotel,Breakfast, Dinner, Jeep Rent,Mineral water(in coaster), soft drinks,Sandwich/Burger (one time),Cable Car Rent. Facilities: Coaster with fridge,Bonfire, videos&snaps, Neat & Clean rooms, Parado Jeep",
    price: "35000/- for Couples: 85000/-",
    author: "Ali Hassan",
    data: "October, 2024",
  },
  {
    id: 2,
    image: JahazBanda,
    title: "𝗘𝘅𝗽𝗹𝗼𝗿𝗲 𝗝𝗮𝗵𝗮𝘇 𝗕𝗮𝗻𝗱𝗮: 𝗬𝗼𝘂𝗿 𝗨𝗹𝘁𝗶𝗺𝗮𝘁𝗲 𝗡𝗮𝘁𝘂𝗿𝗲 𝗘𝘀𝗰𝗮𝗽𝗲",
    description:
      " Escape the hustle and bustle of city life and embark on an unforgettable adventure to Jahaz Banda with Syed Tourism and Travels! 🌿Immerse yourself in the breathtaking beauty of nature as you explore lush green meadows and majestic mountains. 🏞️Our 5-day tour package, priced at just Rs. 20,000, promises an experience of a lifetime.Book your spot today and get ready for an unforgettable journey! 🚌✨",
    price: "20,000/-",
    author: "Ali Hassan",
    data: "October, 2024",
  },
  {
    id: 3,
    image: SkarduTour,
    title: "8 Day grand tour to Skardu",
    description:
      "❄️ Discover Skardu: Venture into the heart of Skardu with our 8-day tour. From rugged mountains to serene lakes, Skardu has it all! 🏔️",
    price: "32,000/-",
    author: "Ali Hassan",
    data: "October, 2024",
  },
  {
    id: 4,
    image: KumratTour,
    title: "3 Day tour to Kumrat Valley",
    description:
      "🌿 Kumrat Valley 3-Day Tour: Lose yourself in the pristine beauty of Kumrat Valley for just Rs. 14,000! Nature lovers, this is your paradise! 🏞️       Its a 3 day tour including facilities of Hotel,Transport and food",
    price: "14000/-",
    author: "Ali Hassan",
    data: "October, 2024",
  },
];

const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {BlogsData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
