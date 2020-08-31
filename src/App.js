import React from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
