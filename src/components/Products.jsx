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
  const [visibleCount, setVisibleCount] = useState(4);

  const products = [
    {
      name: 'SODA',
      badge: null,
      img: sodaImg,
    },
    {
      name: 'Limbu Soda',
      badge: "Best Seller",
      img: limbuImg,
    },
    {
      name: 'Masala Soda',
      badge: "People's Favorite",
      img: masalaImg,
    },
    {
      name: 'Orange',
      badge: null,
      img: orangeImg,
    },
    {
      name: 'Green',
      badge: null,
      img: greenImg,
    },
    {
      name: 'Lemon',
      badge: null,
      img: lemonImg,
    },
    {
      name: 'Beer',
      badge: "New",
      img: beerImg,
    },
  ];

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className='p-3 md:px-20 md:py-6 h-auto'>
      <div className='mt-20 text-center text-5xl font-semibold'>Products</div>
      <div className='p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center'>
        {products.slice(0, visibleCount).map((item) => (
          <Card clr='red' name={item.name} image={item.img} badge={item.badge} key={item.name} />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className='flex justify-center mt-4'>
          <button
            onClick={showMoreProducts}
            className='px-4 py-2 text-black font-bold bg-orange-300 rounded'>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
