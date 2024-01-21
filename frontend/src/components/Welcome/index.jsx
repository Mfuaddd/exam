import React from "react";
import "./index.scss";

function Welcome() {
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome__header">
          <div className="welcome__icon">
            <i className="fa-regular fa-lemon"></i>
          </div>
          <div className="welcome__title">
            <div className="welcome__title__line"></div>
            Welcome
            <div className="welcome__title__line"></div>
          </div>
        </div>
        <div className="welcome__body">
          <div className="welcome-card">
            <div className="welcome-card__title">2002</div>
            <div className="welcome-card__text">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </div>
          </div>
          <div className="welcome-card">
            <div className="welcome-card__title">2010</div>
            <div className="welcome-card__text">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </div>
          </div>
          <div className="welcome-card">
            <div className="welcome-card__title">2018</div>
            <div className="welcome-card__text">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </div>
          </div>
        </div>
        <div className="welcome__footer">
          <img
            src="https://preview.colorlib.com/theme/pulse/img/sign.png"
            alt="WelcomeImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
