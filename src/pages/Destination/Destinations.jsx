import Banner from "../../components/Header/Banner/Banner";
import Destination from "./Destination";
import "./destinations.css";
import banner from "../../assets/banner.jpg";
import h1 from "../../assets/h1.jpg";
import h2 from "../../assets/h2.jpg";
import h3 from "../../assets/h3.jpg";
import h4 from "../../assets/h4.jpeg";
import h5 from "../../assets/mara.jpeg";
import h6 from "../../assets/mt kenya.jpg";

const Destinations = () => {
  return (
    <>
      <Banner
        maintitle="Zaph Tours: Explore Kenya's Destinations"
        description=" Don't miss out! Secure your dream adventure with Zaph Tours"
      />
      <section className="cards-details">
        <Destination
          image={h6}
          name="mt kenya"
          description="Hike through stunning landscapes and diverse ecosystems on this unforgettable expedition to Africa's second-highest mountain. "
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h2}
          name="Masai Mara National Reserve"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h3}
          name="Amboseli National Park"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="The Great Rift Valley"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h4}
          name="Laikipia Plateau"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h1}
          name="Diani Beach"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="Meru National Par"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="Lewa Wildlife Conservancy"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
      </section>
    </>
  );
};
export default Destinations;
