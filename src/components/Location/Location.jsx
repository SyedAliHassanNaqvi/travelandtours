import React from "react";

const Location = () => {
  return (
    <div>
      <div>
        <div className="container pb-10">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl ">
            Location to visit
          </h1>
          <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.894901145171!2d74.26532759999996!3d31.44456019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017578fe396f%3A0x25ce167a2c1f06e1!2s589%20Airline%20Blvd%2C%20Airline%20Society%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730913231298!5m2!1sen!2s"
              frameborder="0"
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              style={{ borderRadius: "20px" }}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
