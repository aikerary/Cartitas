// Import the Header from header.jsx
import { Header } from './header.jsx';
import { Hand } from './hand.jsx';
import { Button } from './button.jsx';
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
      </main>
    </div>
  );
}

export { App };