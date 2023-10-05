import React, { useState } from "react";
import "./App.css"; // Assurez-vous d'avoir un fichier CSS pour les styles

function App() {
  const [count, setCount] = useState(0);

  const handleFilterClick = () => {
    // Ajoutez ici la logique pour gérer le filtre
  };

  return (
    <div className="App">
      {/* Carré rouge en haut */}
      <div className="header">
        <div className="red-square"></div>
      </div>

      {/* Bouton de filtre à droite */}
      <div className="filter-button">
        <button onClick={handleFilterClick}>Filtrer</button>
      </div>

      {/* Compteur */}
      <div className="counter">
        <p>Compteur : {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      </div>
    </div>
  );
}

export default App;
