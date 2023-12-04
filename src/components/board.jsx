import {h} from 'preact';
import {Set} from './set';
// import from css
import '../css/board.css'

// Create a function component that contains a single
// Set component with a full question list

export function Board() {
    const questions=['question', 'question', 'question', 'question'];
  return (
    <div className="board">
        <Set symbols={questions} />
    </div>
  );
}

export default Board;