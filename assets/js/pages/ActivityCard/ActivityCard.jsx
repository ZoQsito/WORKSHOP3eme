import React from "react";

function ActivityCard({ title, imageSrc, description, city }) {
  return (
    <div className="activity-card">
      <img src={imageSrc} alt={title} className="activity-image" />
      <div className="activity-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Ville : {city}</p>
      </div>
    </div>
  );
}

export default ActivityCard;
