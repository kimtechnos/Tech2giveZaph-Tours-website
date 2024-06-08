import Banner from "../../components/Header/Banner/Banner";
import "./contact.css";
import React from "react";

const Contact = () => {
  return (
    <>
      <Banner
        maintitle="Explore Kenya: Book Your Safari Today!"
        description=" Don't miss out! Secure your dream adventure with Zaph Tours"
      />
      <section className="contact-section">
        <div className="contact-section-form">
          <form className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" id="fullname" className="contact-form-input" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" className="contact-form-input" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="number" id="phone" className="contact-form-input" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="contact-form-input"></textarea>
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="contact-section-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.656919248802!2d36.86101999999998!3d-1.3824922999999905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0fbbde36bc45%3A0x6f9671d1966870ec!2sNairobi%20National%20Park!5e0!3m2!1sen!2ske!4v1717868483447!5m2!1sen!2ske"
            height="450"
            style={{ border: 0, display: "block", width: "100%" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
