import React from "react";
import "./FeatureItemCard.css";

export const FeatureItemCard = ({ item }) => {
  return (
    <div className="feature-item">
      <img
        src={require(`../../assets/${item.image}`)}
        alt={item.descriptionImgae}
        className="feature-icon"
      />
      <h3 className="feature-item-title">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};
