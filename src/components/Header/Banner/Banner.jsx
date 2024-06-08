import "./banner.css";
const Banner = ({ maintitle, description }) => {
  return (
    <section className="banner-section">
      <h2>{maintitle}</h2>
      <p>{description}</p>
    </section>
  );
};
export default Banner;
