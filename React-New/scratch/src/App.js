import React from "react";
import CompA from './PropsEx/CompA'
import Navbar from "./Components/Navbar"
import Message from "./Components/Message";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {

  return (
    
    <div className="App">
      
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
      <Message/>  <hr />

      <CompA/>
    </div>
  );
}

export default App;
