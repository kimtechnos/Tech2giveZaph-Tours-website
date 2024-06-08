import Hero from "./Hero";
import About from "./About";
import Destinations from "./Destinations";
import Testimonials from "./Testimonials";

import "./home.css";
const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Destinations />
      <Testimonials />
    </section>
  );
};
export default Home;
