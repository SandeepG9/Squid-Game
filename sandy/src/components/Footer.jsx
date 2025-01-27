import React, { useEffect, useState } from 'react'

const Footer = () => {

  const [currentYear,setCurrentYear] = useState('')
  useEffect(()=>{
    setCurrentYear(new Date().getFullYear())
  },[])
  
  return (
    <div className='footer'>
      <footer>
        <p>© <span id="year"></span> Squid Game {currentYear}</p>
       </footer>

    </div>
  )
}

export default Footer
