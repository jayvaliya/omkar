import bgImage from '../images/bg3.jpg';
// import bgImage from '../images/bg2.jpg'

function Hero() {
  const backgroundImageUrl = bgImage;

  const heroStyles = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '38rem',
  };

  return (
    <div className='m-5 rounded-2xl overflow-hidden' style={heroStyles}>
      <div className='flex items-center justify-center w-full h-full bg-black/40'>
        <div className='text-center'>
          <h1 className='text-4xl text-orange-300 lg:text-8xl font-bold font-montserrat'>
            Your Daily Does of Sparkle
            {/* <span className=' text-lime-600'> Dose </span> 
            of
            <span className='text-orange-600'> Sparkle </span> */}
          </h1>
        </div>
      </div>
    </div>
  );
}


export default Hero;