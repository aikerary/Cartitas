// Import the Header from header.jsx
import { Header } from './header.jsx';
import { Hand } from './hand.jsx';
import { Button } from './button.jsx';
// Import css from
import "../css/app.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hand />
        <Button />
      </main>
    </div>
  );
}

export { App };