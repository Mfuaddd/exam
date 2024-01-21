import React from "react";
import "./index.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__header">
          <div className="contact__icon">
            <i className="fa-solid fa-drumstick-bite"></i>
          </div>
          <div className="contact__title">
            <div className="contact__title__line"></div>
            Contact Us
            <div className="contact__title__line"></div>
          </div>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form__inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-mail" />
          </div>
          <textarea name="" id="" rows="10" placeholder="Message"></textarea>
        </form>
        <div className="contact__btn">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
