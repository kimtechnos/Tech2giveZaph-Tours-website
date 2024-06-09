import React from "react";

const Destination = ({
  image,
  name,
  description,
  link,
  pricegroup,
  priceindividual,
}) => {
  return (
    <>
      <div className="dest-card">
        <img src={image} alt="{name}" className="dest-image" />
        <div className="dest-details">
          <h2 className="dest-name">{name}</h2>
          <p className="dest-description">{description}</p>
          <a href={link} className="dest-link">
            Learn more
          </a>
          <div className="dest-prices">
            <p className="price-group">pice/group:${pricegroup}</p>
            <p className="price-individul">
              individul price: ${priceindividual}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Destination;
