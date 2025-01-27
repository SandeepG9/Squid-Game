import React, { useState, useEffect } from "react";
import "./Dalgona_Game.css";

const Dalga = () => {
  const [time, setTime] = useState(10);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let IntervalId;
    if (active) {
      IntervalId = setInterval(() => {
        setTime((prev) => {
            if(prev<1)
            {
                clearInterval(IntervalId)
                return 0
            }
            else
            {
                return prev-1
            }
        })
      }, 1000);
    }
    
        return () =>clearInterval(IntervalId);
  }, [active]);

  function startGameTimer() {
    setActive(!active);
  }

  function formatTime() {
    const minutes = Math.floor(time / 60);
    const seconds = Math.abs(time % 60);
    return active ? `${minutes}:${seconds}` : "120:00";
  }
  return (
    <div className="dalgona-main-containers">
      <div className="game-container">
        <div className="shape-container">
          
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

export default Dalga;
