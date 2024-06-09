import Banner from "../../components/Header/Banner/Banner";
import React from "react";
import Trips from "./Trips";
import img from "../../assets/banner.jpg";
import "./trips.css";

const TripType = () => {
  return (
    <>
      <Banner
        maintitle="Explore Kenya: Book Your Safari Today!"
        description=" Don't miss out! Secure your dream adventure with Zaph Tours"
      />

      <section className="trips-container">
        <Trips
          title="honeymoon"
          image={img}
          description="This page will contain section for different packages, for each package, you need to have the following:"
          price="500/="
        />
        <Trips
          title="honeymoon"
          image={img}
          description="This page will contain section for different packages, for each package, you need to have the following:"
          price="500/="
        />
        <Trips
          title="honeymoon"
          image={img}
          description="This page will contain section for different packages, for each package, you need to have the following:"
          price="500/="
        />
        <Trips
          title="honeymoon"
          image={img}
          description="This page will contain section for different packages, for each package, you need to have the following:"
          price="500/="
        />
        <Trips
          title="honeymoon"
          image={img}
          description="This page will contain section for different packages, for each package, you need to have the following:"
          price="500/="
        />
        <Trips
          title="honeymoon"
          image={img}
          description="This page will contain section for different packages, for each package, you need to have the following:"
          price="500/="
        />
      </section>
    </>
  );
};
export default TripType;
