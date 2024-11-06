import React from "react";
import BlogCard from "./BlogCard.jsx";
import Chitral from "../../assets/places/Chitral.jpg";
import FairyMeadows from "../../assets/places/FairyMeadows.jpg";
import Hunza from "../../assets/places/hunza.jpg";
import Skardu from "../../assets/places/Skardu.jpg";
import Img1 from "../../assets/places/img1.jpg";

const BlogsData = [
  {
    id: 1,
    image: Chitral,
    title: "The 10 best places to visit in Pakistan",
    description:
      "SKARDU,GILGIT,HUNZA,ASTORE,KASHMIR,ARANG KEL,NARAN,KAGHAN,SHARAN,MURREE",
    author: "Ali Hassan",
    data: "October, 2024",
  },
  {
    id: 2,
    image: FairyMeadows,
    title: "The 10 best places to visit in Pakistan",
    description:
      "SKARDU,GILGIT,HUNZA,ASTORE,KASHMIR,ARANG KEL,NARAN,KAGHAN,SHARAN,MURREE",
    author: "Ali Hassan",
    data: "October, 2024",
  },
  {
    id: 3,
    image: Hunza,
    title: "The 10 best places to visit in Pakistan",
    description:
      "SKARDU,GILGIT,HUNZA,ASTORE,KASHMIR,ARANG KEL,NARAN,KAGHAN,SHARAN,MURREE",
    author: "Ali Hassan",
    data: "October, 2024",
  },
  {
    id: 4,
    image: Skardu,
    title: "The 10 best places to visit in Pakistan",
    description:
      "SKARDU,GILGIT,HUNZA,ASTORE,KASHMIR,ARANG KEL,NARAN,KAGHAN,SHARAN,MURREE",
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
