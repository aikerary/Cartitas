// Import the Header from header.jsx
import { Header } from './header.jsx';
import { Game } from './game.jsx';
import {Footer} from './footer.jsx';
import { Fragment } from 'preact';
// Import css from
import "../css/app.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Game></Game>
      </main>
      <Footer />
    </Fragment>
  );
}

export { App };