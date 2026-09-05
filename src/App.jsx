import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AngelJoeIntro from './components/AngelJoeIntro';
import About from './components/About';
import Experiences from './components/Experiences';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import Voices from './components/Voices';
import ContactFooter from './components/ContactFooter';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      if (window.location.hash === '#privacy') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#privacy') {
    return (
      <PrivacyPolicy 
        onBack={() => {
          window.location.hash = '#home';
        }} 
      />
    );
  }

  return (
    <main className="min-h-screen bg-ja-light font-sans text-ja-charcoal selection:bg-ja-purple/20 selection:text-ja-deep">
      <Navbar />
      <Hero />
      <AngelJoeIntro />
      <About />
      <Experiences />
      <Manifesto />
      <Gallery />
      <Voices />
      <ContactFooter />
      <WhatsAppButton />
    </main>
  );
}

export default App;
