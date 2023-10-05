import React from "react";
import ActivityCard from "./ActivityCard/ActivityCard";
import "./ActivityCard/stylecard.css";

function ResultAnnounce() {
  const activities = [
    {
      id: 1,
      title: "Activité 1",
      imageSrc: "https://img.nrj.fr/M21Rwc5jMe6-0LeMtesXM-h8i7Y=/420x420/smart/medias%2F2019%2F05%2Fhiboue-rire-et-chansons_5ccab2b61bf2a.jpg",
      description: "Description de l'activité 1.",
      city: "Ville 1",
    },
    {
      id: 2,
      title: "Activité 2",
      imageSrc: "https://img.nrj.fr/M21Rwc5jMe6-0LeMtesXM-h8i7Y=/420x420/smart/medias%2F2019%2F05%2Fhiboue-rire-et-chansons_5ccab2b61bf2a.jpg",
      description: "Description de l'activité 2.",
      city: "Ville 2",
    },
    {
      id: 3,
      title: "Activité 3",
      imageSrc: "https://img.nrj.fr/M21Rwc5jMe6-0LeMtesXM-h8i7Y=/420x420/smart/medias%2F2019%2F05%2Fhiboue-rire-et-chansons_5ccab2b61bf2a.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum nunc odio, sed semper ligula viverra sit amet. Proin sed rhoncus arcu. Etiam elementum interdum est, non porta lectus faucibus in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin molestie dolor ut pharetra eleifend. Nulla ac varius nibh. Mauris aliquet in mi sit amet molestie. Sed magna lectus, aliquet eu sagittis id, maximus et tortor. Morbi sodales mauris sit amet massa efficitur, elementum mattis nibh euismod. Aliquam semper velit ac vestibulum dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla ut euismod neque. Etiam tincidunt volutpat varius. Suspendisse condimentum turpis quis sapien varius condimentum. Nunc fermentum ante eu ornare consectetur. In hac habitasse platea dictumst. Sed ligula neque, pellentesque at gravida non, dignissim suscipit ligula. Nulla facilisi. Nunc leo neque, mollis eget ex sagittis, pretium porta urna. Maecenas a mollis tortor, et viverra odio. Nullam eget dapibus mi, nec varius diam. Vestibulum ac lacinia urna. Aenean vitae malesuada augue. Praesent eget turpis sit amet magna efficitur blandit nec mollis urna. In rutrum diam nunc, at posuere sem vehicula sed. Nullam semper ex sit amet lectus interdum feugiat. Nulla eu turpis mattis, posuere nisl quis, laoreet mi. Mauris viverra molestie sem, id facilisis nunc interdum non. Duis feugiat, odio at eleifend sollicitudin, dolor odio tristique lectus, a pharetra felis risus at tortor. Duis vel odio ligula. Nam ornare tempus ullamcorper. Mauris sed convallis sapien, eu vehicula ipsum. Phasellus molestie magna luctus dui tristique, convallis blandit lorem tincidunt. Fusce molestie ante erat, nec tempus neque dignissim nec. Vivamus nibh enim, rhoncus id ante a, venenatis finibus leo. Curabitur iaculis mauris a ipsum tempus, nec malesuada lectus molestie. Aenean ut nunc quis dolor ullamcorper convallis non sed augue. Sed convallis orci massa, et porta enim dignissim nec. Etiam vehicula pulvinar dignissim. Phasellus tincidunt bibendum tortor a mollis. Suspendisse pulvinar massa sit amet consequat finibus. Ut odio felis, lobortis a quam at, auctor varius urna. Fusce id felis leo. Integer quis metus ligula. Nulla facilisi. Mauris commodo volutpat fermentum. Fusce ac auctor velit. Aenean id cursus sem, sed iaculis neque. In convallis purus vitae libero accumsan hendrerit. Proin porttitor, lorem et aliquet molestie, enim diam bibendum libero, eu bibendum ex nisl eu diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec porta nisl at mi ultricies sollicitudin pellentesque at quam. Phasellus id hendrerit mauris, a commodo ligula. Cras hendrerit, lacus id accumsan pulvinar, magna massa faucibus ligula, eget fermentum urna massa at leo. ",
      city: "Ville 3",
    },
    {
      id: 4,
      title: "Activité 4",
      imageSrc: "https://img.nrj.fr/M21Rwc5jMe6-0LeMtesXM-h8i7Y=/420x420/smart/medias%2F2019%2F05%2Fhiboue-rire-et-chansons_5ccab2b61bf2a.jpg",
      description: "Description de l'activité 4.",
      city: "Ville 4",
    },
  ];

  return (
    <div className="AdPage">
      {/* Afficher les cartes d'activités */}
      <div className="activities-list">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            title={activity.title}
            imageSrc={activity.imageSrc}
            description={activity.description}
            city={activity.city}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultAnnounce;
