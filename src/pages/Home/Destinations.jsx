import React from "react";
import "./home.css";
import img from "../../assets/banner.jpg";

const Data = [
  {
    id: 1,
    imgsrc: img,
    desttitle: "Mt. Kenya",
    location: "Central",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 2,
    imgsrc: img,
    desttitle: "Mt. Kenya",
    location: "Central",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 3,
    imgsrc: img,
    desttitle: "Mt. Kenya",
    location: "Central",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 4,
    imgsrc: img,
    desttitle: "Mt. Kenya",
    location: "Central",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 5,
    imgsrc: img,
    desttitle: "Mt. Kenya",
    location: "Central",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 6,
    imgsrc: img,
    desttitle: "Mt. Kenya",
    location: "Central",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
];

const Destinations = () => {
  return (
    <section className="main-section">
      <div className="sec-title">
        <h3 className="title">Popular Destinations</h3>
      </div>
      <div className="section-grid">
        {Data.map(
          ({ id, imgsrc, desttitle, location, price, description, grade }) => {
            return (
              <div key={id} className="single-destination">
                <div className="imagediv">
                  <img src={imgsrc} alt={desttitle} />
                </div>
                <div className="card-info">
                  <h4 className="dest-title">{desttitle}</h4>
                  <span className="name-flex">
                    <span className="location">{location}</span>
                  </span>
                  <div className="price-flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{price}</h5>
                    </div>
                  </div>
                  <div className="desc">{description}</div>
                  <button className="btn flex">Book Now</button>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Destinations;
