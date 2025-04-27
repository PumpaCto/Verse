import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default App;
