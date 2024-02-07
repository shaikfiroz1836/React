import React,{useEffect} from 'react'
import "./Navbar.css"
const Navbar = ({color}) => {
  useEffect(() => {
    alert("Hello! Welcome To This Page")
   }, [])

  useEffect(() => {
    alert("Color has changed")
  }, [color])
  
  useEffect(() => {
  alert("Navbar component is Working")
    return () => {
      alert("Component Navbar was Commented")
    }
  }, [])
  
  return (
    <div>
      <nav>
        this navbar has {color} color...
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
