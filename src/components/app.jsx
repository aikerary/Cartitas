// Import the Header from header.jsx
import { Header } from './header.jsx';
import { Hand } from './hand.jsx';
import { Button } from './button.jsx';
import Symbol from './symbol.jsx';
// Import css from
import "../css/app.css";
import "../css/warning.css"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hand />
        <Button />
        <h2 className="warning"></h2>
        {/* Create symbol with prop symbol=question */}
        <Symbol symbol="question" />
        <Symbol symbol="star" />
        <Symbol symbol="cross" />
        <Symbol symbol="wave" />
        <Symbol symbol="square" />
      </main>
    </div>
  );
}

export { App };