import React from 'react'
import './Features.css'
import { Link } from 'react-router-dom'

function Features({title}) {
  return (
    <div className='features'>
            <p><Link to='/'>Home</Link></p> 
            <p>Flowers</p>
            <p>Gifts</p>
            <p>Plants</p>
            <p><Link to="/location"> Nearest Nursery</Link></p>
            <p>Explore Hybrids</p>
            <p>Sell your plants</p>
            <p>Donate Us</p>
            <p><Link to="/about">About</Link></p>
    </div>
  )
}

export default Features
