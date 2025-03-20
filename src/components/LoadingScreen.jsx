import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className='fixed inset-0 bg-black z-50 flex items-center justify-center'
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}>
      <div className='relative'>
        <motion.div
          className='w-32 h-32 rounded-full border-t-4 border-b-4 border-cyan-500'
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className='absolute inset-0 flex items-center justify-center'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}>
          <svg
            className='w-16 h-16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <motion.path
              d='M12 6C9.5 6 8.5 7.5 8 10M12 6C14.5 6 15.5 7.5 16 10M12 6V4M8 10C6.5 8.5 5 8 3 8.5M8 10C8.5 11.5 9.5 12 12 12M16 10C17.5 8.5 19 8 21 8.5M16 10C15.5 11.5 14.5 12 12 12M12 12V14M7 18C8.5 16.5 10 16 12 16M7 18C8 19.5 9.5 20 12 20M17 18C15.5 16.5 14 16 12 16M17 18C16 19.5 14.5 20 12 20M12 20V22'
              stroke='#F97316'
              strokeWidth='2'
              strokeLinecap='round'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </div>

      <motion.h2
        className='absolute bottom-1/4 font-bold text-2xl text-cyan-400'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}>
        REFRESHING MOMENTS
      </motion.h2>
    </motion.div>
  );
}
