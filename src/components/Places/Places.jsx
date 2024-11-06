import React from "react";
import Img1 from "../../assets/places/img1.jpg";
import PlacesCard from "./PlacesCard.jsx";
import FairyMeadows from "../../assets/places/FairyMeadows.jpg";
const PlacesData = [
  {
    img: Img1,
    title: "Wedding & Honeymoon tour",
    location: "Skardu",
    description:
      " Facilities include Airline Return tickets, Five Star hotel stay (2 Nights), 2 Dinner & 2 Breakfast, Limousine for one function, Prado TZ for skardu, Love Bird Cake, Bornfire, Basket of love, Decor room, Quad Bike, Dry fruit platter Sites: Upper Kachura,Lower Kachura,Shigar Fort, Blind Lake, Sarfaranga Cold Desert, Hashupi (Apple) Bagh",
    price: 35000,
    type: "Couple",
  },
  {
    img: FairyMeadows,
    title: "Wedding & Honeymoon tour",
    location: "Skardu",
    description:
      " Facilities include Airline Return tickets, Five Star hotel stay (2 Nights), 2 Dinner & 2 Breakfast, Limousine for one function, Prado TZ for skardu, Love Bird Cake, Bornfire, Basket of love, Decor room, Quad Bike, Dry fruit platter Sites: Upper Kachura,Lower Kachura,Shigar Fort, Blind Lake, Sarfaranga Cold Desert, Hashupi (Apple) Bagh",
    price: 35000,
    type: "Couple",
  },
  {
    img: Img1,
    title: "Wedding & Honeymoon tour",
    location: "Skardu",
    description:
      " Facilities include Airline Return tickets, Five Star hotel stay (2 Nights), 2 Dinner & 2 Breakfast, Limousine for one function, Prado TZ for skardu, Love Bird Cake, Bornfire, Basket of love, Decor room, Quad Bike, Dry fruit platter Sites: Upper Kachura,Lower Kachura,Shigar Fort, Blind Lake, Sarfaranga Cold Desert, Hashupi (Apple) Bagh",
    price: 35000,
    type: "Couple",
  },
  {
    img: Img1,
    title: "Wedding & Honeymoon tour",
    location: "Skardu",
    description:
      " Facilities include Airline Return tickets, Five Star hotel stay (2 Nights), 2 Dinner & 2 Breakfast, Limousine for one function, Prado TZ for skardu, Love Bird Cake, Bornfire, Basket of love, Decor room, Quad Bike, Dry fruit platter Sites: Upper Kachura,Lower Kachura,Shigar Fort, Blind Lake, Sarfaranga Cold Desert, Hashupi (Apple) Bagh",
    price: 35000,
    type: "Couple",
  },
  {
    img: Img1,
    title: "Wedding & Honeymoon tour",
    location: "Skardu",
    description:
      " Facilities include Airline Return tickets, Five Star hotel stay (2 Nights), 2 Dinner & 2 Breakfast, Limousine for one function, Prado TZ for skardu, Love Bird Cake, Bornfire, Basket of love, Decor room, Quad Bike, Dry fruit platter Sites: Upper Kachura,Lower Kachura,Shigar Fort, Blind Lake, Sarfaranga Cold Desert, Hashupi (Apple) Bagh",
    price: 35000,
    type: "Couple",
  },
  {
    img: Img1,
    title: "Wedding & Honeymoon tour",
    location: "Skardu",
    description:
      " Facilities include Airline Return tickets, Five Star hotel stay (2 Nights), 2 Dinner & 2 Breakfast, Limousine for one function, Prado TZ for skardu, Love Bird Cake, Bornfire, Basket of love, Decor room, Quad Bike, Dry fruit platter Sites: Upper Kachura,Lower Kachura,Shigar Fort, Blind Lake, Sarfaranga Cold Desert, Hashupi (Apple) Bagh",
    price: 35000,
    type: "Couple",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div data-aos="fade-up " className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit
        </h1>
        <div className="grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlacesCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}{" "}
          {/*Each item is passed to the PlacesCard component using ...item, which spreads all the properties of the object as props. */}
        </div>
      </div>
    </div>
  );
};

export default Places;
