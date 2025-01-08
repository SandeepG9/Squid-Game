import React from 'react'

const PlayGame = () => {
  return (
    <div className='playgame-container' id='play-game-section'>
        <div className='section2-right-square'></div>
        <div className='section2-profile-circle'></div>
        <div className='section2-heading'>
            <h1 className='section2-ready'>READY</h1><br />
            <h1 className='section2-play-game'>TO PLAY ?</h1>
        </div>
        <div className='section2-play-button'>
            <p>Step into a world of intense challenges and thrilling games! Inspired by the hit series, our website brings you a collection of exciting and strategic games where every move counts. Test your skills, compete with others, and see if you have what it takes to rise to the top. Are you ready to play?</p>
            <button>PLAY GAME</button>
        </div>
    </div>
  )
}

export default PlayGame
