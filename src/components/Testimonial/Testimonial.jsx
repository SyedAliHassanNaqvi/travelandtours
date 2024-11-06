import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Ahmad",
    text: "A great family tour it was!",
    img: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
  },
  {
    id: 2,
    name: "Huzaifa",
    text: "A great family tour it was!",
    img: "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
  },
  {
    id: 3,
    name: "Hassan",
    text: "A great family tour it was!",
    img: "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true, // Enable autoplay for large screens
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Reviews
          </p>
          <h1 className="text-3xl font-bold">Reviews</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Here are the reviews of our beloved customers
          </p>
        </div>
        {/* testimonial section */}
        <Slider {...settings}>
          {TestimonialData.map(({ id, name, text, img }) => {
            return (
              <div key={id} className="my-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                  <img
                    src={img}
                    alt=""
                    className="rounded-full block mx-auto"
                  />
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 text-sm">{text}</p>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
{
  /*The settings object configures the behavior and appearance of the Slider component from react-slick. Here's a breakdown of each property:

dots: true
Enables navigation dots below the slider. Users can click on these dots to navigate between slides.

arrows: false
Disables the navigation arrows on the sides of the slider.

infinite: true
Enables infinite looping, so when users reach the last slide, they can continue to the first slide seamlessly.

speed: 500
Sets the transition speed (in milliseconds) for sliding between slides. In this case, each transition takes 500ms.

slidesToShow: 2
Displays two slides at a time in the slider.

slidesToScroll: 1
Moves one slide at a time when users navigate through the slider.

autoplay: true
Enables automatic sliding between slides without user interaction.

autoplaySpeed: 2000
Sets the duration (in milliseconds) each slide will be displayed before moving to the next one. Here, it’s set to 2000ms (or 2 seconds).

cssEase: "linear"
Defines the CSS easing for the slide transition animation. A linear easing means the animation has a constant speed.

pauseOnHover: true
Pauses the autoplay when the user hovers over the slider.

pauseOnFocus: true
Pauses the autoplay when the slider gains focus (e.g., when a user taps on it in mobile).

responsive: [{...}]
Contains an array of objects to define settings for different screen sizes:

Breakpoint 10000: For very large screens, the slider will display 2 slides at a time.

Breakpoint 1024: For screens 1024px wide or smaller, it will display 2 slides. The slider will start from the second slide (initialSlide: 2).

Breakpoint 640: For screens 640px wide or smaller, it will show only 1 slide at a time.

This settings object is passed as props to the <Slider /> component, controlling how the testimonial slider behaves across various screen sizes. */
}
export default Testimonial;
