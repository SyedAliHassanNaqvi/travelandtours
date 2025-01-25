import React from "react";
import Servicecard from "./Servicecard";
import Carssc from "../../assets/places/carsc.jpg";
import Customsc from "../../assets/places/customsc.jpg";
import Travelsc from "../../assets/places/travelsc.jpg";

const Services = () => {
  const ServiceData = [
    {
      id: 1,
      img: Travelsc,
      title: "Tours",
      description: "We provide  tours all across Pakistan.",
    },
    {
      id: 2,
      img: Customsc,
      title: "Customized Tours",
      description: "We also provide custom tours with best ever services.",
    },
    {
      id: 3,
      img: Carssc,
      title: "Rent A Car",
      description: "Provide cars on rent at best prices.",
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex justify-center gap-2">
        {ServiceData.map((item) => (
          <Servicecard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
