import { h} from "preact";
import "../css/card.css";

export function Card({ id }) {
    // Create a list of icons
    const icons = ["cross", "star", "wave", "square"];
    // Create a function that takes as an argument the actual icon
    // and return a new icon not randomly, just moving to the next one
    const nextIcon = (icon) => {
        const index = icons.indexOf(icon);
        return icons[(index + 1) % icons.length];
    };

    // When you click on card rotate it 360 degrees all the card
    const handleClick = () => {
        const card = document.querySelector(`#card-${id}`);
        card.classList.toggle("rotate");
        // Change the id of the span
        const icon = card.querySelector(".icon");
        icon.id = nextIcon(icon.id);
    };

    return (
        <div id={`card-${id}`} className="card" onClick={handleClick}>
            <span className="icon" id="cross"></span>
        </div>
    );
}

export default Card;
