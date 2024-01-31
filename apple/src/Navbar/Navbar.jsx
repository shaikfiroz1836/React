import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <nav className='navbar navbar bg-primary navbar-expand-lg'>
    <Link to="/home" className="navbar-brand text-white">Dance Baby Dance</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li> <Link className="navbar-brand text-white" to="/home">Home</Link> </li>
            <li> <Link className="navbar-brand text-white" to="/contacts">Contacts</Link> </li>
            <li> <Link className="navbar-brand text-white" to="/login">Login</Link> </li>
        </ul>
    </div>
  </nav>
}

export default Navbar