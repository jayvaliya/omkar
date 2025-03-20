import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      {/* Background elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-900 to-black'></div>

        {/* Animated bubbles - Changed from orange to blue */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full'
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0.3))`,
            }}
            initial={{
              y: Math.random() * 500 + 500,
              opacity: 0,
            }}
            animate={{
              y: -200,
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-6 z-10 relative'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            className='text-center'
            initial='hidden'
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            animate={controls}>
            <motion.div
              className='mb-6'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}>
              <span className='inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 font-medium text-sm tracking-wider uppercase'>
                Refresh Your Day
              </span>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}>
              <span className='block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4'>
                Crafting Perfect
              </span>
              <span className='block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent'>
                Refreshments
              </span>
            </motion.h1>

            <motion.p
              className='text-xl text-gray-300 max-w-3xl mx-auto mb-10'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}>
              Experience the perfect blend of flavors in our handcrafted sodas.
              Made with carefully selected ingredients for a refreshing taste
              that stands out.
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row justify-center gap-4'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}>
              <motion.a
                href='#products'
                className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-medium text-lg shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/40 transition-all duration-300 transform hover:-translate-y-1'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Explore Flavors
              </motion.a>

              <motion.a
                href='#contact'
                className='px-8 py-3 bg-zinc-800 border border-zinc-700 rounded-full font-medium text-lg hover:bg-zinc-700 transition-all duration-300 transform hover:-translate-y-1'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className='mt-20 flex justify-center'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, type: 'spring' }}>
            <div className='relative'>
              <div className='absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg'></div>
              <div className='h-20 w-20 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center relative z-10'>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}>
                  <svg
                    className='w-8 h-8 text-cyan-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
