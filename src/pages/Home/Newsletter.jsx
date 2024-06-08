import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="section-newsletter">
      <h2 className="title">Subscribe to our newsletter!</h2>
      <div className="form">
        <form className="sec-form">
          <input
            className="email"
            type="email"
            placeholder="Enter your email address "
            required
          />
          <button className="submit" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
