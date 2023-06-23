import React, { useState, useEffect } from "react";
import "./css/Card.css";

const Card = ({ card, onCardChange }) => {
  const [currentIcon, setCurrentIcon] = useState("");
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    setCurrentIcon(getIcon(card));
  }, [card]);

  const icons = {
    plus: <ion-icon name="add-outline"></ion-icon>,
    star: <ion-icon name="star-outline"></ion-icon>,
    circle: <ion-icon name="ellipse-outline"></ion-icon>,
    square: <ion-icon name="square-outline"></ion-icon>,
  };

  const getIcon = (card) => {
    const iconKeys = Object.keys(icons);
    const currentIndex = iconKeys.indexOf(card);
    const nextIndex = (currentIndex) % iconKeys.length;
    return icons[iconKeys[nextIndex]];
  };

  const handleCardClick = () => {
    const iconKeys = Object.keys(icons);
    const currentIndex = iconKeys.indexOf(card);
    const nextIndex = (currentIndex + 1) % iconKeys.length;
    const newCard = iconKeys[nextIndex];
    onCardChange(newCard);
    setRotationAngle((prevAngle) => prevAngle + 360);
  };

  return (
    <div
      className="card-container"
      onClick={handleCardClick}
      style={{ transform: `rotateZ(${rotationAngle}deg)` }}
    >
      <div className="card-frame"></div>
      <div className="card-icon">{currentIcon}</div>
    </div>
  );
};

export default Card;
