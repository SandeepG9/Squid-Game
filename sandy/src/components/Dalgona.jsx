import React from 'react'
import PlayButton from './Play-Button/PlayButton'
const Dalgona = () => {
  return (
    <div className='dalgona-game-section'>
        <div className='dalgona-circle-container-1'>
            <div className='dalgona-circles'>
              <div className='dalgona-circle-shape'></div>
            </div>
            <div className='dalgona-circles'>
              <div className='dalgona-star-shape'></div>
            </div>
            </div>
        <div className='dalgona-circle-container-2'>
            <div className='dalgona-circles'>
              <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,20 20,180 180,180" stroke="black" stroke-width="1.5" fill="none"/>
              </svg></div>
            <div className='dalgona-circles'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
              <polygon points="100,10 120,70 180,70 130,110 150,170 100,130 50,170 70,110 20,70 80,70" 
                      fill="#B68400" stroke="black" stroke-width="2"/>
            </svg>
            </div>
        </div>
        <div className='dalgona-description-container'>
          <h1 className='dalgona-heading'>Dalgona</h1>
          <h1 className='dalgona-heading'>Game</h1>
          <p>
            <h3> <div className='small-square-dalgona-section'></div>Master the Dalgona Challenge!</h3>
            Test your precision and patience in the Dalgona Challenge! 
            Carve out your chosen shape from the delicate sugar candy 
            without breaking it. Will you conquer the challenge or crack 
            under pressure? Let the game begin!
          </p>
          <div className='play-button-dalgona'>
            <PlayButton/>
          </div>
        </div>
    </div>
  )
}

export default Dalgona