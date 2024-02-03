import './App.css';
import {useState} from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Navbar/Footer';

function App() {
  const [value,setValue]=useState(0)
  return (
    
    <div className="App">
      <Navbar logoText='Helping myself with react and this is a Navbar'/>
      
      <div>Calculator
        <div>
        <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Add</button>
      <button onClick={()=>{setValue(value-1)}}>Sub</button>
      <button onClick={()=>{setValue(0)}}>clear</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
