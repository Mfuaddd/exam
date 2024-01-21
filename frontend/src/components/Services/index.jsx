import React from "react";
import "./index.scss";

function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="services__icon">
            <i className="fa-solid fa-spoon"></i>
          </div>
          <div className="services__title">
            <div className="services__title__line"></div>
            Our Services
            <div className="services__title__line"></div>
          </div>
        </div>
        <div className="services__body">
          <div className="services-card">
            <div className="services-card__icon">
              <i className="fa-solid fa-mug-saucer"></i>
            </div>
            <div className="services-card__title">Breakfast</div>
            <div className="services-card__text">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </div>
          </div>
          <div className="services-card">
            <div className="services-card__icon">
              <i className="fa-solid fa-mug-saucer"></i>
            </div>
            <div className="services-card__title">Brunch</div>
            <div className="services-card__text">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </div>
          </div>
          <div className="services-card">
            <div className="services-card__icon">
              <i className="fa-solid fa-cake-candles"></i>
            </div>
            <div className="services-card__title">Lunch</div>
            <div className="services-card__text">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </div>
          </div>
          <div className="services-card">
            <div className="services-card__icon">
              <i className="fa-solid fa-burger"></i>
            </div>
            <div className="services-card__title">Dinner</div>
            <div className="services-card__text">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
