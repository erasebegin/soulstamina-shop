import React, { useEffect } from "react";

import bulmaCarousel from "bulma-carousel";
import "bulma-carousel/dist/css/bulma-carousel.min.css";

import img1 from "../images/1_iris-sunset-2_web_sign-sm.jpg";
import img2 from "../images/3_equal-but-different_2_WEB_sign-sm.jpg";
import img3 from "../images/4_introvert_main_sign-sm.jpg";
import img4 from "../images/5_winter_sign-sm.jpg";

export default function carousel() {
  useEffect(() => {
    bulmaCarousel.attach("#carousel-demo", {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      navigationSwipe: true,
      duration: 1000,
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: true,
    });
  }, []);
  return (
    <section className="hero is-medium has-carousel">
      <div
        id="carousel-demo"
        className="hero-carousel"
        style={{ objectFit: "cover" }}
      >
        <div className="item-1">
          <img src={img1} />
        </div>
        <div className="item-2">
          <img src={img2} />
        </div>
        <div className="item-3">
          <img src={img3} />
        </div>
        <div className="item-3">
          <img src={img4} />
        </div>
      </div>
      <div className="hero-head"></div>
      <div className="hero-body"></div>
      <div className="hero-foot"></div>
    </section>
  );
}
