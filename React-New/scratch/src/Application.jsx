import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card"
import { useState, useEffect } from "react";
function Application() {
 
  const[value,setValue]=useState(0)
  const [Color, setColor] = useState(0)


useEffect(() => {
  alert("Value had changed")
  setColor(Color+1)
 }, [value])

const [Btn,setBtn]=useState(false)
  return (
    
    
    <div className="App">
      <Navbar color={"Red" + Color}/>
      
      <div className="cards">
        <Card title="Card1" description="Card1 Desc"/>
        <Card title="Card2" description="Card2 Desc"/>
        <Card title="Card3" description="Card3 Desc"/>
        <Card title="Card4" description="Card4 Desc"/>
        
      </div>
      {Btn?<button>It is True</button>:<button>It is false</button>}        <br />
      <button onClick={()=>setBtn(!Btn)}>True/False</button>
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

export default Application;
