import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="Navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="#" className="navbar-brand">Portfolio</a>
        <div className="ml-auto" >
            <ul className="navbar-nav">
                <li><a className="nav-link" href="#">Home</a></li>
                <li><a className="nav-link" href="#">About</a></li>
                <li><a  className="nav-link" href="#">Education</a></li>
                <li><a  className="nav-link" href="#">Projects</a></li>
                <li><a  className="nav-link" href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
      
    </div>
  )
}

export default Navbar
