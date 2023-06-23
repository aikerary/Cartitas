import React, { useState, useEffect } from "react";
import Card from "./Card";

const Deck = () => {
  const [cards, setCards] = useState(["plus", "plus", "plus", "plus", "plus"]);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const handleCardChange = (index, newCard) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[index] = newCard;
      return updatedCards;
    });
  };

  return (
    <div className="deck-container">
      {cards.map((card, index) => (
        <Card key={index} card={card} onCardChange={(newCard) => handleCardChange(index, newCard)} />
      ))}
    </div>
  );
};

export default Deck;

