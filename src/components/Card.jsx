import PropTypes from 'prop-types';

export default function Card({ name, image }) {
  return (
    <div className='w-full max-w-xs m-3 overflow-hidden bg-white rounded-lg transition border-2 hover:shadow-gray-400 shadow-xl'>
      <div
        className='object-cover w-full h-96'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        alt='avatar'
      ></div>

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
};
