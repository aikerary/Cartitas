import { h } from "preact";
import { Set } from "./set";
import {Symbol} from "./symbol.jsx";
import { render } from "preact";
import {Restart} from './restart.jsx';
import "../css/button.css";

export function Button() {
  const shuffle = (list) => {
    return list.sort(() => Math.random() - 0.5);
  };

  const correct= shuffle(['star', 'cross', 'square', 'wave']);
  let attempts= 0;
  let playing=true;

  const getIcons = () => {
    const hand = document.querySelector(".hand");
    const cards = hand.querySelectorAll(".card");
    return Array.from(cards).map((card) => card.querySelector(".icon").id);
  };

  const getHits = (list1, list2) => {
    return list1.reduce((acc, item, index) => {
      return item === list2[index] ? acc + 1 : acc;
    }, 0);
  };

  const addSet = (symbols) => {
    const hits= "hit"+getHits(symbols, correct);
    const board = document.querySelector(".board");
    const fragment = document.createDocumentFragment();
    const set = <Set symbols={symbols} id={hits} />;
    render(set, fragment);
    board.appendChild(fragment);
  };

  const setResult = (newId) => {
    const result= document.getElementById("result");
    result.innerHTML= "";
    result.id= newId;
    correct.forEach((element) => {
      const frag= document.createDocumentFragment();
      const symbol= <Symbol symbol={element} />;
      render(symbol, frag);
      result.appendChild(frag);
    });
  };

  const verifyNotRepeated = (cards, repeatedIcons) => {
    let hasRepeated = false;
    cards.forEach((card) => {
      card.classList.remove("shake");
      if (repeatedIcons.includes(card.querySelector(".icon").id)) {
        setTimeout(() => {
          card.classList.add("shake");
        }, 50);
        hasRepeated = true;
      }
    });
    return hasRepeated;
  };

  const updateAttemptsLeft=()=>{
    const attemptsLeft= document.querySelector(".attempts");
    attemptsLeft.innerText= `Attempts left: ${4-attempts}`;
  };

  const setWarningMessage = (message) => {
    const warning = document.querySelector(".warning");
    warning.innerText = message;
    warning.classList.remove("fade-in");
    setTimeout(() => {
      warning.classList.add("fade-in");
    }, 50);
  };

  // Game finished
  const gameFinished = () => {
    // Delete the current button
    const button = document.querySelector(".btn");
    button.remove();
    // Get the buttonContainer div
    const buttonContainer = document.querySelector(".buttonContainer");
    // Create a fragment
    const fragment = document.createDocumentFragment();
    // Render the restart button
    render(<Restart />, fragment);
    // Append the new button to the button
    buttonContainer.appendChild(fragment);
  }

  const handleClick = () => {
    if (attempts === 4) {
      return;
    }
    if (playing === false) {
      return;
    }
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
    addSet(icons);
    attempts++;
    updateAttemptsLeft();
    if (getHits(icons, correct) === 4) {
      playing=false;
      gameFinished();
      setResult("victory");
    }
    if (attempts === 4 && getHits(icons, correct) !== 4) {
      playing=false;
      gameFinished();
      setResult("defeat");
    }
  };

  return (
    <button class="btn" onClick={handleClick}>
      <span>Guess</span>
    </button>
  );
}

export default Button;
