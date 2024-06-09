import React from "react";
import "./home.css";
import img from "../../assets/banner.jpg";
import ke from "../../assets/mt kenya.jpg";
import rue from "../../assets/Mount-Rwenzori.jpg";
import nak from "../../assets/l nakuru.jpeg";
import tsa from "../../assets/tsavo.jpeg";

import cost from "../../assets/fort.jpeg";

const Data = [
  {
    id: 1,
    imgsrc: ke,
    desttitle: "Mt. Kenya",
    location: "Central",
    grade: "Hiking, Wildlife Viewing",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 2,
    imgsrc: rue,
    desttitle: "Mt. Ruwenzori,",
    location: "Nyanza",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to ",
  },
  {
    id: 3,
    imgsrc: nak,
    desttitle: "Lake Nakuru",
    location: "Rift",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 4,
    imgsrc: tsa,
    desttitle: "Tsavo National Park",
    location: "costal",
    grade: "",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 5,
    imgsrc: img,
    desttitle: "Nairobi national park",
    location: "Nairob",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 6,
    imgsrc: cost,
    desttitle: "Coastal Kenya",
    location: "Central",
    grade: "coast",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 3,
    imgsrc: nak,
    desttitle: "Lake Nakuru",
    location: "Rift",
    grade: "Cultural",
    price: "sh500",
    description: "The best place to be",
  },
  {
    id: 3,
    imgsrc: nak,
    desttitle: "Maasai mara ",
    location: "Rift",
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
                        <small>/=</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{price}</h5>
                    </div>
                  </div>
                  <div className="desc-page">{description}</div>
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
