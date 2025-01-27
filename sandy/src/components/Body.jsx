import React from 'react'

const Body = () => {
  return (
    <div className='body-container'>
        <div >
            <h1 className='squid'>SQUID</h1>
            <br />
            <h1 className='game'>GAME</h1>
        </div>
        <div className='shapes'>
            <div className='top-right-circle'></div>
            <div className='left-middle-triangle'>
                <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="200,80 80,360 360,360" stroke="#085246" stroke-width="50" fill="none"/>
                </svg>
            </div>
            <div className='bottom-right-square'></div>
            <div className='top-skew'></div>
            <div className='bottom-skew'></div>
            <div className='q-circle'></div>
        </div>
    </div>
  )
}

export default Body
