import React from 'react'
import burgerbanner from '../assets/burgerbanner.jpg'
import burgerlogo from '../assets/burger-logo.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <header>
        <img src={burgerbanner} className='banner' />
      </header>
      <div className='content'>
        <div className='messageWrapper'>
          <p>Welcome to our restaurant!</p>
          <p>ENJOY</p>
        </div>
        <div className='buttonWrapper'>
          <Link to='/menu'>
            <button>Go to Menu</button>
          </Link>
          <Link to='/about'>
            <button>See more details</button>
          </Link>
        </div>
        <img src={burgerlogo} className='burgerlogo' />
      </div>
    </div>
  )
}

export default Home
