import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import Voices from './components/Voices';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <main className="min-h-screen bg-ja-light font-sans text-ja-charcoal selection:bg-ja-purple/20 selection:text-ja-deep overflow-x-hidden max-w-full relative w-full">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Manifesto />
      <Gallery />
      <Voices />
      <ContactFooter />
    </main>
  );
}

export default App;
