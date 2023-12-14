import { h } from "preact";
// Import Set
import { Set } from "./set";
// Import Symbol
import Symbol from "./symbol.jsx";
// Import something for render
import { render } from "preact";
// Import css from
import "../css/button.css";

export function Button() {
  // Create a function that takes a list and reorders it randomly
  const shuffle = (list) => {
    return list.sort(() => Math.random() - 0.5);
  };
  const correct= shuffle(['star', 'cross', 'square', 'wave']);
  let attempts= 0;
  // Create a function that returns all the icons from the hand element with
  // the cards and return the icons that are the id of the span into those card elements
  // into a list
  const getIcons = () => {
    const hand = document.querySelector(".hand");
    const cards = hand.querySelectorAll(".card");
    return Array.from(cards).map((card) => card.querySelector(".icon").id);
  };

  // Create a function that gets two lists
  // and return the number of hits between them
  // (In the same position)
  const getHits = (list1, list2) => {
    return list1.reduce((acc, item, index) => {
      return item === list2[index] ? acc + 1 : acc;
    }, 0);
  };
  // Get a function named addSet
  // that receives a list of symbols
  // and render a Set component with those symbols
  // bellow the inner html of the class board
  const addSet = (symbols) => {
    const hits= "hit"+getHits(symbols, correct);
    const board = document.querySelector(".board");
    // Get the last child of the board element
    const lastChild = board.lastElementChild;
    // Create a Fragment
    const fragment = document.createDocumentFragment();
    // Create a Set element
    const set = <Set symbols={symbols} id={hits} />;
    // Render in the fragment the set element
    render(set, fragment);
    // Add the fragment to the board
    board.appendChild(fragment);
  };
  const verifyNotRepeated = (cards, repeatedIcons) => {
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
  };

  // Create a function that receives a message and
  // search the div with the class warning and set the message
  // into the innerText property
  const setWarningMessage = (message) => {
    const warning = document.querySelector(".warning");
    warning.innerText = message;
    // Toggle the fade-in class
    warning.classList.remove("fade-in");
    // Wait 0.05 seconds before adding the class fade-in
    setTimeout(() => {
      warning.classList.add("fade-in");
    }, 50);
  };

  // When click if there are repeated icons
  // toggle the class shake in all card elements
  const handleClick = () => {
    setWarningMessage("");
    const icons = getIcons();
    const repeatedIcons = icons.filter(
      (icon, index) => icons.indexOf(icon) !== index
    );
    const hand = document.querySelector(".hand");
    const cards = hand.querySelectorAll(".card");
    const hasRepeated = verifyNotRepeated(cards, repeatedIcons);
    if (hasRepeated) {
      setWarningMessage("You have repeated icons");
      return;
    }
    if (attempts === 4) {
      return;
    }
    addSet(icons);
    attempts++;
  };

  return (
    <button class="btn" onClick={handleClick}>
      <span>Guess</span>
    </button>
  );
}

export default Button;
