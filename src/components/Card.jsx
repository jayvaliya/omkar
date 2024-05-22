import PropTypes from 'prop-types';

export default function Card({ name, image, badge }) {
  return (
    <div className='relative w-full max-w-xs m-3 overflow-hidden bg-orange-300 rounded-lg transition border-2 border-orange-300 hover:border-orange-300 hover:shadow-orange-200 shadow-lg'>
      {badge && <span className="absolute top-2 text-center right-2 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm bg-violet-700  text-black font-semibold">
        {badge}
      </span>}
      <div
        className='object-cover w-full h-96'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        alt='avatar'></div>
      <div className='py-5 text-center'>
        <a
          href='#'
          className='block text-xl font-bold text-gray-800'
          tabIndex='0'
          role='link'>
          {name}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
};
