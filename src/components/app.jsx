// Import the Header from header.jsx
import { Header } from './header.jsx';
import { Game } from './game.jsx';
// Import css from
import "../css/app.css";

function App() {
  const questions = ["question", "question", "question", "question"];
  return (
    <div>
      <Header />
      <main>
        <Game></Game>
      </main>
    </div>
  );
}

export { App };