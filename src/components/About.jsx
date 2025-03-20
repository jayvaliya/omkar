import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  const stats = [
    { value: '30+', label: 'Years of Experience' },
    { value: '15+', label: 'Unique Flavors' },
    { value: '1M+', label: 'Bottles Produced Monthly' },
    { value: '100%', label: 'Quality Guaranteed' },
  ];

  return (
    <section
      id='about'
      ref={ref}
      className='py-24 bg-zinc-900 relative overflow-hidden'>
      {/* Decorative elements */}
      <motion.div
        className='absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className='absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row gap-16 items-center'>
          <motion.div
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h2 className='text-cyan-400 text-xl font-semibold uppercase tracking-wider mb-4'>
              Our Story
            </h2>
            <h3 className='text-4xl md:text-5xl font-bold mb-8'>
              A Family Tradition <br />
              <span className='text-cyan-400'>Since 1990</span>
            </h3>

            <div className='space-y-6 text-gray-300 text-lg'>
              <p>
                Founded with a passion for creating exceptional beverages, our
                cold drink factory has been a cornerstone of quality refreshment
                for over three decades. What began as a small family operation
                has grown into a thriving business, but we{`'`}ve never lost
                sight of our core values.
              </p>
              <p>
                At RefreshFizz, we blend traditional techniques with modern
                innovation to create beverages that delight and refresh. Our
                commitment to using premium ingredients and sustainable
                practices means you can enjoy our drinks knowing they{`'`}re
                made with care.
              </p>
              <div className='pt-4'>
                <motion.a
                  href='#contact'
                  className='inline-flex items-center text-cyan-400 font-medium text-lg group'
                  whileHover={{ x: 5 }}>
                  Learn more about our journey
                  <svg
                    className='w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className='w-full lg:w-1/2 relative'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
            <div className='relative'>
              {/* Image frame with decorative elements */}
              <div className='absolute -inset-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-xl'></div>
              <div className='absolute -top-6 -right-6 w-32 h-32 rounded-full border border-cyan-500/30 z-10'></div>
              <div className='absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-cyan-500/30 z-10'></div>

              <div className='relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-zinc-800 z-20'>
                <div className='absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay z-10'></div>
                <img
                  src='https://images.unsplash.com/photo-1606168094336-48f8b0c84c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZGElMjBmYWN0b3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80'
                  alt='Cold drink factory production line'
                  className='w-full h-auto object-cover aspect-[4/3]'
                />
              </div>
            </div>

            {/* Stats section */}
            <div className='grid grid-cols-2 gap-6 mt-10'>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className='bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-5 text-center'
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}>
                  <h4 className='text-3xl font-bold text-cyan-400 mb-1'>
                    {stat.value}
                  </h4>
                  <p className='text-gray-400'>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
