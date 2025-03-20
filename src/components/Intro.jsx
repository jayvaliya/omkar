import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import image from '../images/intro.png';

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  return (
    <section ref={ref} className='relative py-24 overflow-hidden' id='intro'>
      {/* Background with dark overlay */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${image})` }}></div>
        <div className='absolute inset-0 bg-zinc-900/75'></div>

        {/* Decorative elements */}
        <motion.div
          className='absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className='absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          <motion.div
            className='w-full md:w-3/5'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h2 className='text-cyan-400 text-xl font-semibold uppercase tracking-wider mb-4'>
              Our Identity
            </h2>
            <h3 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white'>
              What Makes Us <span className='text-cyan-400'>Different</span>
            </h3>
            <div className='text-lg md:text-xl text-gray-300 space-y-4'>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                Quench your thirst with Omkar Soda, the premier beverage company
                in Surat, Gujarat. We specialize in crafting a diverse range of
                soft drinks and energy beverages that stand out in both quality
                and taste.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                Our state-of-the-art production facilities allow us to meet
                high-volume demands without compromising on excellence. Each
                batch undergoes rigorous testing to ensure consistent flavor
                profiles and unmatched quality.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='pt-6'>
                <a
                  href='#products'
                  className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg transition-transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20'>
                  Explore Our Products
                  <svg
                    className='w-5 h-5 ml-2'
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
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className='w-full md:w-2/5'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
            <div className='relative'>
              <div className='absolute -inset-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-xl'></div>
              <div className='relative p-6 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-xl'>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    {
                      icon: '🍹',
                      title: 'Premium Quality',
                      desc: 'Only the finest ingredients',
                    },
                    {
                      icon: '🌱',
                      title: 'Natural Flavors',
                      desc: 'Authentic taste in every sip',
                    },
                    {
                      icon: '♻️',
                      title: 'Sustainability',
                      desc: 'Eco-friendly practices',
                    },
                    {
                      icon: '🚚',
                      title: 'Wide Distribution',
                      desc: 'Available across the region',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className='p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-center'
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}>
                      <div className='text-3xl mb-2'>{item.icon}</div>
                      <h4 className='font-bold text-cyan-400'>{item.title}</h4>
                      <p className='text-sm text-gray-300'>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
