// Import from css
import "../css/set.css";
import Symbol from "./symbol.jsx";
import { h } from "preact";

// Create a function component named set that receives
// a list of 4 symbols and then return a div element with
// the class set that contains 4 symbol elements
export function Set({ symbols, id }) {
  return (
    <div className="set" id={id}>
      {symbols.map((symbol) => (
        <Symbol symbol={symbol} />
      ))}
    </div>
  );
}

export default Set;