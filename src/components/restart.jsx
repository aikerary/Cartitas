import { h } from "preact";
import "../css/restart.css";

export function Restart() {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <button class="btn restart" onClick={handleClick}>
      <span>Restart</span>
    </button>
  );
}

export default Restart;
