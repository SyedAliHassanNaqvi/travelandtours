import React from "react";

const Servicecard = ({ img, title, description }) => {
  return (
    <div className="w-full mx-auto h-full max-h-[350px] flex flex-col">
      <div className="rounded overflow-hidden shadow-lg bg-white flex flex-col h-full">
        {/* Image at the top */}
        <img
          className="w-full h-48 object-cover"
          src={img}
          alt="Service Image"
        />

        {/* Title and description container */}
        <div className="px-6 py-4 flex-grow">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
