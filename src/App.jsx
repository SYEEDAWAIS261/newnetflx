import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TVSection from './components/TVSection';
import DownloadSection from './components/DownloadSection';
import EverywhereSection from './components/EverywhereSection';
import KidsSection from './components/KidsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-100 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TVSection />
      <DownloadSection />
      <EverywhereSection />
      <KidsSection />
      <FAQSection />
      <Footer />
      </div>
  );
}

export default App;
