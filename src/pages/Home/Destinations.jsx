import React from "react";
import "./home.css";
import img from "../../assets/banner.jpg";
import ke from "../../assets/mt kenya.jpg";
import rue from "../../assets/Mount-Rwenzori.jpg";
import nak from "../../assets/l nakuru.jpeg";
import tsa from "../../assets/tsavo.jpeg";
import mara from "../../assets/mara.jpeg";

import cost from "../../assets/fort.jpeg";

const Data = [
  {
    id: 1,
    imgsrc: ke,
    desttitle: "Mt. Kenya",
    location: "Central",
    grade: "Hiking, Wildlife Viewing",
    price: "sh500",
    description:
      "Explore the tallest peak in Kenya, Mt. Kenya, offering diverse landscapes and incredible wildlife encounters.",
  },
  {
    id: 2,
    imgsrc: rue,
    desttitle: "Mt. Ruwenzori,",
    location: "Nyanza",
    grade: "Hiking",
    price: "sh300",
    description:
      "Dive into the cultural richness of Mt. Ruwenzori in Nyanza, where ancient traditions meet breathtaking scenery ",
  },
  {
    id: 3,
    imgsrc: nak,
    desttitle: "Lake Nakuru",
    location: "Rift",
    grade: "Flamingos",
    price: "sh400",
    description:
      "Discover the vibrant birdlife and captivating beauty of Lake Nakuru in the Rift Valley, a haven for nature lovers.",
  },
  {
    id: 4,
    imgsrc: tsa,
    desttitle: "Tsavo National Park",
    location: "costal",
    grade: "Wildlife, Adventure",
    price: "sh1000",
    description:
      " Experience the untamed wilderness of Tsavo National Park, a coastal sanctuary teeming with wildlife and adventure.",
  },
  {
    id: 5,
    imgsrc: img,
    desttitle: "Nairobi national park",
    location: "Nairob",
    grade: "Cultural",
    price: "sh1000",
    description:
      "Witness the unique blend of wildlife and urbanity at Nairobi National Park, a natural oasis within the city limits.",
  },
  {
    id: 6,
    imgsrc: cost,
    desttitle: "Coastal Kenya",
    location: "Central",
    grade: " Coastal Experience",
    price: "sh100",
    description:
      " Indulge in sun, sand, and sea along the captivating coastline of Kenya, a paradise of tropical allure and cultural charm.",
  },
  {
    id: 7,
    imgsrc: nak,
    desttitle: "Lake Nakuru",
    location: "Rift",
    grade: "Cultural",
    price: "sh1000",
    description:
      "Dive into the vibrant birdlife and captivating beauty of Lake Nakuru in the Rift Valley, a haven for nature lovers.",
  },
  {
    id: 8,
    imgsrc: mara,
    desttitle: "Maasai mara ",
    location: "Rift",
    grade: "Cultural",
    price: "sh2000",
    description:
      "Maasai Mara, home to the iconic Great Migration and legendary Maasai people.",
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
                      <span>{grade}</span>
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
