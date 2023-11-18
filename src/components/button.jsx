import { h } from "preact";

export function Button() {
  // Create a function that returns all the icons from the hand element with
  // the cards and return the icons that are the id of the span into those card elements
  // into a list
  const getIcons = () => {
    const hand = document.querySelector(".hand");
    const cards = hand.querySelectorAll(".card");
    return Array.from(cards).map((card) => card.querySelector(".icon").id);
  };

  // When click if there are repeated icons
//   toggle the class shake in all card elements

    const handleClick = () => {
        const icons = getIcons();
        const repeatedIcons = icons.filter((icon, index) => icons.indexOf(icon) !== index);
        const hand = document.querySelector(".hand");
        const cards = hand.querySelectorAll(".card");
        cards.forEach((card) => {
            if (repeatedIcons.includes(card.querySelector(".icon").id)) {
                card.classList.toggle("shake");
                return;
            }
        });
    }

  return <button onClick={handleClick}>Guess</button>;
}

export default Button;
