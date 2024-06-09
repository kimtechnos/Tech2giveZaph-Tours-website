import React from "react";
// import "./trips.css";

const Trips = ({ title, image, description, price }) => {
  return (
    <section className="trip-container">
      <div className="trip-card">
        <img src={image} alt={title} className="trip-image" />
        <div className="trip-details">
          <h2 className="trip-title">{title}</h2>
          <p className="trip-description">{description}</p>

          <div className="trip-prices">
            <p className="price-details">charges:${price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Trips;
