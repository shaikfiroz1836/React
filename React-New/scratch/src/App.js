import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card"
function App() {
 
  return (
    
    <div className="App">
      <Navbar/>
      <div className="cards">
        <Card title="Card1" description="Card1 Desc"/>
        <Card title="Card2" description="Card2 Desc"/>
        <Card title="Card3" description="Card3 Desc"/>
        <Card title="Card4" description="Card4 Desc"/>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
