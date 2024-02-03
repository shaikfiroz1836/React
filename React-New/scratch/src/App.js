import './App.css';
import {useState} from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Navbar/Footer';

function App() {
  const [value,setValue]=useState(0)
  return (
    
    <div className="App">
      <Navbar logoText='Helping myself with react'/>
      
      <div>Calculator
        <div>
     
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
