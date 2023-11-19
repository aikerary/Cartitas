import { h } from "preact";
// Import css from
import "../css/button.css";

export function Button() {
  // Create a function that returns all the icons from the hand element with
  // the cards and return the icons that are the id of the span into those card elements
  // into a list
  const getIcons = () => {
    const hand = document.querySelector(".hand");
    const cards = hand.querySelectorAll(".card");
    return Array.from(cards).map((card) => card.querySelector(".icon").id);
  };
  const verifyNotRepeated=(cards, repeatedIcons)=>{
    let hasRepeated = false;
    cards.forEach((card) => {
        card.classList.remove("shake");
        if (repeatedIcons.includes(card.querySelector(".icon").id)) {
            // Wait 0.05 seconds before adding the class shake
            setTimeout(() => {
                card.classList.add("shake");
            }, 50);
            hasRepeated = true;
        }
    });
    return hasRepeated;
}

  // When click if there are repeated icons
  // toggle the class shake in all card elements
  const handleClick = () => {
    const icons = getIcons();
    const repeatedIcons = icons.filter(
      (icon, index) => icons.indexOf(icon) !== index
    );
    const hand = document.querySelector(".hand");
    const cards = hand.querySelectorAll(".card");
    return verifyNotRepeated(cards, repeatedIcons);
  };

  return <button class="btn" onClick={handleClick}>
    <span>Guess</span>
    </button>;
}

export default Button;
