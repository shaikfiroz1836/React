import React from 'react';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
class Navbar extends React.Component{
    render(){
        return <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <ul>
                    <li className='navbar-brand'>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>contact</li>
                </ul>
            </nav>
        </div>
    }
}
export default Navbar