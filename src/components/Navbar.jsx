import React from 'react'
import logoImg from '../images/logoimage.png'
import './Nav.css'
import Home from './Home'


function Navbar() {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={logoImg} alt='ChefMate' />

      </div>
      <div className='list'>
        <ul>
          <li><a href="#Home">Home</a></li>
          
          <li><a href="#recipes">recipes</a></li>
            <li><a href="#tips">Quick Tips</a></li>
            <li><a href="#Foot">Meet Us</a></li>
            <li><a href="#search">🔍︎</a></li>

        </ul> 
      </div>
    </div>
  )
}

export default Navbar