// Import the Header from header.jsx
import { Header } from './header.jsx';
import { Hand } from './hand.jsx';
import { Button } from './button.jsx';
import Set from './set.jsx';
// Import css from
import "../css/app.css";
import "../css/warning.css"

function App() {
  const questions=['question', 'question', 'question', 'question'];
  return (
    <div>
      <Header />
      <main>
        <Hand />
        <Button />
        <h2 className="warning"></h2>
        <Set symbols={questions} />
      </main>
    </div>
  );
}

export { App };