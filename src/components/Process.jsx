import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Sourcing Ingredients',
    description:
      'We carefully select the finest ingredients, ensuring quality and freshness in every bottle.',
  },
  {
    number: '02',
    title: 'Crafting the Formula',
    description:
      'Our master mixologists balance flavors to create the perfect recipe for each soda variety.',
  },
  {
    number: '03',
    title: 'Production Process',
    description:
      'Using state-of-the-art equipment, we carbonate and mix our sodas with precision.',
  },
  {
    number: '04',
    title: 'Quality Testing',
    description:
      'Each batch undergoes rigorous testing to ensure consistent flavor and quality.',
  },
  {
    number: '05',
    title: 'Bottling & Packaging',
    description:
      'Our sodas are carefully bottled and sealed to preserve freshness and flavor.',
  },
];

export default function Process() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      id='process'
      className='py-24 bg-transparent from-zinc-900 via-zinc-800 to-zinc-900'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-cyan-400 text-xl font-semibold uppercase tracking-wider mb-4'>
            How We Work
          </h2>
          <h3 className='text-5xl font-bold mb-6'>Our Process</h3>
          <p className='text-gray-300 text-lg'>
            We take pride in our meticulous production process, ensuring each
            soda meets our high standards of quality and taste. From ingredient
            selection to bottling, every step matters.
          </p>
        </motion.div>

        <div ref={ref} className='max-w-6xl mx-auto'>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className='flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0'
              initial='hidden'
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: index * 0.2 } },
              }}>
              {/* Step number */}
              <div className='flex-shrink-0'>
                <motion.div
                  className='flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-500/50'
                  initial={{ scale: 0 }}
                  animate={controls}
                  variants={{
                    hidden: { scale: 0 },
                    visible: {
                      scale: 1,
                      transition: {
                        delay: index * 0.2 + 0.1,
                        type: 'spring',
                        stiffness: 100,
                      },
                    },
                  }}>
                  <span className='text-3xl font-bold text-cyan-400'>
                    {step.number}
                  </span>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    className='w-1 h-16 bg-cyan-500/20 mx-auto my-2'
                    initial={{ scaleY: 0 }}
                    animate={controls}
                    variants={{
                      hidden: { scaleY: 0, originY: 0 },
                      visible: {
                        scaleY: 1,
                        transition: { delay: index * 0.2 + 0.3, duration: 0.5 },
                      },
                    }}
                  />
                )}
              </div>

              {/* Step content */}
              <motion.div
                className='flex-1'
                initial={{ x: -30, opacity: 0 }}
                animate={controls}
                variants={{
                  hidden: { x: -30, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { delay: index * 0.2 + 0.2, duration: 0.5 },
                  },
                }}>
                <h4 className='text-2xl font-bold mb-3'>{step.title}</h4>
                <p className='text-gray-400 text-lg'>{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
