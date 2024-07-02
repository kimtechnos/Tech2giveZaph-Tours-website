import React from "react";
import { useFormik } from "formik";
import Banner from "../../components/Header/Banner/Banner";
import "./contact.css";
import * as yup from "yup";

function Contact() {
  const validationSchema = yup.object({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(4, "Should have a minimum of 4 characters")
      .max(10, "Should have a maximum of 10 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    number: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    message: yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      number: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <Banner
        maintitle="Unforgettable Adventures Begin Here: Contact Zaph Tours"
        description="Don't miss out! Secure your dream adventure with Zaph Tours"
      />
      <section className="contact-section">
        <div className="contact-section-form">
          <form className="contact-form" onSubmit={formik.handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                className="contact-form-input"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <p className="error">{formik.errors.fullName}</p>
              ) : null}
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                className="contact-form-input"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="contact-form-group">
              <label htmlFor="number">Phone Number:</label>
              <input
                type="tel"
                id="number"
                className="contact-form-input"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.number && formik.errors.number ? (
                <p className="error">{formik.errors.number}</p>
              ) : null}
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                className="contact-form-input"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className="error">{formik.errors.message}</p>
              ) : null}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
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
}

export default Contact;
