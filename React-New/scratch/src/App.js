import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card"
function App() {
 
  return (
    
    <div className="App">
      <Navbar/>
      <div className="cards">
        <Card/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
