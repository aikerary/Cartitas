import { h, Component } from "preact";
import {Card} from "./card.jsx";
import "../css/hand.css";

export function Hand() {
    return (
        <div class="hand">
            <Card id={1} />
            <Card id={2} />
            <Card id={3} />
            <Card id={4} />
        </div>
    );
}

export default Hand;