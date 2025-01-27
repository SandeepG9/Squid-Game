import React, { useRef,useState, useEffect } from "react";
import "./Dalgona_Game.css";
import RectangleDalgona from "./Shapes/RectangleDalgona";

const Dalgona_Game = () => {
  const [time, setTime] = useState(600); 
  const [isActive, setIsActive] = useState(false); 
  function startGameTimer() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    let timerInterval;
    if (isActive) {
      timerInterval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerInterval); // Cleanup interval
  }, [isActive]);

  // Format Time as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(Math.abs(time) / 60);
    const seconds = Math.abs(time) % 60;
    const sign = time < 0 ? '-' : '';
    return `${sign}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="dalgona-main-containers">
      <div className="game-container">
        <div className="shape-container">
          <div className="shape-scratch-container">
            <RectangleDalgona/>
          </div>
        </div>
        <div className="timer-container">
          <h1>DALGONA GAME</h1>
          <h1>{formatTime()}</h1>
          <button className="dalgona-game-button" onClick={startGameTimer}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dalgona_Game;
