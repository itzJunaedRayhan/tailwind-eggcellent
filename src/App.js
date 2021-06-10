
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
