import React from 'react'

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
    </div>
    </div>
  )
}

export default Navbar
