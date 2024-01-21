import React from "react";

import { A11y, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div className="testimonials__icon">
          <i className="fa-solid fa-ice-cream"></i>
          </div>
          <div className="testimonials__title">
            <div className="testimonials__title__line"></div>
            Testimonials
            <div className="testimonials__title__line"></div>
          </div>
        </div>
        <div className="testimonials__body">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-color": "#ffffff",
              "--swiper-pagination-bullet-border-radius":"0"
            }}
          >
            <SwiperSlide>
              <div className="testimonials-card">
                <div className="testimonials-card__icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className="testimonials-card__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  possimus neque esse dolore enim odit iste, cumque illo
                  doloribus, doloremque quo! Blanditiis rerum delectus fugiat
                  laboriosam harum. Voluptas, suscipit? Laudantium at laboriosam
                  quasi neque accusantium in, ea aperiam, nisi commodi
                  consequuntur numquam. Odit, tenetur beatae nesciunt numquam
                  cumque a quis.
                </div>
                <div className="testimonials-card__author">
                  <span>Rehimli Cavad</span>, Client
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-card">
                <div className="testimonials-card__icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className="testimonials-card__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  possimus neque esse dolore enim odit iste, cumque illo
                  doloribus, doloremque quo! Blanditiis rerum delectus fugiat
                  laboriosam harum. Voluptas, suscipit? Laudantium at laboriosam
                  quasi neque accusantium in, ea aperiam, nisi commodi
                  consequuntur numquam. Odit, tenetur beatae nesciunt numquam
                  cumque a quis.
                </div>
                <div className="testimonials-card__author">
                  <span>Rehimli Cavad</span>, Client
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-card">
                <div className="testimonials-card__icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className="testimonials-card__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  possimus neque esse dolore enim odit iste, cumque illo
                  doloribus, doloremque quo! Blanditiis rerum delectus fugiat
                  laboriosam harum. Voluptas, suscipit? Laudantium at laboriosam
                  quasi neque accusantium in, ea aperiam, nisi commodi
                  consequuntur numquam. Odit, tenetur beatae nesciunt numquam
                  cumque a quis.
                </div>
                <div className="testimonials-card__author">
                  <span>Rehimli Cavad</span>, Client
                </div>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
