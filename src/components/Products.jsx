import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from './ProductCard';

import sodaImg from '../images/soda.jpeg';
import limbuImg from '../images/limbu.jpeg';
import orangeImg from '../images/orange.jpeg';
import greenImg from '../images/green.jpeg';
import lemonImg from '../images/lemon.jpeg';
import beerImg from '../images/beer.jpeg';
import masalaImg from '../images/masala.jpeg';

export default function Products() {
  const [visibleCount, setVisibleCount] = useState(4);
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      name: 'SODA',
      description: 'Our classic soda with the perfect amount of fizz',
      badge: null,
      img: sodaImg,
    },
    {
      name: 'Limbu Soda',
      description: 'A refreshing lime twist to our signature soda',
      badge: 'Best Seller',
      img: limbuImg,
    },
    {
      name: 'Masala Soda',
      description: 'Bursting with aromatic spices for a unique experience',
      badge: "People's Favorite",
      img: masalaImg,
    },
    {
      name: 'Orange',
      description: 'Sweet citrus flavor that brings sunshine in every sip',
      badge: null,
      img: orangeImg,
    },
    {
      name: 'Green',
      description: 'A cool mint-infused soda for ultimate refreshment',
      badge: null,
      img: greenImg,
    },
    {
      name: 'Lemon',
      description: 'Tangy lemon soda that sparkles with zesty flavor',
      badge: null,
      img: lemonImg,
    },
    {
      name: 'Beer',
      description: 'Non-alcoholic malty beverage with a golden hue',
      badge: 'New',
      img: beerImg,
    },
  ];

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, products.length));
  };

  return (
    <div id='products' className='py-24 px-6 md:px-10'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className='text-center max-w-4xl mx-auto mb-16'>
        <h2 className='text-cyan-400 text-xl font-semibold uppercase tracking-wider mb-4'>
          Our Collection
        </h2>
        <h3 className='text-5xl font-bold mb-6'>Premium Beverages</h3>
        <p className='text-gray-300 text-lg'>
          Discover our range of refreshing sodas, crafted to perfection using
          traditional recipes and the finest ingredients. Each bottle promises a
          burst of flavor and refreshment.
        </p>
      </motion.div>

      <div
        ref={containerRef}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto'>
        {products.slice(0, visibleCount).map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}>
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>

      {visibleCount < products.length && (
        <motion.div
          className='flex justify-center mt-16'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}>
          <motion.button
            onClick={showMoreProducts}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-8 py-3 bg-cyan-500 rounded-full text-black font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/30'>
            Show More Products
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
