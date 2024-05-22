// import image from '../images/bg.png';
import image from '../images/intro.png';

export default function Intro() {
  return (
    <div className='relative py-24 px-10 text-black overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center blur-sm'
        style={{backgroundImage: `url(${image})`}}
      ></div>
      <div className='relative md:w-2/3'>
        <p className='md:text-7xl text-5xl font-bold'>What We Are ??</p>
        <p className='text-3xl md:font-semibold font-base mb-10 mt-5 leading-none'>
          Quench your thirst with Omkar Soda, the top beverage company in Surat, Gujarat. We make a variety of soft drinks and energy drinks, producing large quantities to meet your needs. Each batch is tested for flavor and quality to ensure the best taste. Enjoy the refreshing and delicious taste of Omkar Soda&apos;s premium beverages.
        </p>
      </div>
    </div>
  );
}
