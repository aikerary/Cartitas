// Import the Header from header.jsx
import { Header } from './header.jsx';
import { Hand } from './hand.jsx';
import { Button } from './button.jsx';
import {Board} from './board.jsx';
import {Set} from './set.jsx';
// Import css from
import "../css/app.css";
import "../css/warning.css"
import "../css/attempts.css"

function App() {
  const questions = ["question", "question", "question", "question"];
  return (
    <div>
      <Header />
      <main>
        <h2 className="attempts">Attempts left: 4</h2>
        <Hand />
        <Button />
        <h2 className="warning"></h2>
        <Set symbols={questions} id={"result"}/>
        <Board />
      </main>
    </div>
  );
}

export { App };