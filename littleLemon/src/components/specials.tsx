import React from "react";

export default function Special({ title, price, description, imgSrc, imgAlt }) {
  return (
    <div className="special-container">
      <img className="special-img" src={imgSrc} alt={imgAlt}></img>
      <div className="special-text-container">
        <div className="special-price-and-title">
          <h6 className="card-title">{title}</h6>
          <p className="special-price">{price}</p>
        </div>
        <p>{description}</p>
        <a href="#" className="order-a-delivery">
          Order a delivery
        </a>
      </div>
    </div>
  );
}
