// import { Button } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className='App-main'>
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
