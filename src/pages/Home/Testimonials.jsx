import React from "react";
import { IoStarSharp } from "react-icons/io5";
import kim from "../../assets/g4.jpg";
import k1 from "../../assets/l1.jpg";
import k3 from "../../assets/g3.jpg";

import "./testimonilas.css";

const Testimonials = () => {
  return (
    <section className="test-section">
      <div className="testimonial">
        <h2 className="test-title">Testimonials</h2>
      </div>
      <div className="test-container">
        <div className="test-card">
          <div className="test-details">
            <img src={kim} alt="Kimani" />
          </div>
          <div className="person-details">
            <p className="title">Esther</p>
            <p className="origin">Kenyan tourist</p>
          </div>
          <div className="message">
            <p>
              <i>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </i>
            </p>
          </div>
          <div className="stars">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
        </div>
        <div className="test-card">
          <div className="test-details">
            <img src={k1} alt="Kimani" />
          </div>
          <div className="person-details">
            <p className="title">bob</p>
            <p className="origin">American tourist</p>
          </div>
          <div className="message">
            <p>
              <i>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </i>
            </p>
          </div>
          <div className="stars">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
        </div>
        <div className="test-card">
          <div className="test-details">
            <img src={k3} alt="Kimani" />
          </div>
          <div className="person-details">
            <p className="title">Vic</p>
            <p className="origin">from Britain </p>
          </div>
          <div className="message">
            <p>
              <i>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </i>
            </p>
          </div>
          <div className="stars">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
