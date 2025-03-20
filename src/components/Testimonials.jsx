import { useState, useRef, useEffect } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from 'framer-motion';

const indianImages = {
  male1:
    'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg', // Indian businessman
  male2:
    'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg', // Indian retail manager
  female1:
    'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg', // Indian professional woman
  female2:
    'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg', // Indian restaurant owner
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.3 });
  const controls = useAnimation();

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate elements when they come into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const testimonials = [
    {
      id: 1,
      quote:
        'Omkar Soda has transformed our restaurant beverage menu. Their traditional flavors like Limbu Soda are extremely popular with our customers during summer months!',
      name: 'Priya Sharma',
      position: 'Surat Restaurant Owner',
      image: indianImages.female2,
      rating: 5,
    },
    {
      id: 2,
      quote:
        "As a retail chain manager, I appreciate Omkar's reliable delivery and consistent quality. Their Masala Soda is the top-selling beverage across all my stores in Gujarat.",
      name: 'Rajesh Patel',
      position: 'Retail Chain Manager',
      image: indianImages.male2,
      rating: 5,
    },
    {
      id: 3,
      quote:
        'The quality and taste of Omkar Soda are unmatched. Their commitment to using authentic ingredients makes their drinks perfect for traditional Indian celebrations.',
      name: 'Ananya Desai',
      position: 'Event Organizer',
      image: indianImages.female1,
      rating: 5,
    },
    {
      id: 4,
      quote:
        "We've partnered with Omkar for our corporate events in Surat for years. Their professional service and wide variety of refreshing drinks always impress our clients.",
      name: 'Vivek Mehta',
      position: 'Business Director',
      image: indianImages.male1,
      rating: 5,
    },
  ];

  // Handle manual navigation
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      id='testimonials'
      ref={sectionRef}
      className='py-24 bg-transparent from-zinc-800 via-zinc-900 to-zinc-800 relative overflow-hidden'>
      {/* Decorative elements */}
      <motion.div
        className='absolute top-40 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className='absolute bottom-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-cyan-400 text-xl font-semibold uppercase tracking-wider mb-4'>
            Testimonials
          </h2>
          <h3 className='text-5xl font-bold mb-6'>What Our Clients Say</h3>
          <p className='text-gray-300 text-lg'>
            Don{`'`}t just take our word for it. Hear from businesses and
            customers who have made our refreshing drinks a part of their
            success story across Gujarat.
          </p>
        </motion.div>

        <div className='max-w-5xl mx-auto'>
          {/* Navigation buttons - Added for better control */}
          <div className='flex justify-end mb-6 gap-3'>
            <button
              onClick={goToPrevious}
              className='w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 transition-colors'
              aria-label='Previous testimonial'>
              <svg
                className='w-6 h-6 text-cyan-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className='w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 transition-colors'
              aria-label='Next testimonial'>
              <svg
                className='w-6 h-6 text-cyan-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>

          {/* Main testimonial display */}
          <div className='relative h-[450px] mb-10'>
            <AnimatePresence mode='wait'>
              {testimonials.map(
                (testimonial, index) =>
                  index === activeIndex && (
                    <motion.div
                      key={testimonial.id}
                      className='absolute inset-0 flex flex-col md:flex-row gap-8 items-center bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 md:p-12'
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}>
                      <div className='w-full md:w-1/3 flex justify-center'>
                        <div className='relative'>
                          <div className='absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-xl'></div>
                          <div className='w-48 h-48 rounded-full overflow-hidden border-2 border-cyan-500/30 relative z-10'>
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className='w-full h-full object-cover'
                            />
                          </div>

                          {/* Floating quotation mark */}
                          <div className='absolute -top-2 -right-2 bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-20'>
                            {`"`}
                          </div>
                        </div>
                      </div>

                      <div className='w-full md:w-2/3 flex flex-col justify-center'>
                        <div className='flex mb-4'>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className='w-6 h-6 text-cyan-400'
                              fill='currentColor'
                              viewBox='0 0 20 20'>
                              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                          ))}
                        </div>

                        <p className='text-xl md:text-2xl italic text-gray-200 mb-6'>
                          {`"${testimonial.quote}"`}
                        </p>

                        <div>
                          <h4 className='text-xl font-bold text-white'>
                            {testimonial.name}
                          </h4>
                          <p className='text-cyan-400'>
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Testimonial navigation dots - Improved visibility */}
          <div className='flex justify-center gap-4'>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'bg-cyan-500 w-10'
                    : 'bg-zinc-600 hover:bg-zinc-500 w-3'
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Added preview cards of other testimonials for better visibility */}
          <div className='mt-14 grid grid-cols-4 gap-4 md:gap-6 md:grid'>
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={`preview-${testimonial.id}`}
                className={`cursor-pointer rounded-lg overflow-hidden border ${
                  idx === activeIndex
                    ? 'border-cyan-500'
                    : 'border-zinc-700 opacity-60 hover:opacity-100'
                }`}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ y: -5 }}>
                <div className='h-20 bg-zinc-800 p-3 relative flex items-center'>
                  <div className='w-12 h-12 rounded-full overflow-hidden mr-3'>
                    <img
                      src={testimonial.image}
                      alt=''
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='overflow-hidden'>
                    <h5 className='text-sm font-semibold truncate'>
                      {testimonial.name}
                    </h5>
                    <p className='text-xs text-cyan-400 truncate'>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
