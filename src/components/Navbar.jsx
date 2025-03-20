import { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { motion } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items
  const menuItems = [
    { label: 'Home', target: '#home' },
    { label: 'Products', target: '#products' },
    { label: 'Process', target: '#process' },
    { label: 'About', target: '#about' },
    { label: 'Contact', target: '#contact' },
  ];

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/90 backdrop-blur-md py-2 shadow-xl shadow-black/10'
          : 'bg-transparent py-4'
      }`}>
      <div className='container px-6 mx-auto md:flex md:justify-between md:items-center'>
        <div className='flex items-center justify-between'>
          <motion.a
            href='#home'
            className='flex items-center gap-4'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}>
            <div className='bg-black rounded-xl border-cyan-300/50 border-2 p-2'>
              <img src={logo} alt='Omkar' className='h-9 w-auto' />
            </div>
            <div className='text-4xl font-semibold'>
              <span className='text-white'>Omkar</span>
              <span className='text-cyan-400'> Soda</span>
            </div>
          </motion.a>

          {/* Mobile menu button */}
          <div className='flex md:hidden'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='text-white focus:outline-none'>
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex md:items-center md:space-x-8`}>
          {menuItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.target}
              className='text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            mobileMenuOpen ? 'flex' : 'hidden'
          } flex-col absolute top-full left-0 w-full bg-zinc-800 md:hidden shadow-xl rounded-b-xl overflow-hidden`}>
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.target}
              onClick={() => setMobileMenuOpen(false)}
              className='py-4 px-6 text-center text-gray-300 hover:bg-zinc-700 transition-colors'>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
