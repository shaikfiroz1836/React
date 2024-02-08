import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card"
import { useState } from "react";

function App() {
const [value,setValue]=useState(0)
  return (
    
    
    <div className="App">
      <Navbar/>
      
      <div className="cards">
        <Card title="Card1" description="Card1 Desc"/>
        <Card title="Card2" description="Card2 Desc"/>
        <Card title="Card3" description="Card3 Desc"/>
        <Card title="Card4" description="Card4 Desc"/>
        
      </div>
       <div className="Cal">
       <h2>{value}</h2>
      <button onClick={()=>{setValue(value+1)}}>Add</button>
      <button onClick={()=>{setValue(value-1)}}>Sub</button>
       <button onClick={()=>{setValue(0)}}>Clear</button>
       </div>
      <Footer/>
    </div>
  );
}

export default App;
