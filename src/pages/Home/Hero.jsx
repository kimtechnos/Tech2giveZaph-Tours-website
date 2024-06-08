import hero from "../../assets/hero.mp4";
const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-textbox">
        <h2> Welcome TO ZAPH TOURS AND TRAVEL LIMITED </h2>

        <div className="hero-ctas"></div>
      </div>
    </section>
  );
};
export default Hero;
