import Banner from "../../components/Header/Banner/Banner";
import Destination from "./Destination";
import "./destinations.css";
import banner from "../../assets/banner.jpg";
import h1 from "../../assets/h1.jpg";
import h2 from "../../assets/h2.jpg";
import h3 from "../../assets/h3.jpg";
import h4 from "../../assets/h4.jpeg";

const Destinations = () => {
  return (
    <>
      <Banner
        maintitle="Zaph Tours: Explore Kenya's Destinations"
        description=" Don't miss out! Secure your dream adventure with Zaph Tours"
      />
      <section className="cards-details">
        <Destination
          image={h1}
          name="mt kenya"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h2}
          name="mt kenya"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h3}
          name="mt kenya"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="mt kenya"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h4}
          name="mt kenya"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="mt kenya"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="mt kenya"
          description="very cool place"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="mt kenya"
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
