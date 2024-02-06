import React,{useEffect} from 'react'
import "./Navbar.css"
const Navbar = ({color}) => {
  useEffect(() => {
    alert("Color has changed")
  }, [color])
  
  return (
    <div>
      <nav>
        this navbar has {color} color...{" "}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
