import React from "react";
import Places from "../components/Places/Places.jsx";

const PlacesRoute = () => {
  return (
    <div className="pt-14">
      {" "}
      {/* so that is doesnt hide below navbar */}
      <Places />
    </div>
  );
};

export default PlacesRoute;
