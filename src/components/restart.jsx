import { h, render } from "preact";
import { Game } from "./game";
import "../css/restart.css";

export function Restart() {
  const handleClick = () => {
    // Get the main
    const main = document.querySelector("main");
    // Void the main
    main.innerHTML = "";
    // Create a fragment
    const fragment = document.createDocumentFragment();
    // Render the game in the fragment
    render(<Game />, fragment);
    // Append to the main
    main.appendChild(fragment);
  };
  return (
    <button class="btn restart" onClick={handleClick}>
      <span>Restart</span>
    </button>
  );
}

export default Restart;
