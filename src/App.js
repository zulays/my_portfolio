import React from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
// import FsLightbox from 'fslightbox-react';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Projects />
      <Resume />
      {/* <FsLightbox /> */}
      <Contact />
    </div>
  );
}

export default App;
