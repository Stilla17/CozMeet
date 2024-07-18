import React from "react";
import Slider from "react-slick";
import nature1 from "../../assets/nature1.jpg";
import nature2 from "../../assets/nature2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideSlick() {
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    swipe: true,
    waitForAnimate: false,
    slickNext: true,
    slicPrev: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={nature1} className=" object-cover" />
        </div>
        {/* <div>
          <img src={nature2} className=" object-cover" />
        </div> */}
        <div>
          <img src={nature1} className=" object-cover" />
        </div>
      </Slider>
    </div>
  );
}

export default SlideSlick;
