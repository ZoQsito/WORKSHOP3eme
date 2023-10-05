import React, { useState } from 'react';
import './style.css';

const Carousel = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handlePreviousItem = () => {
    if (currentItem > 0) {
      setCurrentItem(currentItem - 1);
    }
  };

  const handleNextItem = () => {
    if (currentItem < children.length - 1) {
      setCurrentItem(currentItem + 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={handlePreviousItem}>Thèmes précédents</button>
      {children[currentItem]}
      
      <button onClick={handleNextItem}>Thèmes suivants</button>
    </div>
  );
};

export default Carousel;
