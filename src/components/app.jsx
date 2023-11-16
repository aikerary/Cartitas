// Import the Header from header.jsx
import { Header } from './header.jsx';
import { Card } from './card.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* Use the card component with id 1 */}
        <Card id={1} />
        {/* Use the card component with id 2 */}
        <Card id={2} />
      </main>
    </div>
  );
}

export { App };