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
          description=" Hike through stunning afro-alpine landscapes and diverse ecosystems on this unforgettable expedition to Africa's second-highest mountain. "
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h2}
          name="Masai Mara National Reserve"
          description=" Witness the awe-inspiring wildebeest migration and experience the thrilling drama of predator-prey encounters in this world-renowned wildlife reserve."
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h3}
          name="Amboseli National Park"
          description="Witness the majestic beauty of Africa's highest mountain, Kilimanjaro, as a backdrop to herds of elephants and a variety of wildlife in this scenic national park. "
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="The Great Rift Valley"
          description="Journey through a geological marvel, the Great Rift Valley, and explore a landscape sculpted by millions of years of volcanic activity."
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h4}
          name="Laikipia Plateau"
          description="Explore vast landscapes, encounter diverse wildlife, and experience a commitment to conservation on the Laikipia Plateau."
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={h1}
          name="Diani Beach"
          description="The clear waters off Diani Beach are perfect for swimming, snorkeling, and diving. You can also try your hand at windsurfing, kitesurfing, or paddleboarding."
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="Meru National Par"
          description="Relax on pristine white sand beaches, bask in the warm sunshine, and enjoy the turquoise waters of the Indian Ocean"
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
        <Destination
          image={banner}
          name="Lewa Wildlife Conservancy"
          description=" Lewa is home to one of the largest populations of black rhinos in East Africa."
          link="mt.com"
          pricegroup="150/="
          priceindividual="500/="
        />
      </section>
    </>
  );
};
export default Destinations;
