import { useState } from 'react';
import Card from './Card';
import sodaImg from '../images/soda.jpeg';
import limbuImg from '../images/limbu.jpeg';
import orangeImg from '../images/orange.jpeg';
import greenImg from '../images/green.jpeg';
import lemonImg from '../images/lemon.jpeg';
import beerImg from '../images/beer.jpeg';
import masalaImg from '../images/masala.jpeg';

export default function Products() {
  const [visibleCount, setVisibleCount] = useState(4); // Number of products to show initially

  const products = [
    {
      name: 'SODA',
      img: sodaImg,
    },
    {
      name: 'Limbu Soda',
      img: limbuImg,
    },
    {
      name: 'Masala Soda',
      img: masalaImg,
    },
    {
      name: 'orange',
      img: orangeImg,
    },
    {
      name: 'green',
      img: greenImg,
    },
    {
      name: 'lemon',
      img: lemonImg,
    },
    {
      name: 'beer',
      img: beerImg,
    },
  ];

  const showMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 10); // Show 3 more products
  };

  return (
    <div className='p-3 md:px-20 md:py-6 h-auto content-center'>
      <div className='text-center text-4xl font-semibold'>Products</div>
      <div className='p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4'>
        {products.slice(0, visibleCount).map((item) => (
          <Card clr='red' name={item.name} image={item.img} key={item.name} />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className='flex justify-center mt-4 content-center'>
          <button
            onClick={showMoreProducts}
            className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700'>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
