import React from 'react'
import './PlayButton.css'
import { useNavigate } from 'react-router'
const PlayButton = () => {
  const navigate = useNavigate()

  return (
    <>
        <button className='play-game-button' onClick={()=>{navigate('/games/dalgona')}}>Play</button>
    </>
  )
}

export default PlayButton
