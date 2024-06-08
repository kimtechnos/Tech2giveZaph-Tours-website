import Hero from "./Hero";
import About from "./About";
import Destinations from "./Destinations";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

import "./home.css";
const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Destinations />
      <Testimonials />
      <Newsletter />
    </section>
  );
};
export default Home;
