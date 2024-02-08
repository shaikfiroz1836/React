import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="Navbar navbar-dark bg-primary navbar-expand-lg">
        <a href="#" className="navbar-brand">Portfolio</a>
        <div className="ml-auto" >
            <ul className="navbar-nav">
                <li><a className="navbar-brand" href="#">Home</a></li>
                <li><a className="navbar-brand" href="#">About</a></li>
                <li><a  className="navbar-brand" href="#">Education</a></li>
                <li><a  className="navbar-brand" href="#">Projects</a></li>
                <li><a  className="navbar-brand" href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
      
    </div>
  )
}

export default Navbar
