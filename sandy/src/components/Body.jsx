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
            <div className='bottom-right-square'></div>
            <div className='top-skew'></div>
            <div className='bottom-skew'></div>
            <div className='q-circle'></div>
        </div>
    </div>
  )
}

export default Body
