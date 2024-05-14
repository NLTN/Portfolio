// import { Button } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className='App-main'>
        <Hero />
        <About />
        <Resume />
        <Projects />
      </div>
    </div>
  );
}

export default App;
