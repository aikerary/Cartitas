import React, { useState, useEffect } from "react";
import "./css/Card.css";

const Card = () => {
  const [card, setCard] = useState("plus");
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
    const nextIndex = (currentIndex + 1) % iconKeys.length;
    return icons[iconKeys[nextIndex]];
  };

  const handleCardClick = () => {
    setCurrentIcon((prevIcon) => {
      const iconKeys = Object.keys(icons);
      const currentIndex = iconKeys.indexOf(card);
      const nextIndex = (currentIndex + 1) % iconKeys.length;
      setCard(iconKeys[nextIndex]);
      setRotationAngle((prevAngle) => prevAngle + 360); // Rotate by 180 degrees on each click
      return icons[iconKeys[nextIndex]];
    });
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
