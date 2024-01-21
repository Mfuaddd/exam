import React from "react";
import { Autoplay, A11y, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "./index.scss";

import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  return (
    <div className="hero">
      <Swiper
        modules={[Autoplay  , Pagination, A11y]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
          "--swiper-pagination-bullet-border-radius": "0",
        }}
      >
        <SwiperSlide>
          <div
            className="hero__slide"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg)",
            }}
          >
            <div className="hero-card">
              <div className="hero-card__title">
                Food and more<span>.</span>
              </div>
              <div className="hero-card__by">By Chef Francis Smith</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero__slide"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg)",
            }}
          >
            <div className="hero-card">
              <div className="hero-card__title">
                Special Dish<span>.</span>
              </div>
              <div className="hero-card__by">By Chef Francis Smith</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero__slide"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg)",
            }}
          >
            <div className="hero-card">
              <div className="hero-card__title">
                Hygienic Food<span>.</span>
              </div>
              <div className="hero-card__by">By Chef Francis Smith</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
