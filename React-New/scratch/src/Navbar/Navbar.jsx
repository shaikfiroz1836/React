import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
        <div>
            <div>{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <Footer/>
    </div>
    </div>
  )
}

export default Navbar
