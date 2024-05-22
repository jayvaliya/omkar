import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav className='relative bg-zinc-900'>
      <div className='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
        <div className='flex items-center justify-between text-white text-4xl font-semibold gap-8'>
          <a href='/'>
            <img src={logo} alt="Omkar" className="h-10 w-auto" />
          </a>
          <div className=''>Omkar Soda</div>
        </div>
        {/* <div className='hidden md:flex md:items-center md:space-x-6'>
          <a href='/' className='text-gray-800 hover:text-gray-600'>Home</a>
          <a href='/about' className='text-gray-800 hover:text-gray-600'>About</a>
          <a href='/services' className='text-gray-800 hover:text-gray-600'>Services</a>
          <a href='/contact' className='text-gray-800 hover:text-gray-600'>Contact</a>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
