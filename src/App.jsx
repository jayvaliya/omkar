import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Intro from './components/Intro';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling effect
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className='relative bg-zinc-900 text-white font-roboto'>
      {/* Animated particle background */}
      <div className='fixed inset-0 z-0'>
        <ParticleBackground />
      </div>

      {/* Content layer */}
      <div className='relative z-10'>
        <Navbar />
        <Hero />
        <Products />
        <Process />
        <Intro />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
