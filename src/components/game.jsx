import { h } from "preact";
import { Hand } from './hand.jsx';
import { Button } from './button.jsx';
import {Board} from './board.jsx';
import {Set} from './set.jsx';
import { Fragment } from 'preact';
import "../css/warning.css"
import "../css/attempts.css"

export function Game(){
    const questions = ["question", "question", "question", "question"];
    return (
        <Fragment>
        <h2 className="attempts">Attempts left: 4</h2>
        <Hand />
        <Button />
        <h2 className="warning"></h2>
        <Set symbols={questions} id={"result"}/>
        <Board />
        </Fragment>
    );
}

export default Game;