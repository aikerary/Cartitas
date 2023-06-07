import React, { useEffect, useState, Fragment } from 'react';

const Switch = ({ onClick, night }) => {
  return (
    <div
      className={`switch-wrapper ${!night ? "day" : "night"}`}
      tabIndex={-1}
      role="button"
      onClick={onClick}
    >
      <div className={`sun-moon-combo ${!night ? "sun" : "moon"}`}>
        <div className="moon-elem"></div>
        <div className="moon-elem"></div>
        <div className="moon-elem"></div>
      </div>
      <div className={`raybase ${night ? "hide" : "show"}`}>
        <div className="ray-1"></div>
        <div className="ray-2"></div>
        <div className="ray-3"></div>
      </div>
      <div className={`raybase-2 ${!night ? "hide" : "show"}`}>
        <div className="ray-1"></div>
        <div className="ray-2"></div>
        <div className="ray-3"></div>
      </div>
      {night && (
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          {[...Array(15)].map(() => {
            return <div className="round-star"></div>;
          })}
        </div>
      )}

      <div className="clouds-line-1" />
      <div className="clouds-line-2" />
    </div>
  );
};

export default Switch;