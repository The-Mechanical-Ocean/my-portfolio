import React from 'react';
import './CardSkills.css';

function CardSkills({ card }) {
  // const [isClick, setIsClick] = React.useState(false);

  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={card.image} alt="card img" />
      </div>
      <p className="card__text">{card.name}</p>
      <div className="card__image-stars-container">
        <img
          className="card__image-stars"
          src={card.imageStars}
          alt="card img"
        />
      </div>
    </div>
  );
}

export default CardSkills;
