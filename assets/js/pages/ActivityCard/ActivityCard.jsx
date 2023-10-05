import React from "react";

function ActivityCard({ title, imageSrc, description, city, codePostal, startDate, endDate }) {
  return (
    <div className="activity-card">
      <img src={imageSrc} alt={title} className="activity-image" />
      <div className="activity-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Ville : {city}</p>
        <p>Code Postal : {codePostal}</p>
        <p>Date de Début : {startDate}</p>
        <p>Date de Fin : {endDate}</p>
      </div>
    </div>
  );
}

export default ActivityCard;
