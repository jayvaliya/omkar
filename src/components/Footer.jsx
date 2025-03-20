import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer className='bg-zinc-950 border-t border-zinc-800'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='bg-black rounded-xl border-white border-[2px] py-2 px-2'>
                <img src={logo} alt='Omkar' className='h-8 w-auto' />
              </div>
              <span className='text-xl font-bold'>Omkar Soda</span>
            </div>
            <p className='text-gray-400 max-w-md'>
              Welcome to Omkar Soda! We are dedicated to crafting delicious and
              refreshing soft drinks for everyone to enjoy. Our commitment to
              quality and flavor has made us a trusted name in beverages for
              over three decades.
            </p>
          </div>

          <div>
            <h5 className='text-lg font-semibold mb-4'>Our Products</h5>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#products'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'>
                  Soft Drinks
                </a>
              </li>
              <li>
                <a
                  href='#products'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'>
                  Energy Drinks
                </a>
              </li>
              <li>
                <a
                  href='#products'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'>
                  Mineral Water
                </a>
              </li>
              <li>
                <a
                  href='#products'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'>
                  Flavored Water
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className='text-lg font-semibold mb-4'>Quick Links</h5>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#about'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#process'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'>
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href='#testimonials'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'>
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} Omkar Soda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
