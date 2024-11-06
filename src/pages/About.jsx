import React from "react";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <div data-aos="fade-up" className="container pt-14">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          About Us
        </h1>
        <p>
          Welcome to Syed Tourism & Travels, your ultimate travel partner for
          exploring your dream destinations. We provide a comprehensive range of
          services, including reliable car rentals, comfortable hotel bookings,
          and complete tour packages tailored to suit your needs—all at
          reasonable prices. Our mission is to make travel hassle-free,
          enjoyable, and memorable for every traveler. Whether you're planning a
          solo adventure, a family vacation, or a business trip, we’re here to
          handle every detail, from comfortable rides to luxurious stays. With
          top-notch vehicles, 5-star accommodations, high-speed Wi-Fi, and
          curated experiences, we go the extra mile to ensure your journey is as
          enriching as your destination. Let us handle the logistics so you can
          focus on creating unforgettable memories. Discover the world your way,
          with Syed Tourism & Travels—where your travel needs meet exceptional
          service.
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
