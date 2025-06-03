import React from 'react'
import './Header.css'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className="header">
        <div className='lefts'>
            <img src="../src/assets/image/logo.png" alt="swiggy logo"/>
        </div>
        <div className='right'>
            <Navbar />
        </div>
    </div>
  )
}

export default Header