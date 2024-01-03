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
        <Set symbols={questions} id={"result"}/>
        <Board />
        <h2 className="attempts">Attempts left: 4</h2>
        <Hand />
        <div className="buttonContainer">
        <Button />
        </div>
        <h2 className="warning"></h2>
        </Fragment>
    );
}

export default Game;