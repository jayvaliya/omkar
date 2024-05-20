import bgImage from '../images/bg2.png';

function Hero() {
  const backgroundImageUrl = bgImage;

  const heroStyles = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '38rem',
  };

  return (
    <div className='w-full' style={heroStyles}>
      <div className='flex items-center justify-center w-full h-full bg-black/40'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-6xl'>
            Your Daily 
            <span className='text-green-400'> Dose </span> 
            of
            <span className='text-orange-400'> Sparkle </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
