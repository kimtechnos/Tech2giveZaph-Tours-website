import Banner from "../../components/Header/Banner/Banner";
import Destination from "./Destination";
import "./destinations.css";
import banner from "../../assets/banner.jpg";

const Destinations = () => {
  return (
    <>
      <Banner
        maintitle="Zaph Tours: Explore Kenya's Destinations"
        description=" Don't miss out! Secure your dream adventure with Zaph Tours"
      />
      <section className="cards-details">
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
