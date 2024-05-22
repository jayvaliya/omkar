import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Products from './components/Products';


function App() {
  return (
    <div className='bg-zinc-900 text-white font-roboto'>
      <Navbar />
      <Hero />
      <Products />
      <Intro/>



      
      <Contact/>
    </div>
  );
}

export default App;
