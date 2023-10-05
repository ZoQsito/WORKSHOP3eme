import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard/ActivityCard";
import "./ActivityCard/stylecard.css";
import activiteAPI from "../services/activiteAPI";

function ResultAnnounce() {

  const [activities , setActivities] = useState([])
  
  const fetchActivites = async (id) => {
      const data = await activiteAPI.findAll();
      setActivities(data);
  };

  useEffect(() => {
    fetchActivites();
  }, []);

  return (
    <div className="AdPage">
      <div className="activities-list">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            title={activity.title}
            imageSrc={"https://del-house.fr/c/m/0022413/1000_1000/image_Affiche_A3_Petanque_Marseillaise.png"}
            description={activity.description}
            city={activity.ville}
            codePostal={activity.codePostal}
            startDate={activity.startDate}
            endDate={activity.endDate}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultAnnounce;