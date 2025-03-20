import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

export default function ProductCard({ name, description, badge, img }) {
  // Track mouse position for 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    setMousePosition({ x, y });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -15,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      className='group relative overflow-hidden rounded-2xl h-[460px] cursor-pointer'>
      {/* 3D Card Inner */}
      <motion.div
        style={{
          rotateX: mousePosition.y * -20, // Tilt based on Y position
          rotateY: mousePosition.x * 20, // Tilt based on X position
          transition: 'transform 0.1s ease-out',
        }}
        className='w-full h-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl relative overflow-hidden'>
        {/* Badge with animation */}
        {badge && (
          <motion.div
            className='absolute top-4 right-4 z-30'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3, type: 'spring' }}>
            <motion.span
              className='inline-flex items-center py-1.5 px-3 rounded-full text-sm font-medium bg-cyan-500 text-black'
              whileHover={{ scale: 1.05 }}>
              {badge}
            </motion.span>
          </motion.div>
        )}

        {/* Image with parallax effect */}
        <div className='h-72 overflow-hidden'>
          <motion.div
            className='w-full h-full relative z-10'
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // Subtle parallax based on mouse position
              translateX: mousePosition.x * -15,
              translateY: mousePosition.y * -15,
              transition: 'transform 0.1s ease-out',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content with subtle lift effect */}
        <motion.div
          className='p-6 flex flex-col justify-between relative z-20'
          style={{
            translateZ: 20, // Lifts text slightly off the card
            transition: 'transform 0.15s ease-out',
          }}>
          <h3 className='text-2xl font-semibold mb-2'>{name}</h3>
          <p className='text-gray-400 mb-4'>{description}</p>
        </motion.div>

        {/* Moving shine effect */}
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-50 z-20 pointer-events-none'
          style={{
            background:
              'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)',
            backgroundSize: '200% 100%',
            backgroundPosition: mousePosition.x > 0 ? '100% 0' : '0% 0',
            transition:
              'opacity 0.3s ease-out, background-position 0.3s ease-out',
          }}
        />

        {/* Enhanced glow effect */}
        <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-cyan-500/10 via-transparent to-cyan-500/20' />
      </motion.div>

      {/* 3D shadow effect */}
      <motion.div
        className='absolute -inset-3 bg-cyan-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300'
        style={{
          transformStyle: 'preserve-3d',
          rotateX: mousePosition.y * 20,
          rotateY: mousePosition.x * 20,
        }}
      />
    </motion.div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  badge: PropTypes.string,
  img: PropTypes.string.isRequired,
};
