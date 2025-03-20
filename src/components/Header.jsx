import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/95 shadow-xl backdrop-blur-sm py-3'
          : 'bg-transparent py-6'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      <div className='container mx-auto px-6 flex justify-between items-center'>
        <motion.div
          className='flex items-center'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <div className='h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-red-500 mr-3 flex items-center justify-center'>
            <span className='font-bold text-xl'>RF</span>
          </div>
          <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-rose-500 bg-clip-text text-transparent'>
            Refresh<span className='font-light'>Fizz</span>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className='hidden md:block'
          variants={navVariants}
          initial='hidden'
          animate='visible'>
          <ul className='flex space-x-8'>
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <a
                  href={link.href}
                  className='font-medium text-gray-300 hover:text-cyan-400 transition-colors relative group'>
                  {link.name}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-rose-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.div
          className='md:hidden'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <button
            className='text-gray-300 focus:outline-none'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              className='w-7 h-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {mobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`md:hidden absolute w-full bg-zinc-800 border-b border-zinc-700 ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}>
        <ul className='container mx-auto px-6 py-4 space-y-3'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className='block py-2 text-gray-300 hover:text-cyan-400 transition-colors'
                onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
}
