import React, { useState, useEffect } from "react";
import "./css/Switch.css"; // Asegúrate de tener el archivo CSS correspondiente

const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`switch ${isDarkMode ? "dark" : ""}`}>
      <input type="checkbox" onChange={toggleDarkMode} />
      <span className="cursor">
        <span className="moon-crater moon-crater-1"></span>
        <span className="moon-crater moon-crater-2"></span>
        <span className="moon-crater moon-crater-3"></span>
      </span>
      <span className="clouds">
        <span className="cloud-particle cloud-particle-1"></span>
        <span className="cloud-particle cloud-particle-2"></span>
        <span className="cloud-particle cloud-particle-3"></span>
        <span className="cloud-particle cloud-particle-4"></span>
        <span className="cloud-particle cloud-particle-5"></span>
        <span className="cloud-particle cloud-particle-6"></span>
        <span className="cloud-particle cloud-particle-7"></span>
      </span>
      <span className="clouds-shadow">
        <span className="cloud-particle cloud-particle-1"></span>
        <span className="cloud-particle cloud-particle-2"></span>
        <span className="cloud-particle cloud-particle-3"></span>
        <span className="cloud-particle cloud-particle-4"></span>
        <span className="cloud-particle cloud-particle-5"></span>
        <span className="cloud-particle cloud-particle-6"></span>
        <span className="cloud-particle cloud-particle-7"></span>
      </span>

      <span className="stars">
        <span className="star star-1">&#9830;</span>
        <span className="star star-2">&#9830;</span>
        <span className="star star-3">&#9830;</span>
        <span className="star star-4">&#9830;</span>
        <span className="star star-5">&#9830;</span>
        <span className="star star-6">&#9830;</span>
        <span className="star star-7">&#9830;</span>
      </span>
      <span className="background"></span>
    </div>
  );
};

export default Switch;
