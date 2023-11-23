// Import from css
import "../css/symbol.css";
import { h } from "preact";

// Create a function component named symbol that receives
// as a prop the symbol and then return a div element with
// the symbol as id

export function Symbol({ symbol }) {
  return <div class="symbol" id={symbol}></div>;
}

export default Symbol;
