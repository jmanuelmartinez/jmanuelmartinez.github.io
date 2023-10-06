import React from 'react';
import Navbar from './Navbar';
import './css/App.css';
import About from './About';
// import Projects from './Projects';
import Contact from './Contact';





function App() {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Blog /> */}
      {/* <Projects /> */}
      <Contact/>
    </div>
  );
}

export default App;